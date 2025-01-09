import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
  <div>
    <h1>Krewe de Cafe</h1>
    <div className="hero">
      <img src="/Splash-page.jpg" alt="coffe shop"/>
      <p>
        Where every Brew's a Celebration!
      </p>
    </div>
    <button className="btn btn-primary">SignUp</button>
  </div>
  );
}
