import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Button from '../components/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRouter} from 'next/router';


export default function Home() {
  const router = useRouter();
  function handleCtaClick(){
    console.log('CTA button clicked!');
    router.push('/signup');
  }
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center text-white"
      style={{
        backgroundImage: "url('/Splash-page.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="absolute top-0 left-0 w-full ">
      <NavBar title="Krewe De Cafe" items={['Home', 'About', 'Menu']} />
      </div>
      {/* <Header content ="
          Where every Brew's a Celebration!
        "/> */}
      {/* Hero component */}
       <Hero />     
       
         {/* <Events/> */}
      {/* <Button label="Sign Up Now" handleClick={handleCtaClick} /> */}

      {/* <Events/> */}
      <Footer content= "Adia Holt @2025"/>
    </div>
    
  );
}
