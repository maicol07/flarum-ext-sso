import app from 'flarum/app';

app.initializers.add('maicol07.sso', (app) => {
  app.extensionData
    .for('maicol07-sso')
    .registerSetting({
      setting: 'maicol07.sso.signup_url',
      label: app.translator.trans('maicol07.sso.admin.settings.signup_url'),
      type: 'url',
    })
    .registerSetting({
      setting: 'maicol07.sso.login_url',
      label: app.translator.trans('maicol07.sso.admin.settings.login_url'),
      type: 'url',
    })
    .registerSetting({
      setting: 'maicol07.sso.logout_url',
      label: app.translator.trans('maicol07.sso.admin.settings.logout_url'),
      type: 'url',
    })
    .registerSetting({
      setting: 'maicol07.sso.disable_login_btn',
      label: app.translator.trans('maicol07.sso.admin.settings.disable_login_btn'),
      type: 'boolean',
    })
    .registerSetting({
      setting: 'maicol07.sso.disable_signup_btn',
      label: app.translator.trans('maicol07.sso.admin.settings.disable_signup_btn'),
      type: 'boolean',
    })
    .registerSetting(() => (
      <div>
        <hr/>
        <h3> {app.translator.trans('maicol07.sso.admin.settings.jwt_section_subtitle')}:</h3>
      </div>
    ))
    .registerSetting({
      setting: 'maicol07.sso.jwt_iss',
      label: app.translator.trans('maicol07.sso.admin.settings.jwt_iss'),
      type: 'text',
    })
    .registerSetting({
      setting: 'maicol07.sso.jwt_signer_key',
      label: app.translator.trans('maicol07.sso.admin.settings.jwt_signer_key'),
      type: 'text',
    });
});
