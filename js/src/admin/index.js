// noinspection NpmUsedModulesInstalled
import app from 'flarum/app';
import SSOSettingsModal from './components/SSOSettingsModal';

// noinspection JSUnresolvedVariable
app.initializers.add('maicol07-sso', () => {
  SSOSettingsModal();
});
