import BaseComponent from './BaseComponent';

export default class HeaderSaved extends BaseComponent {
  constructor(args) {
    super();

    const {
      name,
      articlesCount,
      details,
      tagTemplate,
    } = args;

    this._name = name;
    this._articlesCount = articlesCount;
    this._details = details;
    this._tagTemplate = tagTemplate;
  }

  _renderArticlesCount() {
    if (this._dependencies.articlesList) {
      this._articlesCount.textContent = this._dependencies.articlesList.getLikedCount();
    }
  }

  _renderSeparator(text) {
    const separator = document.createElement('span');
    separator.textContent = text;
    this._details.appendChild(separator);
  }

  _renderTag(tag) {
    const tagContainer = this._tagTemplate.cloneNode(true).content.querySelector('.header-saved__detail-tag');
    tagContainer.textContent = tag;
    this._details.appendChild(tagContainer);
  }

  _renderKeywords() {
    if (this._dependencies.articlesList) {
      const tags = this._dependencies.articlesList.getKeywordsQuantity()
        .map(([key]) => key.toLowerCase());

      if (tags.length > 0) {
        this._renderSeparator('По ключевым словам: ');
      }

      const [firstTag, secondTag, thirdTag] = tags;

      if (tags.length === 1) {
        this._renderTag(firstTag);
      } else if (tags.length === 2) {
        this._renderTag(firstTag);
        this._renderSeparator(' и ');
        this._renderTag(secondTag);
      } else if (tags.length === 3) {
        this._renderTag(firstTag);
        this._renderSeparator(', ');
        this._renderTag(secondTag);
        this._renderSeparator(' и ');
        this._renderTag(thirdTag);
      } else if (tags.length > 3) {
        this._renderTag(firstTag);
        this._renderSeparator(', ');
        this._renderTag(secondTag);
        this._renderSeparator(' и ');
        this._renderTag(`${tags.length - 2} другим`);
      }
    }
  }

  _clearContent() {
    this._articlesCount.textContent = 0;
    this._details.innerHTML = '';
  }

  render() {
    this._clearContent();
    this._renderArticlesCount();
    this._renderKeywords();

    if (this._dependencies.auth) {
      this._name.textContent = this._dependencies.auth.getUserName();
    }

    if (this._dependencies.newsCardList) {
      this._dependencies.newsCardList.renderResults();
    }
  }
}
