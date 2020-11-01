import '../../blocks/popup/popup.css';
import BaseComponent from './BaseComponent';

export default class Popup extends BaseComponent {
  constructor(props) {
    super(props);

    const {
      closeIcon,
      container,
      contentContainer,
      template,
    } = props;

    this._closeIcon = closeIcon;
    this._container = container;
    this._contentContainer = contentContainer;
    this._template = template;

    this._handleKeydown = this._handleKeydown.bind(this);
    this._clearContent = this._clearContent.bind(this);
    this._popupLinkClick = this._popupLinkClick.bind(this);

    this.setContent = this.setContent.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  _setTemplate() {
    this._contentContainer.appendChild(this._template.cloneNode(true).content);
  }

  _setEventListeners() {
    this._setHandlers([
      { element: this._closeIcon, event: 'click', method: (event) => this.close(event) },
      { element: document, event: 'keydown', method: (event) => this._handleKeydown(event) },
      { element: document, event: 'mousedown', method: (event) => this._handleKeydown(event) },
      { element: this._container.querySelector('.popup__link'), event: 'click', method: this._popupLinkClick },
    ]);
  }

  _clearContent() {
    if (this._dependencies.form) {
      this._dependencies.form.close();
    }

    this._reset();
    this._contentContainer.innerHTML = '';
  }

  _handleKeydown(event) {
    if (event.key === 'Escape' || event.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  _popupLinkClick() {
    return true;
  }

  setContent() {
    this._setTemplate();
    this._setEventListeners();

    if (this._dependencies.form) {
      this._dependencies.form.addForm();
    }
  }

  open() {
    this.setContent();
    this._container.classList.add('popup_opened');
  }

  close() {
    this._clearContent();
    this._container.classList.remove('popup_opened');
  }
}
