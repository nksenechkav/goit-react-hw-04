import css from './LoadMoreBtn.module.scss';

const LoadMoreBtn = ({ onClick }) => {
    return (
      <button className={css.btn} onClick={onClick}>Load More</button>
    );
  };
  export default LoadMoreBtn;