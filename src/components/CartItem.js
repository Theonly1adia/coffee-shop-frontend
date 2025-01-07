import PropTypes from 'prop-types';
export default function CartItem() {
  return <div className="cartItem">Cart Item</div>;
}
CartItem.propTypes = {
  // Add prop-types here
   content: PropTypes.string.isRequired,
};