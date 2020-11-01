import '../../blocks/article-card/article-card.css';
import BaseComponent from './BaseComponent';

export default class ArticleCard extends BaseComponent {
  constructor(props) {
    super();

    const {
      template,
      actionTemplates,
      article,
      dependencies,
    } = props;

    this._article = article;
    this._actionTemplates = actionTemplates;

    this.like = this.like.bind(this);
    this.unlike = this.unlike.bind(this);
    this.remove = this.remove.bind(this);

    this.setDependencies(dependencies);
    this._createCard(template);
  }

  _getCardDate(articleDate) {
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    const date = new Date(articleDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${day} ${months[month]}, ${year}`;
  }

  _getCardType() {
    let type = 'base';
    if (this._dependencies.auth && this._dependencies.articlesList) {
      if (this._dependencies.auth.isSavedPage()) {
        type = 'saved';
      } else if (this._dependencies.auth.isAuth()) {
        if (this._dependencies.articlesList.articleIsLiked(this._newsUrl)) {
          type = 'unlike';
        } else {
          type = 'like';
        }
      }
    }
    return type;
  }

  _setCardAction(template, method) {
    this._reset();
    this._iconContainer.innerHTML = '';
    this._iconContainer.appendChild(template.cloneNode(true).content);
    if (method) {
      this._setHandlers([
        {
          element: this._iconContainer.querySelector('.article-card__action'),
          event: 'click',
          method,
        },
      ]);
    }
  }

  _setCardActionBlock() {
    const type = this._getCardType();
    switch (type) {
      case 'saved':
        this._setCardAction(this._actionTemplates.savedAction, this.remove);
        break;
      case 'unlike':
        this._setCardAction(this._actionTemplates.unlikeAction, this.unlike);
        break;
      case 'like':
        this._setCardAction(this._actionTemplates.likeAction, this.like);
        break;
      default:
        this._setCardAction(this._actionTemplates.baseAction, null);
    }
  }

  _createCard(template) {
    const {
      _id,
      source,
      title,
      date,
      text,
      link,
      image,
      keyword,
    } = this._article;
    this._id = _id;
    this._newsUrl = link;
    this._keyword = keyword.toLowerCase();

    this._container = template.cloneNode(true).content;

    const cardImageElement = this._container.querySelector('.article-card__img');
    cardImageElement.src = image;
    cardImageElement.alt = title;

    this._container.querySelector('.article-card__date').textContent = this._getCardDate(date);
    this._container.querySelector('.article-card__title').textContent = title;
    this._container.querySelector('.article-card__text').textContent = text;
    this._container.querySelector('.article-card__source').textContent = source;

    this._iconContainer = this._container.querySelector('.article-card__icon-container');

    this._setCardActionBlock();
    this._container.querySelector('.article-card__link').href = link;

    const tagContainer = this._iconContainer.querySelector('.article-card__tag');
    if (tagContainer) {
      tagContainer.textContent = this._keyword;
    }

    if (this._dependencies.articlesList) {
      if (this._dependencies.articlesList.articleIsLiked(this._newsUrl)) {
        this._id = this._dependencies.articlesList.getLikedByLink(this._newsUrl)._id;
      }
    }
  }

  like() {
    if (this._dependencies.mainApi && this._dependencies.articlesList) {
      const {
        source,
        title,
        date,
        text,
        link,
        image,
        keyword,
      } = this._article;

      this._dependencies.mainApi.createArticle({
        source,
        title,
        date,
        text,
        link,
        image,
        keyword,
      })
        .then((json) => {
          this._dependencies.articlesList.addLiked(json);
          this._id = json._id;
          this._setCardActionBlock();
        })
        .catch((err) => console.log(err));
    }
  }

  unlike() {
    if (this._dependencies.mainApi && this._dependencies.articlesList) {
      this._dependencies.mainApi.removeArticle(this._id)
        .then(() => {
          this._dependencies.articlesList.removeLiked(this._id);
          this._setCardActionBlock();
        })
        .catch((err) => console.log(err));
    }
  }

  remove() {
    if (this._dependencies.mainApi && this._dependencies.articlesList) {
      this._dependencies.mainApi.removeArticle(this._id)
        .then(() => {
          this._dependencies.articlesList.removeLiked(this._id);
          this._dependencies.articlesList
            .updateArticles(this._dependencies.articlesList.getLiked());
          this._reset();
          if (this._dependencies.savedStat) {
            this._dependencies.savedStat.render();
          }
        })
        .catch((err) => console.log(err));
    }
  }

  updateView() {
    this._setCardActionBlock();
  }

  getDomElement() {
    return this._container;
  }
}
