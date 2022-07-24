import ExtensionPage, { ExtensionPageAttrs } from 'flarum/admin/components/ExtensionPage';
import app from 'flarum/admin/app';
import Mithril from 'mithril';

export class SettingsPage extends ExtensionPage {
  content(vnode: Mithril.VnodeDOM<ExtensionPageAttrs, this>): JSX.Element {
    const settings = app.extensionData.getSettings(this.extension.id);

    return (
      <div className="ExtensionPage-settings">
        <div className="container">
          <div className="Form">
            {settings?.map(this.buildSettingComponent.bind(this))}
            <div className="Form-group">{this.submitButton(vnode)}</div>
          </div>
        </div>
      </div>
    );
  }
}
