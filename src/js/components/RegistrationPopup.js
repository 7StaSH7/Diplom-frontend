import Popup from './Popup';

export default class RegistrationPopup extends Popup {
  _popupLinkClick() {
    this._loadLoginPopup();
  }

  _loadLoginPopup() {
    if (this._dependencies.loginPopup) {
      this._clearContent();
      this._dependencies.loginPopup.setContent();
    }
  }

  loadSuccessfulRegPopup() {
    if (this._dependencies.successfulRegistrationPopup) {
      this._clearContent();
      this._dependencies.successfulRegistrationPopup.setContent();
    }
  }
}
