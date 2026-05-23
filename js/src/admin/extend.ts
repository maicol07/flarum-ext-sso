import Extend from 'flarum/common/extenders';

import SettingsPage from './SettingsPage';

export default [
  new Extend.Admin().page(SettingsPage)
];
