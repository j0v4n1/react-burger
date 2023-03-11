import PropTypes from 'prop-types';

const ingredientsPropTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
}

export default ingredientsPropTypes;
