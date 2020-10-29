import '../../blocks/news-card-list/news-card-list.css';
import BaseComponent from './BaseComponent';
import { createArticleCard } from '../utils/index';

export default class NewsCardList extends BaseComponent {
  constructor(props) {
    super();

    const {
      container,
      results,
      searchResultsProcess,
      searchNoResults,
      searchError,
      selectors,
    } = props;

    this._container = container;
    this._results = results;
    this._searchResultsProcess = searchResultsProcess;
    this._searchNoResults = searchNoResults;
    this._searchError = searchError;
    this._selectors = selectors;

    this._cards = [];

    this._showMore = this._showMore.bind(this);
  }

  _renderTemplate(template) {
    this._reset();
    this._container.innerHTML = '';
    this._container.appendChild(template.cloneNode(true).content);
  }

  _showNewsCardList() {
    this._container.classList.remove('search-results_hidden');
  }

  hideNewsCardList() {
    this._container.classList.add('search-results_hidden');
  }

  renderLoader() {
    this._showNewsCardList();
    this._renderTemplate(this._searchResultsProcess);
  }

  renderError() {
    this._renderTemplate(this._searchError);
  }

  renderResults() {
    this._showNewsCardList();
    this._renderTemplate(this._results);
    this._resultsContainer = this._container.querySelector(this._selectors.items);
    this._showMoreButton = this._container.querySelector('.search-results__show-more');
    this._setHandlers([{ element: this._showMoreButton, event: 'click', method: this._showMore }]);
    this._showMore();
  }

  _showMore() {
    if (this._dependencies.articlesList) {
      let allArticles = false;
      if (this._dependencies.auth) {
        allArticles = this._dependencies.auth.isSavedPage();
      }
      const articlesQuantity = this._dependencies.articlesList.getArticlesQuantity(allArticles);
      articlesQuantity.forEach((article) => {
        this._addCard({
          ...article, keyword: article.keyword || this._dependencies.articlesList.getPhrase(),
        });
      });
      if (!this._dependencies.articlesList.someMore()) {
        this._showMoreButton.classList.add('search-results__show-more_hidden');
      }
    }
  }

  _addCard(article) {
    if (this._dependencies.createArticleCard && this._dependencies.cardOptions) {
      const dependencies = {
        auth: this._dependencies.auth,
        mainApi: this._dependencies.mainApi,
        articlesList: this._dependencies.articlesList,
        savedStat: this._dependencies.savedStat,
      };
      const newsCard = createArticleCard({
        ...this._dependencies.cardOptions, article, dependencies,
      });
      this._resultsContainer.appendChild(newsCard.getDomElement());

      this._cards.push(newsCard);
    }
  }

  renderNoResults() {
    this._renderTemplate(this._searchNoResults);
  }

  updateCardsViews() {
    this._cards.forEach((card) => card.updateView());
  }
}
