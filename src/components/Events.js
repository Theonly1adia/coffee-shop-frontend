import React from "react";

const events = [
  {
    id: 1,
    title: "Coffee Brewing 101",
    description: "Learn the basics of brewing the perfect cup of coffee at home.",
    date: "Saturday, Jan 13th",
    time: "3:00 PM - 4:00 PM",
    host: "Hosted by Barista Alex",
    image: "/images/brewing101.jpg",
    link: "https://example.com/register/coffee101",
  },
  {
    id: 2,
    title: "Latte Art Workshop",
    description: "Master the art of making beautiful latte designs.",
    date: "Sunday, Jan 14th",
    time: "5:00 PM - 6:00 PM",
    host: "Hosted by Latte Artist Mia",
    image: "/images/latteArt.jpg",
    link: "https://example.com/register/latteart",
  },
];

export default function VirtualCafeEvents() {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-4xl font-bold text-center mb-6">Virtual Café Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500">
                <strong>Date:</strong> {event.date} <br />
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-sm text-gray-500">{event.host}</p>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg"
              >
                Register Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
