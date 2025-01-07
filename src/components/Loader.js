import PropTypes from 'prop-types';
export default function Loader({title}) {
  return <div className="loader">Loader Component {title}</div>;
}
Loader.propTypes = {
  // Add prop-types here
   title: PropTypes.string.isRequired,
};