// src/pages/signup.jsx
import { useRouter } from 'next/router';
import SignupForm from '@/components/SignupForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Signup() {
  const router = useRouter();
  function handleSignup() {
    alert('Sign up clicked!');
    router.push('/signin');
  }

  
  return (
    <div 
      style={{
        backgroundImage: 'url(Splash-page.jpg)', // Path to your background image
        backgroundSize: 'cover',  // Ensures the image covers the whole container
        backgroundPosition: 'center', // Centers the image
        height: '100vh', // Make the background cover the whole viewport height
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
      }}
      >
      <Navbar />
      <h1>Sign Up</h1>
      <SignupForm buttonLabel="Sign Up" handleSignup={() => console.log('Sign up clicked!')}/>
      <Footer />
    </div>
  );
}