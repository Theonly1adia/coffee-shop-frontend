import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[300px] bg-gradient-to-b opacity-85 from-purple-800 to-green-600 text-white mt-[25vh] flex items-center justify-center">

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-40"></div> 
      </div>

      
      <div className="relative text-center p-8 max-w-2xl space-y-4 flex flex-col justify-center items-center">
        
        <h1 className="text-5xl font-bold drop-shadow-lg">
          Where Every Brew is a Celebration!
        </h1>

        
        <p className="mt-4 text-lg drop-shadow">
          Step into a virtual café infused with the spirit of New Orleans. From bold brews to festive vibes, your perfect cup awaits!
        </p>

        
        <a
          href="/signup"  
          className="px-6 py-3 bg-yellow-300 hover:bg-yellow-400 text-purple-900 font-semibold text-lg rounded-full shadow-md transition-transform transform hover:scale-105 mt-6"
        >
          Join the Krewe ☕
        </a>
      </div>
    </section>
  );
}

