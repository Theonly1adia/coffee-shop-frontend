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
    <h1>Coffee Shop Frontend Splash Page</h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
  </div>
  )
}
