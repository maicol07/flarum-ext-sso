import {settings} from '@fof-components';

const {SettingsModal, items: {StringItem, BooleanItem}} = settings;

export default () => {
	app.extensionSettings['maicol07-sso'] = () =>
		app.modal.show(
			new SettingsModal({
				title: app.translator.trans('maicol07-sso.admin.settings.title'),
				size: 'small',
				items: [
					<StringItem key="maicol07-sso.signup_url">
						{app.translator.trans('maicol07-sso.admin.settings.signup_url')}
					</StringItem>,
					<StringItem key="maicol07-sso.login_url">
						{app.translator.trans('maicol07-sso.admin.settings.login_url')}
					</StringItem>,
					<StringItem key="maicol07-sso.logout_url">
						{app.translator.trans('maicol07-sso.admin.settings.logout_url')}
					</StringItem>,
					<BooleanItem key="maicol07-sso.disable_login_btn">
						{app.translator.trans('maicol07-sso.admin.settings.disable_login_btn')}
					</BooleanItem>,
					<BooleanItem key="maicol07-sso.disable_signup_btn">
						{app.translator.trans('maicol07-sso.admin.settings.disable_signup_btn')}
					</BooleanItem>
				],
			})
		);
}
/*
export default class SSOSettingsModal extends SettingsModal {
    className() {
        return 'Modal--small';
    }

    title() {
        return app.translator.trans('maicol07-sso.admin.settings.title');
    }

    form() {
        return [
            <div className="Form-group">
                <label>{app.translator.trans('maicol07-sso.admin.settings.signup_url')}</label>
                <input className="FormControl" bidi={this.setting('maicol07-sso.signup_url')}/>
            </div>,
            <div className="Form-group">
                <label>{app.translator.trans('maicol07-sso.admin.settings.login_url')}</label>
                <input className="FormControl" bidi={this.setting('maicol07-sso.login_url')}/>
            </div>,
            <div className="Form-group">
                <label>{app.translator.trans('maicol07-sso.admin.settings.logout_url')}</label>
                <input className="FormControl" bidi={this.setting('maicol07-sso.logout_url')}/>
            </div>,
			<div className="Form-group">
				<label>{app.translator.trans('maicol07-sso.admin.settings.disable_login_btn')}</label>
				<input type="checkbox" className="FormControl" bidi={this.setting('maicol07-sso.disable_login_btn')}/>
			</div>,
			<div className="Form-group">
				<label>{app.translator.trans('maicol07-sso.admin.settings.disable_signup_btn')}</label>
				<Switch className="FormControl" bidi={this.setting('maicol07-sso.disable_signup_btn')}/>
			</div>
        ];
    }
}
*/
