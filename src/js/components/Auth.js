export default class Auth {
  constructor() {
    this.logout = this.logout.bind(this);
  }

  _setUserData({ name }) {
    this._name = name;
    this._loggedIn = true;
  }

  _clearUserData() {
    this._name = '';
    this._loggedIn = false;
  }

  _redirectToMainPage() {
    if (this.isSavedPage()) {
      window.location.href = '../main';
    }
  }

  setDependencies(dependencies) {
    this._dependencies = dependencies;
  }

  isAuth() {
    return this._loggedIn;
  }

  isSavedPage() {
    return window.location.pathname === '/savedArticles/index.html' || window.location.pathname === '/' || window.location.pathname === '/dist/savedArticles/index.html';
  }

  getUserName() {
    return this._name;
  }

  authenticate() {
    if (this._dependencies.mainApi) {
      this._dependencies.mainApi.getUserData()
        .then((json) => {
          if (json.message) {
            throw new Error('Unauthorized');
          }
          this._setUserData(json);
        })
        .then(() => this._dependencies.mainApi.getArticles())
        .then((articles) => this._dependencies.articlesList.setLiked(articles))
        .catch(() => {
          this._clearUserData();
          this._redirectToMainPage();
        })
        .finally(() => {
          if (this._dependencies.header) {
            this._dependencies.header.render({ isLoggedIn: this._loggedIn, userName: this._name });
          }

          if (this._dependencies.newsCardList) {
            this._dependencies.newsCardList.updateCardsViews();
          }
          if (this.isSavedPage()) {
            if (this._dependencies.articlesList) {
              this._dependencies.articlesList.updateArticles(
                this._dependencies.articlesList.getLiked(),
              );
            }

            if (this._dependencies.savedStat) {
              this._dependencies.savedStat.render();
            }
          }
        });
    }
  }

  logout() {
    this._clearUserData();

    if (this._dependencies.mainApi) {
      this._dependencies.mainApi.logout().finally(() => {
        if (this._dependencies.header) {
          this._dependencies.header.render({ userName: this._name, isLoggedIn: this._loggedIn });
        }
      });
    }

    if (this._dependencies.newsCardList) {
      this._dependencies.newsCardList.updateCardsViews();
    }

    this._redirectToMainPage();
  }
}
