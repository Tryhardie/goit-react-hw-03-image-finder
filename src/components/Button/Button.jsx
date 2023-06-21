import PropTypes from 'prop-types';

const Button = ({ handleLoadMore }) => {
  return (
    <button type="button" onClick={() => handleLoadMore()}>
      Load more
    </button>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default Button;
