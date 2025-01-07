import PropTypes from 'prop-types';
export default function CartItem({title}) {
  return <div className="cartItem">Cart Item Component {title}</div>;
}
CartItem.propTypes = {
  // Add prop-types here
   title: PropTypes.string.isRequired,
};