import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

export default function SignupForm({ buttonLabel, handleSignup }) {
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const router = useRouter();  // Initialize useRouter for navigation

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    handleSignup(user);
    
    // After successful signup, navigate to the products page
    router.push('/products');  // This will navigate to '/products'
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  function onEmailChange(event) {
    const newEmailValue = event.target.value;
    setEmailIsValid(validateEmail(newEmailValue));
    setEmailValue(newEmailValue);
  }

  const checkPassword = (password) => password.length >= 8;

  const onPasswordChange = (e) => {
    const newPassword = e.target.value;
    setPasswordValue(newPassword);
    setPasswordIsValid(checkPassword(newPassword));
  };

  return (
    <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
      <h2 className='text-2xl font-bold pb-5 text-center'>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">Your name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            value={formData.name}
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            required
            onChange={onEmailChange}
            value={emailValue}
          />
          {!emailIsValid && emailValue && (
            <p className="text-red-400 mt-2">Supply a valid email address.</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
          <input
            type="password"
            id="password"
            placeholder="**********"
            value={passwordValue}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            required
            onChange={onPasswordChange}
          />
          {!passwordIsValid && passwordValue && (
            <p className="text-red-400 mt-2">Password must be at least 8 characters long.</p>
          )}
        </div>

        <Button label={buttonLabel} handleClick={handleSubmit} />
        <div className="flex items-center text-sm pt-4">
          <p>Already have an account?</p>
          <p className="underline cursor-pointer ml-1">Sign in</p>
        </div>
      </form>
    </div>
  );
}

SignupForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleSignup: PropTypes.func.isRequired,
};
