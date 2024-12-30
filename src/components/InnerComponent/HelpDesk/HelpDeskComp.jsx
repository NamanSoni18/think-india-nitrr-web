import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../App.css";
import ImportantLinksSection from "./ImportantLinksSection";
import LatestOpportunity from "./LatestOpportunity";

import { helpItems, importantLinks } from "./data";
import "./helpitems.css";

const HelpDeskComp = () => {
  return (
    <div className="helpdesk-container  mx-auto p-6 w-screen text-center">
      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(2rem, 7vw, 4rem)", // lg size = 1.125rem, 3xl size = 1.875rem
          fontWeight: "bold",
          marginTop: "1.5rem",
          lineHeight: "1.2", // Adjust line height for better spacing
        }}
        className="text-center"
      >
        <span style={{ display: "block" }}>How Can We</span>
        <span style={{ display: "block" }}>
          <span style={{ color: "#f97316" }}>Help </span> YOU ?
        </span>
      </h1>

      <p
        style={{
          fontSize: "clamp(0.8rem, 4vw, 1.25rem)", // lg size = 1rem, max size a bit smaller
          color: "black",
          marginTop: "1rem",
          textAlign: "center",
        }}
        className="text-center "
      >
        The Think India Community is a vibrant and dynamic organization
        dedicated to fostering cultural enrichment and personal growth.
      </p>

      <div className=" flex justify-center gap-4 mt-6 ">
        <a
          className="contact px-5 py-1 bg-gray-400 text-white rounded-md font-semibold hover:bg-sky-400"
          href="#contact"
        >
          Contact Us
        </a>
        <a
          className="px-10 py-1 bg-gray-400 text-white rounded-md font-semibold hover:bg-sky-400 resource"
          href="#resource"
        >
          Resource
        </a>
      </div>

      <div className="grid-container">
        {helpItems.map((item, index) => (
          <div
            key={index}
            className={`grid-item ${
              item.title === "Your Queries" ? "your-queries" : ""
            }`}
            style={{
              backgroundColor: item.bgColor || "transparent",
              backgroundImage: item.bg ? `url(${item.bg})` : "none",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              display: "flex", // Enables flexbox for alignment
              alignItems: "flex-end", // Aligns text to the bottom
              justifyContent: "center", // Centers text horizontally
              padding: "10px",
            }}
          >
            {item.title === "Your Queries" ? (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Your Queries
                </h3>
                <input
                  type="text"
                  placeholder="Type your query..."
                  className="mt-2 p-2 w-3/4 rounded-md border border-gray-300 focus:outline-none"
                />
              </div>
            ) : (
              <div className="text-white text-xl font-semibold">
                <span>{item.title}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <div className="mt-12">
        
        <LatestOpportunity LatestOpportunity={LatestOpportunity} />
      </div>

      <ImportantLinksSection importantLinks={importantLinks} /> */}
    </div>
  );
};

export default HelpDeskComp;
