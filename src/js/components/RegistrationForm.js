import Form from './Form';

export default class RegistrationForm extends Form {
  async _submitForm(event) {
    event.preventDefault();
    this._setServerError('');

    if (this._dependencies.mainApi) {
      try {
        const registrationResponse = await this._dependencies.mainApi.signup(
          { email: this.email, password: this.password, name: this.name },
        );
        if (registrationResponse.status === 200) {
          if (this._dependencies.popup) {
            this._dependencies.popup.loadSuccessfulRegPopup();
          }
        } else {
          const responseError = await registrationResponse.json();
          throw new Error(responseError.message);
        }
      } catch (err) {
        this._setServerError('Такой пользователь уже зарегистрирован!');
      }
    }
  }
}
