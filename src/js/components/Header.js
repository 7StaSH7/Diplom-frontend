import '../../blocks/header/header.css';
import BaseComponent from './BaseComponent';

export default class Header extends BaseComponent {
  constructor(props) {
    super();

    const {
      lightNotAuthTemplate,
      lightAuthTemplate,
      darkAuthTemplate,
      authButtonSelector,
      theme,
      container,
    } = props;

    this._notAuthTemplate = theme === 'light' ? lightNotAuthTemplate : darkAuthTemplate;
    this._authTemplate = theme === 'light' ? lightAuthTemplate : darkAuthTemplate;
    this._authButtonSelector = authButtonSelector;
    this._container = container;
  }

  render({ isLoggedIn, userName }) {
    this._reset();
    this._container.innerHTML = '';

    const template = isLoggedIn ? this._authTemplate : this._notAuthTemplate;
    this._container.appendChild(template.cloneNode(true).content);

    let clickEvent;
    if (!isLoggedIn && this._dependencies.loginPopup) {
      clickEvent = this._dependencies.loginPopup.open;
    } else if (isLoggedIn && this._dependencies.auth) {
      clickEvent = this._dependencies.auth.logout;
      document.querySelector('.header__nav-item-name').textContent = userName;
    }

    if (clickEvent) {
      this._setHandlers([{
        element: this._container.querySelector(this._authButtonSelector),
        event: 'click',
        method: clickEvent,
      },
      ]);
    }
  }
}
