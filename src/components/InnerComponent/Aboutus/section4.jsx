import React, { useState } from 'react';

function UpcomingEvents() {
  const [selectedCard, setSelectedCard] = useState(1); // Default selected card

  const cards = [
    {
      title: "Study Circle",
      description: "A space for learners to gather, share knowledge, and study together.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
    {
      title: "Hindu Nav-Varsh",
      description: "Hindu Nav Varsh is not just a time for celebration but also a period for reflection and renewal.",
      image: "https://as2.ftcdn.net/v2/jpg/05/26/92/37/1000_F_526923714_gyHev7uIEAoIcSkql9bgaVNDO5cx3Ggn.jpg",
    },
    {
      title: "Concert at NIT Raipur",
      description: "A concert is a live music performance in front of an audience.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    },
  ];

  return (
    <div className="w-screen flex flex-col items-center gap-6 mb-10 mt-20">
      <h1 className="text-4xl font-bold text-center">Upcoming Events</h1>
      
      <div className="flex lg:flex-row items-center gap-4 w-[90vw] sm:w-[80vw] mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`cursor-pointer transition-all duration-500 ease-in-out overflow-hidden rounded-lg shadow-lg ${
              selectedCard === index
                ? "w-2/3"
                : "w-1/6"
            }`}
            onClick={() => setSelectedCard(index)}
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px'
            }}
          >
            <div
              className="flex flex-col justify-end h-full p-6 bg-black bg-opacity-50 text-white"
              style={{ minHeight: '400px' }}
            >
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              {selectedCard === index && (
                <p className="text-sm mt-2">{card.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Dots for carousel navigation */}
      <div className="flex space-x-2 mt-4">
        {cards.map((_, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(index)}
            className={`w-3 h-3 rounded-full ${
              selectedCard === index ? "bg-black" : "bg-gray-400"
            } cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
