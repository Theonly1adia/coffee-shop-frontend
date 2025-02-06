import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Navbar({ title }) {
  
  return (
    <div className="navbar border-b-2 border-black  bg-black bg-opacity-50 pb-2  flex items-center justify-between">
      
      <div className="text-xl font-bold">{title}</div>

      
      <div className="flex space-x-10">
        <a href="/" className="menu-item">Home</a>
        <a href="#" className="menu-item">About</a>
        <a href="#" className="menu-item">Menu</a>
      </div>

      <Link href="/login" passHref>
      <button 
      className="btn btn-primary"
      
      >
        Log In
        </button>
        </Link>
    </div>
  );
  
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};
