import PropTypes from 'prop-types';
export default function Toast({title}) {
  return <div className="toast">Toast Component {title}</div>;
}
Toast.propTypes = {
  // Add prop-types here
   title: PropTypes.string.isRequired,
};