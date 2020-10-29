const HEADER = {
  container: document.querySelector('.header-nav-container'),
  lightNotAuthTemplate: document.querySelector('#header-nav-not-logged-in'),
  lightAuthTemplate: document.querySelector('#header-nav-logged-in'),
  darkNotAuthTemplate: document.querySelector('#header-nav-not-logged-in-dark'),
  darkAuthTemplate: document.querySelector('#header-nav-logged-in-dark'),
  authButtonSelector: '.header__nav-item-button',
};

const SEARCH = {
  form: {
    formSelector: '.header-search__form',
    requiredInputSelectors: ['.header-search__input'],
    actionButtonSelector: '.header-search__button',
  },
};

const SEARCH_RESULTS = {
  container: document.querySelector('.search-results'),
  selectors: {
    items: '.search-results__items',
  },
  templates: {
    results: document.querySelector('#search-results'),
    searchResultsProcess: document.querySelector('#search-results-process'),
    searchNoResults: document.querySelector('#search-no-results'),
    searchError: document.querySelector('#search-error'),
  },
};

const SAVED_RESULTS = {
  container: document.querySelector('.saved-articles'),
  templates: {
    results: document.querySelector('#saved-articles'),
  },
  selectors: {
    items: '.saved-articles__items',
  },
};

const POPUP = {
  container: document.querySelector('.popup'),
  contentContainer: document.querySelector('.popup__content'),
  closeIcon: document.querySelector('.popup__close'),
};

const LOGIN_POPUP = {
  template: document.querySelector('#popup-login'),
  form: {
    formSelector: '.popup__form',
    actionButtonSelector: '.popup__form-button',
    requiredInputSelectors: [
      '.popup__form-input_email',
      '.popup__form-input_password',
    ],
  },
};

const REGISTRATION_POPUP = {
  template: document.querySelector('#popup-registration'),
  form: {
    formSelector: '.popup__form',
    actionButtonSelector: '.popup__form-button',
    requiredInputSelectors: [
      '.popup__form-input_email',
      '.popup__form-input_password',
      '.popup__form-input_name',
    ],
  },
};

const SUCCESSFUL_REGISTRATION_POPUP = {
  template: document.querySelector('#popup-successful-registration'),
};

const mainApiUrl = 'https://api.news-stash.tk';
const MAIN_API_ROUTES = {
  signup: `${mainApiUrl}/signup`,
  signin: `${mainApiUrl}/signin`,
  logout: `${mainApiUrl}/logout`,
  getSpecificUser: `${mainApiUrl}/users/me`,
  getArticles: `${mainApiUrl}/articles`,
  createArticle: `${mainApiUrl}/articles`,
  deleteArticle: `${mainApiUrl}/articles`,
};

const NEWS_API = {
  url: 'https://newsapi.org/v2/everything',
  sortBy: 'publishedAt',
  pageSize: 100,
  apiKey: '5c1f5cc59318410fb892e15b34bc2d4d',
};

const ARTICLES = {
  articlesQuantity: 3,
};

const ARTICLE_CARD = {
  template: document.querySelector('#article-card'),
  actionTemplates: {
    baseAction: document.querySelector('#article-card-base-action'),
    likeAction: document.querySelector('#article-card-like-action'),
    unlikeAction: document.querySelector('#article-card-unlike-action'),
    savedAction: document.querySelector('#article-card-saved-action'),
  },
};

const SAVED_STAT = {
  name: document.querySelector('.header-saved__name'),
  articlesCount: document.querySelector('.header-saved__articles-count'),
  details: document.querySelector('.header-saved__details'),
  tagTemplate: document.querySelector('#header-saved-detail-tag'),
};

export {
  HEADER,
  SEARCH,
  SEARCH_RESULTS,
  SAVED_RESULTS,
  POPUP,
  LOGIN_POPUP,
  REGISTRATION_POPUP,
  SUCCESSFUL_REGISTRATION_POPUP,
  MAIN_API_ROUTES,
  NEWS_API,
  ARTICLES,
  ARTICLE_CARD,
  SAVED_STAT,
};
