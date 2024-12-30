import React, { useState } from 'react';

function OtherCommunities() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleMouseOver = (index) => {
    setFlippedIndex(index);
  };

  const handleMouseOut = () => {
    setFlippedIndex(null);
  };

  const cards = [
    {
      title: "Think India Collage",
      description: "Explore a community that celebrates India's culture, heritage, and diverse perspectives. Share your stories, connect with fellow Indians, and immerse yourself in the vibrant tapestry of Indian life.",
      image: "https://images.unsplash.com/photo-1730918404452-af022c11f4a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Study Matrix",
      description: "Engage with a community of passionate learners and educators. Share your academic pursuits, exchange ideas, and collaborate on projects. Discover new learning opportunities and enhance your knowledge together.",
      image: "https://images.unsplash.com/photo-1730918404452-af022c11f4a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Tech Innovators",
      description: "Join a community of tech enthusiasts and innovators. Share your projects, get feedback, and collaborate on cutting-edge technologies. Stay updated with the latest trends in the tech world.",
      image: "https://images.unsplash.com/photo-1730918404452-af022c11f4a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="main-container flex flex-col items-center justify-center gap-8 pt-10 pb-20 mb-10 mt-10 w-screen">
      <h1 className="sm:text-5xl text-4xl font-bold sm:text-white md:text-black text-white">Other Communities</h1>
      <div className="cards-container flex flex-wrap justify-center gap-24 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card-container ${flippedIndex === index ? 'flipped' : ''}`}
            style={{ width: '320px', height: '480px', borderRadius: '30px' }}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            <img src={card.image} alt={card.title} className="card-image" />
            <div className={`card-heading ${flippedIndex === index ? 'hidden' : ''}`}>
              <h2 className="text-2xl font-bold text-white">{card.title}</h2>
            </div>
            <div className="card-content">
              <h2 className="text-4xl mb-10 font-bold text-white">{card.title}</h2>
              <p className="text-sm text-white">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Inline Styles */}
      <style>
        {`
          .cards-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          @media (max-width: 768px) {
            .cards-container {
              flex-direction: column;
              gap: 24px;
            }
            .main-container {
              background-color: black;
            }
            .card-container {
              box-shadow: 0 0 16px grey;
            }
          }
          .card-container {
            position: relative;
            perspective: 1000px;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          .card-container.flipped {
            transform: rotateY(180deg);
          }
          .card-image {
            width: 100%;
            height: 100%;
            object-cover;
            border-radius: 30px;
            position: absolute;
            top: 0;
            left: 0;
            transition: opacity 0.6s ease;
          }
          .card-heading {
            position: relative;
            width: 76%;
            margin: auto;
            top: 85%;
            text-align: center;
            z-index: 2;
            background: rgba(0, 0, 0, 0.7);
            padding: 8px 12px;
            border-radius: 8px;
            transition: opacity 0.6s ease;
          }
          .card-heading.hidden {
            opacity: 0;
          }
          .card-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 16px;
            opacity: 0;
            text-align: center;
            transform: rotateY(180deg);
            backface-visibility: hidden;
            transition: opacity 0.6s ease;
          }
          .card-container.flipped .card-content {
            opacity: 1;
            border-radius: 30px;
          }
        `}
      </style>
    </div>
  );
}

export default OtherCommunities;
