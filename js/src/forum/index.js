import {extend, override} from "flarum/extend";
import app from "flarum/app";
import HeaderSecondary from "flarum/components/HeaderSecondary";
import SettingsPage from "flarum/components/SettingsPage";
import LogInModal from "flarum/components/LogInModal";


app.initializers.add('maicol07-sso', function () {
	override(LogInModal.prototype, 'init', redirectWhenLoginModalIsOpened);

	// Remove login button if checkbox is selected
	extend(HeaderSecondary.prototype, "items", items => {
		if (!checkSettings()) {
			return
		}
		if (app.forum.data.attributes['maicol07-sso.disable_login_btn'] === "1") {
			items.remove("logIn");
		} else {
			replaceLoginButton(items)
		}
	});

	// Remove signup button if checkbox is selected
	extend(HeaderSecondary.prototype, "items", (items) => {
		if (!checkSettings()) {
			return
		}
		if (app.forum.data.attributes['maicol07-sso.disable_signup_btn'] === "1") {
			items.remove("signUp");
		} else {
			replaceSignupButton(items)
		}
	});

	extend(SettingsPage.prototype, 'accountItems', removeProfileActions);
	extend(SettingsPage.prototype, 'settingsItems', checkRemoveAccountSection);

	function redirectWhenLoginModalIsOpened() {
		if (!checkSettings()) {
			return
		}
		window.location.href = app.forum.data.attributes['maicol07-sso.login_url'];
		throw new Error('Stop execution');
	}

	function replaceLoginButton(items) {
		if (!checkSettings()) {
			return
		}

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
		if (!checkSettings()) {
			return
		}

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
		if (!checkSettings()) {
			return
		}

		items.remove('changeEmail');
		items.remove('changePassword');
	}

	function checkRemoveAccountSection(items) {
		if (!checkSettings()) {
			return
		}

		if (items.has('account')
			&& items.get('account').props.children.length === 0) {
			items.remove('account');
		}
	}

	/**
	 * Checks whether login URL is set
	 *
	 * @returns {*}
	 */
	function checkSettings() {
		return Boolean(app.forum.data.attributes['maicol07-sso.login_url']);
	}
});
