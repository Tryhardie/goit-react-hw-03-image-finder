import PropTypes from 'prop-types';
import LoadMoreBtn from './Button.styled';

const Button = ({ handleLoadMore }) => {
  return (
    <LoadMoreBtn type="button" onClick={() => handleLoadMore()}>
      Load more
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default Button;
