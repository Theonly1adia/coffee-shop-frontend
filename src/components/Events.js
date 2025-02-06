import React from "react";

const events = [
  {
    id: 1,
    title: "Coffee Brewing 101",
    description: "Learn the basics of brewing the perfect cup of coffee at home.",
    date: "Saturday, Jan 13th",
    time: "3:00 PM - 4:00 PM",
    host: "Hosted by Barista Alex",
    image: "/coffee-101.jpeg",
    link: "https://example.com/register/coffee101",
  },
  {
    id: 2,
    title: "Coffee and Chill Hangout",
    date: "February 15th, 2025",
    time: "5:00 PM EST",
    description: "A casual virtual meetup for coffee lovers to chat and connect.",
    image: "/chill.jpeg",
  },
  {
    id: 3,
    title: "Latte Art Workshop",
    description: "Master the art of making beautiful latte designs.",
    date: "Sunday, Jan 14th",
    time: "5:00 PM - 6:00 PM",
    host: "Hosted by Latte Artist Mia",
    image: "/latte-art.jpeg",
    link: "https://example.com/register/latteart",
  },
];

export default function VirtualCafeEvents() {
  return (
    <div className="py-4 bg-white bg-opacity-50 pl-4 pr-4">
      
      <div className="text-center mb-6 bg-white">
        <h2 className="text-4xl font-bold text-purple-600">Virtual Café Events</h2>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col max-w-sm mx-auto"
          >
            
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-1/2 object-cover" 
            />
            <div className="p-2 space-y-2 flex-1"> 
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500">
                <strong>Date:</strong> {event.date} <br />
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-sm text-gray-500">{event.host}</p>
              <a
                href={event.link} 
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                View Event
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
