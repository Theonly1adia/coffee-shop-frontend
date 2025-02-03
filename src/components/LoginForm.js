// src/components/LoginForm.jsx
import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function LoginForm({ buttonLabel, handleLogin }) {
  function handleSubmit(event) {
    event.preventDefault(); 
    const email = event.target.elements.email.value
    const password = event.target.elements.password.value
    console.log(email);
    handleLogin (email, password);
  }
  

  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-lg mx-auto">
        
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Sign in</h2>
        </div>
        
         
        <form onSubmit={handleSubmit}>
          
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              type="email"
              placeholder="email@example.com"
              required
            />
          </div>
          
           
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              type="password"
              placeholder="**********"
              required
            />
          </div>
          
          
          <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
            <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
              <label>
                <input type="checkbox" className="mr-2" />
                <span className="font-extrabold">Remember me</span>
              </label>
            </div>
            <div className="w-full lg:w-auto px-4">
              <a
                className="inline-block font-extrabold hover:underline"
                href="#"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          
          <Button
            type="submit"
            label="Sign In"  
            className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
          />
          
          
          <p className="text-center font-extrabold">
            Don’t have an account?{' '}
            <a className="text-red-500 hover:underline" href="http://localhost:3000/signup">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
