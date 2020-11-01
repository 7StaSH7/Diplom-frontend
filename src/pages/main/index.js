import './index.css';
import {
  HEADER,
  SEARCH,
  SEARCH_RESULTS,
  POPUP,
  LOGIN_POPUP,
  REGISTRATION_POPUP,
  SUCCESSFUL_REGISTRATION_POPUP,
  MAIN_API_ROUTES,
  NEWS_API,
  ARTICLES,
  ARTICLE_CARD,
} from '../../js/constants/index';

import { getFromDate, getToDate, createArticleCard } from '../../js/utils/index';
import Header from '../../js/components/Header';
import ArticlesList from '../../js/components/ArticlesList';
import Auth from '../../js/components/Auth';
import MainApi from '../../js/api/MainApi';
import NewsApi from '../../js/api/NewsApi';
import LoginPopup from '../../js/components/LoginPopup';
import RegistrationPopup from '../../js/components/RegistrationPopup';
import SuccessfulRegistrationPopup from '../../js/components/SuccessfulRegistrationPopup';
import LoginForm from '../../js/components/LoginForm';
import HeaderSearch from '../../js/components/HeaderSearch';
import RegistrationForm from '../../js/components/RegistrationForm';
import NewsCardList from '../../js/components/NewsCardList';

const loginPopup = new LoginPopup({ ...POPUP, template: LOGIN_POPUP.template });
const registrationPopup = new RegistrationPopup({
  ...POPUP,
  template: REGISTRATION_POPUP.template,
});
const successfulRegistrationPopup = new SuccessfulRegistrationPopup({
  ...POPUP,
  ...SUCCESSFUL_REGISTRATION_POPUP,
});

const searchForm = new HeaderSearch({ ...SEARCH.form });
const loginForm = new LoginForm({ ...LOGIN_POPUP.form });
const registrationForm = new RegistrationForm({ ...REGISTRATION_POPUP.form });

const articlesList = new ArticlesList({ ...ARTICLES });
const newsCardList = new NewsCardList({
  container: SEARCH_RESULTS.container,
  ...SEARCH_RESULTS.templates,
  selectors: SEARCH_RESULTS.selectors,
});
const header = new Header({ ...HEADER, theme: 'light' });
const mainApi = new MainApi(MAIN_API_ROUTES);
const newsApi = new NewsApi(NEWS_API, { getFromDate, getToDate, articlesList });
const auth = new Auth();

loginPopup.setDependencies({ registrationPopup, form: loginForm });
registrationPopup.setDependencies({
  loginPopup,
  successfulRegistrationPopup,
  mainApi,
  form: registrationForm,
});
successfulRegistrationPopup.setDependencies({ loginPopup });

auth.setDependencies({
  mainApi,
  header,
  newsCardList,
  articlesList,
});
header.setDependencies({ loginPopup, auth });

searchForm.setDependencies({ newsApi, articlesList, newsCardList });
loginForm.setDependencies({ mainApi, auth, popup: loginPopup });
registrationForm.setDependencies({ mainApi, popup: registrationPopup });
newsCardList.setDependencies({
  mainApi,
  articlesList,
  createArticleCard,
  cardOptions: ARTICLE_CARD,
  auth,
});

searchForm.addForm();
auth.authenticate();
