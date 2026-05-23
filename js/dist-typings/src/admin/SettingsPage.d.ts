import ExtensionPage, { ExtensionPageAttrs } from 'flarum/admin/components/ExtensionPage';
import Mithril from 'mithril';
import { SettingsComponentOptions } from 'flarum/admin/components/AdminPage';
export declare class SettingsPage extends ExtensionPage {
    content(vnode: Mithril.VnodeDOM<ExtensionPageAttrs, this>): JSX.Element;
    oncreate(vnode: Mithril.VnodeDOM<ExtensionPageAttrs, this>): void;
    addRow(): void;
    clientRows(): JSX.Element[];
    flarumClientSettings(clientNumber: number): SettingsComponentOptions[];
    generalClientSettings(): SettingsComponentOptions[];
    jwtSettings(): SettingsComponentOptions[];
    booleanSetting(setting: string): boolean;
}
