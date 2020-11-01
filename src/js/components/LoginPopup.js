import Popup from './Popup';
import '../../blocks/popup/__login/popup__login.css';

export default class LoginPopup extends Popup {
  _popupLinkClick() {
    this._loadRegisterPopup();
  }

  _loadRegisterPopup() {
    if (this._dependencies.registrationPopup) {
      this._clearContent();
      this._dependencies.registrationPopup.setContent();
    }
  }
}
