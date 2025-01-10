// src/components/LoginForm.jsx
import PropTypes from 'prop-types';
import Button from '@/components/Button';
import styles from '@/styles/signup.module.css';

export default function SignupForm({ buttonLabel, handleSignup }) {
  return (
    <form className={styles.signupform}>
      <div className="mb-4">
        <input
        type="text"
        placeholder="Name"
        className="shadow border rounded py-2 px-2"
        required
        />
      </div>

      <div className="mb-4">
        <input
        type="email"
        placeholder="Email"
        className="shadow border rounded py-2 px-2"
        required
        />
      </div>

      <div className="mb-6">
        <input 
          type="password" 
          placeholder="Password" 
          className="shadow  border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      
      <Button label={buttonLabel} handleClick={handleSignup}/>
    </form>
  );
}

SignupForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
};