// src/pages/signup.jsx
import { useRouter } from 'next/router';
import SignupForm from '@/components/SignupForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
    const registerURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`;

export default function Signup() {
  const router = useRouter();

  async function handleSignup(user) {
    try {
      const response = await fetch(registerURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        // Handle successful signup (e.g., redirect to login page)
        router.push('/signin');
      } else {
        // Handle errors (e.g., display error message)
        console.error('Signup failed:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred during signup:', error);
    }
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
      <SignupForm buttonLabel="Sign Up" handleSignup={() => console.log('Sign up clicked!')}/>
      <Footer />
    </div>
  );
}