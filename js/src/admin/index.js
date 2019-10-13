import app from "flarum/app";
import SSOSettingsModal from "./components/SSOSettingsModal";

app.initializers.add('maicol07-sso', () => {
    app.extensionSettings['maicol07-sso'] = () => app.modal.show(new SSOSettingsModal());
});
