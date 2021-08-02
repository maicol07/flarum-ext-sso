import {extend, override} from 'flarum/common/extend';
import app from 'flarum/forum/app';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import SettingsPage from 'flarum/forum/components/SettingsPage';
import LogInModal from 'flarum/forum/components/LogInModal';

app.initializers.add('maicol07-sso', () => {
  /**
   * Returns a setting added by the extension
   *
   * @param {string} slug
   * @returns {any}
   */
  function setting(slug) {
    return app.forum.attribute(`maicol07-sso.${slug}`);
  }

  // Remove login button if checkbox is selected
  extend(HeaderSecondary.prototype, 'items', (items) => {
    const loginUrl = setting('login_url');
    if (loginUrl) {
      if (setting('remove_login_btn') === '1') {
        items.remove('logIn');
      } else {
        // Remove login button
        if (!items.has('logIn')) {
          return;
        }

        override(LogInModal.prototype, 'oninit', () => {
          window.location.href = loginUrl;
          throw new Error('Stop execution');
        });

        items.replace('logIn',
          <a href={loginUrl} className="Button Button--link">
            {app.translator.trans('core.forum.header.log_in_link')}
          </a>);
      }
    }

    const signupUrl = setting('signup_url');
    if (signupUrl) {
      if (setting('remove_signup_btn') === '1') {
        items.remove('signUp');
      } else {
        // Replace signup button
        if (!items.has('signUp')) {
          return;
        }

        items.replace('signUp',
          <a href={signupUrl} className="Button Button--link">
            {app.translator.trans('core.forum.header.sign_up_link')}
          </a>);
      }
    }
  });

  extend(SettingsPage.prototype, 'accountItems', (items) => {
    if (!setting('login_url')) {
      return;
    }

    // Remove change email and password buttons
    items.remove('changeEmail');
    items.remove('changePassword');

    if (!setting('manage_account_url')) {
      return;
    }
    items.add(
      'manageAccount',
      <a class="Button" href={setting('manage_account_url')}
         target={setting('manage_account_btn_open_in_new_tab') === '1' ? '_blank' : ''}>
        {app.translator.trans('maicol07-sso.forum.manage_account_btn')}
      </a>,
    );
  });

  extend(SettingsPage.prototype, 'settingsItems', (items) => {
    if (setting('manage_account_url')) {
      return;
    }

    // Remove account section
    if (items.has('account') && items.get('account').children.length === 0) {
      items.remove('account');
    }
  });
});
