import React from "react";
import VirtualCafeEvents from "@/components/Events";  
import Navbar from "@/components/Navbar";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-100"
    style={{
        backgroundImage: 'url(beads.jpeg)', 
        backgroundSize: 'cover',  
        backgroundPosition: 'center', 
        height: '100vh', 
        minHeight: "100vh",
        width: "100%",
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
      }}>

        <Navbar/>
      <header className="bg-purple-600 text-white py-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Upcoming Events</h1>
          <p className="mt-2 text-lg">Join us for exciting virtual café events!</p>
        </div>
      </header>

      
      <main className="py-8">
        <VirtualCafeEvents />
      </main>
      
      <footer className="bg-purple-600 text-white py-4">
        <div className="text-center">
          <p>&copy; 2025 Virtual Café. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
