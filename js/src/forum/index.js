import {extend, override} from 'flarum/extend';
import app from 'flarum/app';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import SettingsPage from 'flarum/components/SettingsPage';
import LogInModal from 'flarum/components/LogInModal';

app.initializers.add('maicol07.sso', () => {
  // Remove login button if checkbox is selected
  extend(HeaderSecondary.prototype, 'items', (items) => {
    if (checkSettings('login_url')) {
      if (app.forum.attribute('maicol07.sso.disable_login_btn') === '1') {
        items.remove('logIn');
      } else {
        // Remove login button
        if (!items.has('logIn')) {
          return;
        }

        const loginUrl = app.forum.attribute('maicol07.sso.login_url');

        items.replace('logIn',
          <a href={loginUrl} className="Button Button--link">
            {app.translator.trans('core.forum.header.log_in_link')}
          </a>);

        override(LogInModal.prototype, 'oninit', () => {
          window.location.href = app.forum.attribute('maicol07.sso.login_url');
          throw new Error('Stop execution');
        });
      }
    }

    if (checkSettings('signup_url')) {
      if (app.forum.attribute('maicol07.sso.disable_signup_btn') === '1') {
        items.remove('signUp');
      } else {
        // Replace signup button
        if (!items.has('signUp')) {
          return;
        }

        const signupUrl = app.forum.attribute('maicol07.sso.signup_url');

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
  });

  extend(SettingsPage.prototype, 'settingsItems', (items) => {
    if (!checkSettings('login_url')) {
      return;
    }

    // Remove account section
    if (items.has('account') && items.get('account').children.length === 0) {
      items.remove('account');
    }
  });

  /**
   * Checks whether login URL is set
   *
   * @returns Boolean
   */
  function checkSettings(slug) {
    console.log(slug)
    console.log(app.forum.attribute(`maicol07.sso.${slug}`));
    return Boolean(app.forum.attribute(`maicol07.sso.${slug}`));
  }
});
