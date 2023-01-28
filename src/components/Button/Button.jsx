import { ButtonLoadMore } from './Button.styled.js';
import PropTypes from 'prop-types';

export function Button({ onClick }) {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
