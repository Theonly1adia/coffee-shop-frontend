import PropTypes from 'prop-types';
export default function CartSummary({title}) {
  return <div className="cacrtSummary">Cart Summary Component {title}</div>;
}
CartSummary.propTypes = {
  // Add prop-types here
   title: PropTypes.string.isRequired,
};