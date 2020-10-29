import './index.css';
import {
  ARTICLES,
  HEADER,
  MAIN_API_ROUTES,
  ARTICLE_CARD,
  SAVED_RESULTS,
  SAVED_STAT,
} from '../../js/constants';

import Auth from '../../js/components/Auth';
import MainApi from '../../js/api/MainApi';
import Header from '../../js/components/Header';
import ArticlesList from '../../js/components/ArticlesList';
import NewsCardList from '../../js/components/NewsCardList';
import HeaderSaved from '../../js/components/HeaderSaved';
import { createArticleCard } from '../../js/utils';

const mainApi = new MainApi(MAIN_API_ROUTES);
const auth = new Auth();
const header = new Header({ ...HEADER, theme: 'dark' });
const savedStat = new HeaderSaved({ ...SAVED_STAT });
const articlesList = new ArticlesList({ ...ARTICLES });
const newsCardList = new NewsCardList({
  container: SAVED_RESULTS.container,
  ...SAVED_RESULTS.templates,
  selectors: SAVED_RESULTS.selectors,
});


header.setDependencies({ auth });
savedStat.setDependencies({ articlesList, newsCardList, auth });
newsCardList.setDependencies({
  mainApi, articlesList, createArticleCard, cardOptions: ARTICLE_CARD, auth, savedStat,
});
auth.setDependencies({
  mainApi, header, newsCardList, articlesList, savedStat,
});

auth.authenticate();
