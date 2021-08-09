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

  /**
   * Returns login and signup props
   *
   * @returns {{login: {removeItem: boolean, itemName: string, text: any, url: *}, signup: {removeItem: boolean, itemName: string, text: any, url: *}}}
   */
  function getItems() {
    return {
      login: {
        url: setting('login_url'),
        itemName: 'logIn',
        removeItem: setting('remove_login_btn') === '1',
        text: app.translator.trans('core.forum.header.log_in_link')
      },
      signup: {
        url: setting('logout_url'),
        itemName: 'signUp',
        removeItem: setting('remove_signup_btn') === '1',
        text: app.translator.trans('core.forum.header.sign_up_link')
      }
    };
  }

  override(LogInModal.prototype, 'oncreate', () => {
    const items = getItems();
    window.location.href = items.login.url;
    throw new Error('Stop execution');
  });

  extend(HeaderSecondary.prototype, 'items', (buttons) => {
    const items = getItems();
    for (const [, props] of Object.entries(items)) {
      if (props.url) {
        if (props.removeItem) {
          buttons.remove(props.itemName);
        } else {
          // Remove login button
          if (!buttons.has(props.itemName)) {
            return;
          }
          buttons.replace(props.itemName,
            <a href={props.url} className="Button Button--link">
              {props.text}
            </a>);
        }
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
})
;
