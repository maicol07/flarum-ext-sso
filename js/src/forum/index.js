import {extend, override} from "flarum/extend";
import app from "flarum/app";
import HeaderSecondary from "flarum/components/HeaderSecondary";
import SettingsPage from "flarum/components/SettingsPage";
import LogInModal from "flarum/components/LogInModal";


app.initializers.add('maicol07-sso', function () {
	if (!app.forum.data.attributes['maicol07-sso.login_url']) {
		return
	}
	override(LogInModal.prototype, 'init', redirectWhenLoginModalIsOpened);

	// Remove login button if checkbox is selected
	if (app.forum.data.attributes['maicol07-sso.remove_login_btn']) {
		extend(HeaderSecondary.prototype, "items", items => {
			items.remove("logIn");
		});
	} else {
		extend(HeaderSecondary.prototype, 'items', replaceLoginButton);
	}

	// Remove signup button if checkbox is selected
	if (app.forum.data.attributes['maicol07-sso.remove_signup_btn']) {
		extend(HeaderSecondary.prototype, "items", items => {
			items.remove("signUp");
		});
	} else {
		extend(HeaderSecondary.prototype, 'items', replaceSignupButton);
	}

	extend(SettingsPage.prototype, 'accountItems', removeProfileActions);
	extend(SettingsPage.prototype, 'settingsItems', checkRemoveAccountSection);

	function redirectWhenLoginModalIsOpened() {
		window.location.href = app.forum.data.attributes['maicol07-sso.login_url'];
		throw new Error('Stop execution');
	}

	function replaceLoginButton(items) {
		if (!items.has('logIn')) {
			return;
		}

		let loginUrl = app.forum.data.attributes['maicol07-sso.login_url'];

		items.replace('logIn',
			<a href={loginUrl} className="Button Button--link">
				{app.translator.trans('core.forum.header.log_in_link')}
			</a>
		);
	}

	function replaceSignupButton(items) {
		if (!items.has('signUp')) {
			return;
		}

		let signupUrl = app.forum.data.attributes['maicol07-sso.signup_url'];

		items.replace('signUp',
			<a href={signupUrl} className="Button Button--link">
				{app.translator.trans('core.forum.header.sign_up_link')}
			</a>
		);
	}

	function removeProfileActions(items) {
		items.remove('changeEmail');
		items.remove('changePassword');
	}

	function checkRemoveAccountSection(items) {
		if (items.has('account')
			&& items.get('account').props.children.length === 0) {
			items.remove('account');
		}
	}
});
