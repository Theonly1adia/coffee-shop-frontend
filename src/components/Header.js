import PropTypes from 'prop-types';

export default function Header({content}) {
  return <div className="text-center font-bold text-2xl mt-2 mb-2">{content}</div>;
}
Header.propTypes = {
  // Add prop-types here
   content: PropTypes.string.isRequired,
}