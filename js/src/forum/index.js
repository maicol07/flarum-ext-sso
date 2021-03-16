/* eslint-disable import/no-unresolved */
import {extend, override} from 'flarum/common/extend';
import app from 'flarum/common/app';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import SettingsPage from 'flarum/forum/components/SettingsPage';
import LogInModal from 'flarum/forum/components/LogInModal';

app.initializers.add('maicol07-sso', () => {
  /**
   * Checks whether login URL is set
   *
   * @returns Boolean
   */
  function checkSettings(slug) {
    return Boolean(app.forum.attribute(`maicol07-sso.${slug}`));
  }

  // Remove login button if checkbox is selected
  extend(HeaderSecondary.prototype, 'items', (items) => {
    if (checkSettings('login_url')) {
      if (app.forum.attribute('maicol07-sso.remove_login_btn') === '1') {
        items.remove('logIn');
      } else {
        // Remove login button
        if (!items.has('logIn')) {
          return;
        }

        const loginUrl = app.forum.attribute('maicol07-sso.login_url');

        items.replace('logIn',
          <a href={loginUrl} className="Button Button--link">
            {app.translator.trans('core.forum.header.log_in_link')}
          </a>);

        override(LogInModal.prototype, 'oninit', () => {
          window.location.href = app.forum.attribute('maicol07-sso.login_url');
          throw new Error('Stop execution');
        });
      }
    }

    if (checkSettings('signup_url')) {
      if (app.forum.attribute('maicol07-sso.remove_signup_btn') === '1') {
        items.remove('signUp');
      } else {
        // Replace signup button
        if (!items.has('signUp')) {
          return;
        }

        const signupUrl = app.forum.attribute('maicol07-sso.signup_url');

        items.replace('signUp',
          <a href={signupUrl} className="Button Button--link">
            {app.translator.trans('core.forum.header.sign_up_link')}
          </a>);
      }
    }
  });

  extend(SettingsPage.prototype, 'accountItems', (items) => {
    if (!checkSettings('login_url')) {
      return;
    }

    // Remove change email and password buttons
    items.remove('changeEmail');
    items.remove('changePassword');

    if (!checkSettings('manage_account_url')) {
      return;
    }
    items.add(
      'manageAccount',
      <a class="Button" href={app.forum.attribute('maicol07-sso.manage_account_url')}
         target={app.forum.attribute('maicol07-sso.manage_account_btn_open_in_new_tab') === '1' ? '_blank' : ''}>
        {app.translator.trans('maicol07-sso.forum.manage_account_btn')}
      </a>,
    );
  });

  extend(SettingsPage.prototype, 'settingsItems', (items) => {
    if (checkSettings('manage_account_url')) {
      return;
    }

    // Remove account section
    if (items.has('account') && items.get('account').children.length === 0) {
      items.remove('account');
    }
  });
});
