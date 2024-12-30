import React, { useState } from "react";
import { motion } from "framer-motion";

const eventsData = {
  2024: [
    { date: "14 Oct 1948", title: "Candle March", description: "A peaceful demonstration where participants carry lit candles, usually held after sunset.", image: "https://images.pexels.com/photos/360177/pexels-photo-360177.jpeg?cs=srgb&dl=burn-burnt-candle-360177.jpg&fm=jpg" },
    { date: "12 Jan 1948", title: "Event 2", description: "A peaceful demonstration where participants carry lit candles, usually held after sunset.2", image: "https://images.pexels.com/photos/360177/pexels-photo-360177.jpeg?cs=srgb&dl=burn-burnt-candle-360177.jpg&fm=jpg" },
    { date: "03 Mar 1948", title: "Event 3", description: "A peaceful demonstration where participants carry lit candles, usually held after sunset.3", image: "https://images.pexels.com/photos/360177/pexels-photo-360177.jpeg?cs=srgb&dl=burn-burnt-candle-360177.jpg&fm=jpg" },
    { date: "25 Apr 1948", title: "Event 4", description: "A peaceful demonstration where participants carry lit candles, usually held after sunset.4", image: "https://images.pexels.com/photos/360177/pexels-photo-360177.jpeg?cs=srgb&dl=burn-burnt-candle-360177.jpg&fm=jpg" },
    { date: "14 May 1948", title: "Event 5", description: "A peaceful demonstration where participants carry lit candles, usually held after sunset.5", image: "https://images.pexels.com/photos/360177/pexels-photo-360177.jpeg?cs=srgb&dl=burn-burnt-candle-360177.jpg&fm=jpg" },
    { date: "22 Jun 1948", title: "Event 6", description: "A peaceful demonstration where participants carry lit candles, usually held after sunset.6", image: "https://images.pexels.com/photos/360177/pexels-photo-360177.jpeg?cs=srgb&dl=burn-burnt-candle-360177.jpg&fm=jpg" },
    { date: "30 Jul 1948", title: "Event 7", description: "A peaceful demonstration where participants carry lit candles, usually held after sunset.7", image: "https://images.pexels.com/photos/360177/pexels-photo-360177.jpeg?cs=srgb&dl=burn-burnt-candle-360177.jpg&fm=jpg" },
    { date: "10 Aug 1948", title: "Event 8", description: "A peaceful demonstration where participants carry lit candles, usually held after sunset.8", image: "https://images.pexels.com/photos/360177/pexels-photo-360177.jpeg?cs=srgb&dl=burn-burnt-candle-360177.jpg&fm=jpg" },
    { date: "19 Sep 1948", title: "Event 9", description: "A peaceful demonstration where participants carry lit candles, usually held after sunset.9", image: "https://images.pexels.com/photos/360177/pexels-photo-360177.jpeg?cs=srgb&dl=burn-burnt-candle-360177.jpg&fm=jpg" },
  ],
  2023: [/* Similar array with events for 2023 */],
  2022: [/* Similar array with events for 2022 */],
};

function EventsPage() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const years = Object.keys(eventsData);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Year Controller */}
      <div className="flex justify-center gap-4 mb-8 overflow-x-auto">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-full text-lg font-bold ${
              Number(year) === selectedYear
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-600"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3 md:grid-cols-2 md:grid-rows-4 gap-6">
        {eventsData[selectedYear].map((event, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            initial="hidden"
            whileHover="visible"
            animate="hidden"
            style={{ backgroundImage: `url(${event.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300"></div>

            {/* Title and Date */}
            <motion.div
              className="absolute bottom-0 left-0 w-full p-4 text-white"
              variants={{
                hidden: { y: "0%", opacity: 1 },
                visible: { y: "-50%", opacity: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm">{event.date}</p>
              <h3 className="text-lg font-bold">{event.title}</h3>
            </motion.div>

            {/* Description (Appears on hover) */}
            <motion.div
              className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 group-hover:opacity-100"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: "0%", opacity: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm">{event.description}</p>
            </motion.div>

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500"
              initial="hidden"
              whileHover="visible"
              variants={{
                hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
                visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
              }}
              transition={{ duration: 0.7 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
