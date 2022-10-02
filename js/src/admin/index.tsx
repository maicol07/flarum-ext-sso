import app from 'flarum/admin/app';
import { SettingsPage } from './SettingsPage';

app.initializers.add('maicol07-sso', () => {
  app.extensionData
    .for('maicol07-sso')
    .registerSetting({
      setting: 'maicol07-sso.manage_account_btn_open_in_new_tab',
      label: app.translator.trans('maicol07-sso.admin.settings.manage_account_btn_open_in_new_tab'),
      type: 'boolean',
    })
    .registerSetting({
      setting: 'maicol07-sso.remove_login_btn',
      label: app.translator.trans('maicol07-sso.admin.settings.remove_login_btn'),
      type: 'boolean',
    })
    .registerSetting({
      setting: 'maicol07-sso.remove_signup_btn',
      label: app.translator.trans('maicol07-sso.admin.settings.remove_signup_btn'),
      type: 'boolean',
    })
    .registerPage(SettingsPage);
});
