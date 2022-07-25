import PropTypes from 'prop-types';
import css from './Button.module.css';

const LoadMore = ({ onClick }) => {
  return (
    <div className={css.ButtonContainer}>
      <button className={css.Button} type="button" onClick={onClick}>
        LoadMore
      </button>
    </div>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMore;
