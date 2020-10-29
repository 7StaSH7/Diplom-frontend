import Popup from './Popup';

export default class SuccessfulRegistrationPopup extends Popup {
  _popupLinkClick() {
    this._loadLoginPopup();
  }

  _loadLoginPopup() {
    if (this._dependencies.loginPopup) {
      this._clearContent();
      this._dependencies.loginPopup.setContent();
    }
  }
}
