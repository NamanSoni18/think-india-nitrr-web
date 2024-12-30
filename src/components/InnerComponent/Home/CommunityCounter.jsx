import React, { useEffect, useState } from "react";
import { home_assets } from "../../../assets/home_assets";

function CommunityCounter() {
  // States for the animated counters
  const [studentsCount, setStudentsCount] = useState(0);
  const [collegesCount, setCollegesCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);

  // Effect to animate the counters
  useEffect(() => {
    let students = 0;
    let colleges = 0;
    let followers = 0;

    const interval = setInterval(() => {
      if (students < 2000) {
        students += 50;
        setStudentsCount(students);
      }
      if (colleges < 50) {
        colleges += 2;
        setCollegesCount(colleges);
      }
      if (followers < 10000) {
        followers += 100;
        setFollowersCount(followers);
      }

      if (students >= 2000 && colleges >= 50 && followers >= 10000) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-screen flex-col items-center gap-8 py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Join Our Community
      </h2>

      {/* Responsiveness managed with Tailwind classes */}
      <div className="grid grid-cols-1 gap-10 justify-items-center w-full max-w-5xl mx-auto sm:grid-rows-2 sm:grid-cols-2 sm:grid-flow-dense xs:grid-rows-2 xs:grid-cols-2 xs:grid-flow-dense md:grid-cols-3 md:grid-rows-1">
        {/* Colleges Icon */}
        <div className="flex flex-col items-center space-y-4 row-span-1 col-span-1 sm:col-span-2 sm:col-start-1 xs:col-span-2 xs:col-start-1 md:col-span-1">
          <img
            src={home_assets.collages_icon}
            alt="Colleges Icon"
            className="h-32 w-32 md:h-[25vh] md:w-[25vh] shadow-lg shadow-slate-600 rounded-3xl"
          />
          <h3 className="text-xl md:text-2xl text-orange-500 font-bold">
            {collegesCount}+
          </h3>
          <p className="text-lg md:text-xl font-semibold text-gray-800">Colleges</p>
        </div>

        {/* Students Icon */}
        <div className="flex flex-col items-center space-y-4 row-span-1 col-span-1 sm:col-start-1 xs:col-start-1 md:col-span-1">
          <img
            src={home_assets.student_icon}
            alt="Students Icon"
            className="h-32 w-32 md:h-[25vh] md:w-[25vh] shadow-lg shadow-slate-600 rounded-3xl"
          />
          <h3 className="text-xl md:text-2xl text-orange-500 font-bold">
            {studentsCount.toLocaleString()}+
          </h3>
          <p className="text-lg md:text-xl font-semibold text-gray-800">Students</p>
        </div>

        {/* Followers Icon */}
        <div className="flex flex-col items-center space-y-4 row-span-1 col-span-1 sm:col-start-2 xs:col-start-2 md:col-span-1">
          <img
            src={home_assets.followers_icon}
            alt="Followers Icon"
            className="h-32 w-32 md:h-[25vh] md:w-[25vh] shadow-lg shadow-slate-600 rounded-3xl"
          />
          <h3 className="text-xl md:text-2xl text-orange-500 font-bold">
            {followersCount.toLocaleString()}+
          </h3>
          <p className="text-lg md:text-xl font-semibold text-gray-800">Followers</p>
        </div>
      </div>
    </div>
  );
}

export default CommunityCounter;
