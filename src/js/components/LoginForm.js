import Form from './Form';

export default class LoginForm extends Form {
  async _submitForm(event) {
    event.preventDefault();
    this._setServerError('');
    if (this._dependencies.mainApi) {
      try {
        const loginResponse = await this._dependencies.mainApi.signin(
          { email: this.email, password: this.password },
        );
        if (loginResponse.status === 200) {
          if (this._dependencies.auth) {
            await this._dependencies.auth.authenticate();
          }

          this.close();

          if (this._dependencies.popup) {
            this._dependencies.popup.close();
          }
        } else {
          const responseError = await loginResponse.json();
          throw new Error(responseError.message);
        }
      } catch (err) {
        this._setServerError('Неправильное имя пользователя или пароль');
      }
    }
  }
}
