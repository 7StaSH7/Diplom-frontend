import BaseComponent from './BaseComponent';

export default class Form extends BaseComponent {
  constructor(props) {
    super();

    const {
      formSelector,
      actionButtonSelector,
      inputSelectors = [],
    } = props;

    this._formSelector = formSelector;
    this._actionButtonSelector = actionButtonSelector;
    this._inputSelectors = inputSelectors;

    this._submitForm = this._submitForm.bind(this);
  }

  _setEventListeners() {
    const inputEvent = (event) => {
      this[event.target.name] = event.target.value;
      if (!this._validateForm()) {
        this._actionButton.setAttribute('disabled', 'true');
      } else {
        this._actionButton.removeAttribute('disabled');
      }
      this._setServerError('');
    };

    const submitEvent = (event) => {
      this._setServerError('');
      this._submitForm(event);
    };

    this._setHandlers([
      { element: this._form, event: 'input', method: inputEvent },
      { element: this._form, event: 'submit', method: submitEvent },
    ]);
  }

  _selectInputs() {
    this._inputs = this._inputSelectors.map((selector) => this._form.querySelector(selector));
  }

  _setForm() {
    this._form = document.querySelector(this._formSelector);
    this._formError = this._form.querySelector('.popup__form-error_server-error');
  }

  _setActionButton() {
    this._actionButton = document.querySelector(this._actionButtonSelector);
  }

  _setServerError(message) {
    if (this._formError) {
      this._formError.textContent = message;
    }
  }

  _submitForm(event) {
    event.preventDefault();
  }

  _validateForm() {
    let isValid = true;
    if (this._inputs.length) {
      this._inputs.forEach((input) => {
        if (input) {
          isValid = isValid && this._validateInputElement(input);
        }
      });
    }
    return isValid;
  }

  _validateInputElement(input) {
    return input.validity.valid;
  }

  addForm() {
    this._setForm();
    this._setActionButton();
    this._setEventListeners();
    this._selectInputs();
    this._setServerError('');
  }

  close() {
    this._reset();
  }
}
