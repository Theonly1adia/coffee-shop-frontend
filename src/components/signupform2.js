import { useState } from "react";
import PropTypes from "prop-types";
import Button from '@/components/Button';

export default function SignupForm({buttonLabel, handleSignup}) {
  
    const [passwordValue, setPasswordValue] = useState("")
    const [passwordIsValid, setPasswordIsValid] = ("false")

    const [emailValue, setEmailValue] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const checkPassword = (password) => {
        return password.length >= 8;
    }
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation example
    if (formData.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }
    setErrorMessage("");
    console.log("Form Submitted:", formData);
    // You can now send the data to an API or process it further
  };

  return (
    <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold pb-5">SignUp</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="Andrew Jackson"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="andrew@mail.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="*********"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {/* Error Message */}
        {errorMessage && (
          <div>
            <p className="text-red-500 pb-5">{errorMessage}</p>
          </div>
        )}
        {/* Submit Button */}
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
          >
            Register
          </button>
          <div className="flex items-center text-sm">
            <p>Already have an account?</p>
            <p className="underline cursor-pointer ml-1">Sign in</p>
          </div>
        </div>
      </form>
    </div>
  );
}
