import ArticleCard from '../components/ArticleCard';

const createArticleCard = (props) => new ArticleCard(props);

const getFromDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};

const getToDate = () => {
  const date = new Date();
  const currentTime = date.getTime();
  const week = (1000 * 60 * 60 * 24 * 7);
  const previousWeekTime = currentTime - week;
  const previousWeek = new Date(previousWeekTime);
  const year = previousWeek.getFullYear();
  const month = previousWeek.getMonth() + 1;
  const day = previousWeek.getDate();

  return `${year}-${month}-${day}`;
};

export {
  getFromDate,
  getToDate,
  createArticleCard,
};
