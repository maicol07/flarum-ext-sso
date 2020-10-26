import { settings } from '@fof-components';

const { SettingsModal, items: { StringItem, BooleanItem } } = settings;

export default () => {
  // noinspection JSUnusedGlobalSymbols
  app.extensionSettings['maicol07-sso'] = () => app.modal.show(
    SettingsModal, {
      title: app.translator.trans('maicol07-sso.admin.settings.title'),
      size: 'small',
      items: (e) => [
        <StringItem setting={e} name="maicol07-sso.signup_url">
          {app.translator.trans('maicol07-sso.admin.settings.signup_url')}
        </StringItem>,
        <StringItem setting={e} name="maicol07-sso.login_url">
          {app.translator.trans('maicol07-sso.admin.settings.login_url')}
        </StringItem>,
        <StringItem setting={e} name="maicol07-sso.logout_url">
          {app.translator.trans('maicol07-sso.admin.settings.logout_url')}
        </StringItem>,
        <BooleanItem setting={e} name="maicol07-sso.disable_login_btn">
          {app.translator.trans('maicol07-sso.admin.settings.disable_login_btn')}
        </BooleanItem>,
        <BooleanItem setting={e} name="maicol07-sso.disable_signup_btn">
          {app.translator.trans('maicol07-sso.admin.settings.disable_signup_btn')}
        </BooleanItem>,
        <StringItem setting={e} name="maicol07-sso.jwt_iss">
          {app.translator.trans('maicol07-sso.admin.settings.jwt_iss')}
        </StringItem>,
        <StringItem setting={e} name="maicol07-sso.jwt_signer_key">
          {app.translator.trans('maicol07-sso.admin.settings.jwt_signer_key')}
        </StringItem>,
      ],
    },
  );
};
