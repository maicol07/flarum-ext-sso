import ExtensionPage, { ExtensionPageAttrs } from 'flarum/admin/components/ExtensionPage';
import app from 'flarum/admin/app';
import Mithril from 'mithril';
import { SettingsComponentOptions } from 'flarum/admin/components/AdminPage';
import Button from 'flarum/common/components/Button';

export class SettingsPage extends ExtensionPage {
  content(vnode: Mithril.VnodeDOM<ExtensionPageAttrs, this>): JSX.Element {
    const settings = app.extensionData.getSettings(this.extension.id);

    const flarumSettings = this.flarumClientSettings(1);

    return (
      <div className="ExtensionPage-settings">
        <div className="container">
          <div className="Form">
            <div className="Form-group">
              {this.buildSettingComponent({
                type: 'checkbox',
                label: 'Provider mode',
                setting: 'maicol07-sso.provider_mode',
                help: app.translator.trans('maicol07-sso.admin.settings.provider_mode'),
                className: 'maicol07-sso--provider-mode',
              })}
              <div hidden={!this.booleanSetting('provider_mode')}>
                <div className="Form-group">
                  <table>
                    <thead>
                      <tr>
                        {flarumSettings.map((setting) => (
                          <th key={setting.setting}>
                            {setting.label}
                            <br />
                            <span className="helpText" style={{ fontWeight: 'normal' }}>
                              {setting.help}
                            </span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>{this.clientRows()}</tbody>
                  </table>
                </div>
                <Button className="Button" aria-label="Add instance" icon="fa fa-plus" onclick={this.addRow.bind(this)}>
                  Add Flarum instance
                </Button>
              </div>
            </div>

            <div className="Form-group" hidden={this.booleanSetting('provider_mode')}>
              <hr />
              <div className="Form-group">{this.generalClientSettings().map(this.buildSettingComponent.bind(this))}</div>
              {settings?.map(this.buildSettingComponent.bind(this))}

              <hr />

              <div className="Form-group">
                <h4>{app.translator.trans('maicol07-sso.admin.settings.jwt_section_subtitle')}</h4>
                {this.jwtSettings().map(this.buildSettingComponent.bind(this))}
              </div>
            </div>

            <div className="Form-group">{this.submitButton()}</div>
          </div>
        </div>
      </div>
    );
  }

  oncreate(vnode: Mithril.VnodeDOM<ExtensionPageAttrs, this>) {
    super.oncreate(vnode);
    this.setting('maicol07-sso.provider_mode').map(() => m.redraw());
  }

  addRow() {
    const next = this.clientRows().length + 1;
    app.data.settings[`maicol07-sso.client${next}_url`] = '';
  }

  clientRows() {
    const clientRows = [];

    let i = 1;
    while (`maicol07-sso.client${i}_url` in app.data.settings) {
      clientRows.push(
        <tr key={`client${i}`}>
          {this.flarumClientSettings(i).map((setting) => {
            setting.label = undefined;
            setting.help = undefined;
            return <td key={setting.setting}>{this.buildSettingComponent(setting)}</td>;
          })}
        </tr>
      );
      i++;
    }

    return clientRows;
  }

  flarumClientSettings(clientNumber: number): SettingsComponentOptions[] {
    return [
      {
        setting: `maicol07-sso.client${clientNumber}_name`,
        type: 'text',
        label: app.translator.trans('maicol07-sso.admin.settings.client_name'),
        help: app.translator.trans('maicol07-sso.admin.settings.client_name_help'),
      },
      {
        setting: `maicol07-sso.client${clientNumber}_url`,
        type: 'text',
        label: app.translator.trans('maicol07-sso.admin.settings.client_url'),
        help: app.translator.trans('maicol07-sso.admin.settings.client_url_help'),
      },
      {
        setting: `maicol07-sso.client${clientNumber}_api_key`,
        type: 'password',
        label: app.translator.trans('maicol07-sso.admin.settings.client_api_key'),
        help: app.translator.trans('maicol07-sso.admin.settings.client_api_key_help'),
      },
      {
        setting: `maicol07-sso.client${clientNumber}_password_token`,
        type: 'password',
        label: app.translator.trans('maicol07-sso.admin.settings.client_password_token'),
        help: app.translator.trans('maicol07-sso.admin.settings.client_password_token_help'),
      },
      {
        setting: `maicol07-sso.client${clientNumber}_verify_ssl`,
        type: 'checkbox',
        label: app.translator.trans('maicol07-sso.admin.settings.client_verify_ssl'),
        help: app.translator.trans('maicol07-sso.admin.settings.client_verify_ssl_help'),
      },
    ];
  }

  generalClientSettings(): SettingsComponentOptions[] {
    return [
      {
        setting: 'maicol07-sso.login_url',
        label: app.translator.trans('maicol07-sso.admin.settings.login_url'),
        type: 'url',
      },
      {
        setting: 'maicol07-sso.signup_url',
        label: app.translator.trans('maicol07-sso.admin.settings.signup_url'),
        type: 'url',
      },
      {
        setting: 'maicol07-sso.logout_url',
        label: app.translator.trans('maicol07-sso.admin.settings.logout_url'),
        type: 'url',
      },
      {
        setting: 'maicol07-sso.manage_account_url',
        label: app.translator.trans('maicol07-sso.admin.settings.manage_account_url'),
        type: 'url',
      },
      {
        setting: 'maicol07-sso.cookies_prefix',
        label: app.translator.trans('maicol07-sso.admin.settings.cookies_prefix'),
        type: 'text',
      },
    ];
  }

  jwtSettings(): SettingsComponentOptions[] {
    return [
      {
        setting: 'maicol07-sso.jwt_iss',
        label: app.translator.trans('maicol07-sso.admin.settings.jwt_iss'),
        type: 'text',
      },
      {
        setting: 'maicol07-sso.jwt_signing_algorithm',
        label: app.translator.trans('maicol07-sso.admin.settings.jwt_signing_algorithm'),
        type: 'select',
        options: {
          Sha256: 'Sha256',
          Sha384: 'Sha384',
          Sha512: 'Sha512',
        },
        default: 'Sha256',
      },
      {
        setting: 'maicol07-sso.jwt_signer_key',
        label: app.translator.trans('maicol07-sso.admin.settings.jwt_signer_key'),
        type: 'text',
      },
    ];
  }

  booleanSetting(setting: string): boolean {
    return Boolean(Number(this.setting(`maicol07-sso.${setting}`)()));
  }
}
