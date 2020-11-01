export default class NewsApi {
  constructor(apiSettings, dependencies) {
    this._apiSettings = apiSettings;
    this._dependencies = dependencies;

    this.getNews = this.getNews.bind(this);
  }

  getNews(query) {
    const {
      url,
      sortBy,
      pageSize,
      apiKey,
    } = this._apiSettings;
    const { getFromDate, getToDate } = this._dependencies;
    const from = getFromDate();
    const to = getToDate();

    return fetch(
      `${url}?q=${query}&from=${from}&to=${to}&sortBy=${sortBy}&pageSize=${pageSize}&apiKey=${apiKey}`,
    )
      .then((res) => res.json())
      .then((res) => {
        const articles = res.articles.map((article) => {
          const readyArticle = {};
          readyArticle.source = article.source.name;
          readyArticle._id = article._id;
          readyArticle.title = article.title;
          readyArticle.date = article.publishedAt;
          readyArticle.link = article.url;
          readyArticle.keyword = article.keyword;
          readyArticle.image = article.urlToImage || '';
          readyArticle.text = article.description || 'Нет описания :(';

          return readyArticle;
        });

        return articles;
      })
      .catch((err) => new Error(err.message));
  }
}
