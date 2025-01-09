import PropTypes from 'prop-types';

export default function NavBar({ title }) {
  return (
    <div className="navbar bg-base-100 flex items-center justify-between">
      {/* Title */}
      <div className="text-xl font-bold">{title}</div>

      
      <div className="flex space-x-10">
        <a href="#" className="menu-item">Home</a>
        <a href="#" className="menu-item">About</a>
        <a href="#" className="menu-item">Menu</a>
      </div>

      {/* Sign Up Button */}
      <button className="btn btn-primary">Sign Up</button>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};
