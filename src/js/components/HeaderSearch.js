import '../../blocks/header-search/header-serach.css';
import Form from './Form';

export default class HeaderSearch extends Form {
  _submitForm(event) {
    event.preventDefault();

    if (!this._validateForm()) {
      this._setServerError('Нужно ввести ключевое слово');
      return;
    }

    const { newsApi, articlesList, newsCardList } = this._dependencies;
    if (newsApi && articlesList && newsCardList) {
      newsCardList.renderLoader();
      newsApi.getNews(this.search)
        .then((articles) => {
          if (this.search === '') {
            newsCardList.hideNewsCardList();
            this._setServerError('Нужно ввести ключевое слово');
            return;
          }
          articlesList.updateArticles(articles, this.search);
          if (articlesList.hasArticles()) {
            newsCardList.renderResults();
          } else {
            newsCardList.renderNoResults();
          }
        })
        .catch(() => {
          articlesList.updateArticles([]);
          newsCardList.renderError();
        });
    }
  }
}
