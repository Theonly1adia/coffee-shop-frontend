import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Button from '../components/Button';
import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();
  function handleCtaClick(){
    console.log('CTA button clicked!');
    router.push('/signup');
  }
  return (
    <div>
      {/* Navbar component */}
      <NavBar title="Krewe De Cafe" items={['Home', 'About', 'Menu']} />

      <Header content ="
          Where every Brew's a Celebration!
        "/>
      {/* Hero component */}
      <Hero />
      <Button label="Sign Up Now" handleClick={handleCtaClick} />
      <Footer content= "Adia Holt @2025"/>
    </div>
    
  );
}
