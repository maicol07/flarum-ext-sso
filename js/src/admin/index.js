import app from 'flarum/admin/app';

app.initializers.add('maicol07-sso', () => {
  app.extensionData
    .for('maicol07-sso')
    .registerSetting({
      setting: 'maicol07-sso.signup_url',
      label: app.translator.trans('maicol07-sso.admin.settings.signup_url'),
      type: 'url',
    })
    .registerSetting({
      setting: 'maicol07-sso.login_url',
      label: app.translator.trans('maicol07-sso.admin.settings.login_url'),
      type: 'url',
    })
    .registerSetting({
      setting: 'maicol07-sso.logout_url',
      label: app.translator.trans('maicol07-sso.admin.settings.logout_url'),
      type: 'url',
    })
    .registerSetting({
      setting: 'maicol07-sso.manage_account_url',
      label: app.translator.trans('maicol07-sso.admin.settings.manage_account_url'),
      type: 'url',
    })
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
    .registerSetting(() => (
      <div>
        <hr/>
        <h3> {app.translator.trans('maicol07-sso.admin.settings.jwt_section_subtitle')}:</h3>
      </div>
    ))
    .registerSetting({
      setting: 'maicol07-sso.jwt_iss',
      label: app.translator.trans('maicol07-sso.admin.settings.jwt_iss'),
      type: 'text',
    })
    .registerSetting({
      setting: 'maicol07-sso.jwt_signing_algorithm',
      label: app.translator.trans('maicol07-sso.admin.settings.jwt_signing_algorithm'),
      type: 'select',
      options: {
        Sha256: 'Sha256',
        Sha384: 'Sha384',
        Sha512: 'Sha512',
      },
      default: 'Sha256',
    })
    .registerSetting({
      setting: 'maicol07-sso.jwt_signer_key',
      label: app.translator.trans('maicol07-sso.admin.settings.jwt_signer_key'),
      type: 'text',
    });
});
