import PropTypes from 'prop-types';
export default function ProductCard({title}) {
  return <div className="productCard">Product Card {title}</div>;
}
ProductCard.propTypes = {
  // Add prop-types here
   title: PropTypes.string.isRequired,
};