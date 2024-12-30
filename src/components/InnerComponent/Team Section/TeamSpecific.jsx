//CODE WITH SCROLL BAR

import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { home_assets } from "../../../assets/home_assets";

const TeamSection = () => {
  const [activeDomain, setActiveDomain] = useState("Design");

  const domainData = {
    Design: Array(8).fill({ name: "Akash Kumar", role: "Core Coordinator", branch: "Electrical Engineering" }),
    "PM & Relation": Array(8).fill({ name: "Akash Kumar", role: "Core Coordinator", branch: "Electrical Engineering" }),
    Doc: Array(8).fill({ name: "Akash Kumar", role: "Core Coordinator", branch: "Electrical Engineering" }),
    Event: Array(8).fill({ name: "Akash Kumar", role: "Core Coordinator", branch: "Electrical Engineering" }),
    Sponsor: Array(8).fill({ name: "Akash Kumar", role: "Core Coordinator", branch: "Electrical Engineering" }),
  };

  const domainBackgrounds = {
    Design: home_assets.docBg,
    "PM & Relation": home_assets.docBg,
    Doc: home_assets.docBg,
    Event: home_assets.docBg,
    Sponsor: home_assets.docBg,
  };

  const specialThanksProfiles = [
    { name: 'Aushi Mishra', designation: 'Data Analyst', image: home_assets.profile1, facebook: '', instagram: '', linkedin: '' },
    { name: 'Rohit Sharma', designation: 'Software Developer', image: home_assets.profile2, facebook: '', instagram: '', linkedin: '' },
    { name: 'Priya Singh', designation: 'Product Manager', image: home_assets.profile3, facebook: '', instagram: '', linkedin: '' },
    { name: 'Sneha Patel', designation: 'UX Designer', image: home_assets.profile4, facebook: '', instagram: '', linkedin: '' },
    { name: 'Ankit Verma', designation: 'Web Developer', image: home_assets.profile1, facebook: '', instagram: '', linkedin: '' },
    { name: 'Maya Gupta', designation: 'Mobile Developer', image: home_assets.profile2, facebook: '', instagram: '', linkedin: '' },
    { name: 'Ravi Kumar', designation: 'UI/UX Designer', image: home_assets.profile3, facebook: '', instagram: '', linkedin: '' },
    { name: 'Neha Joshi', designation: 'Project Manager', image: home_assets.profile4, facebook: '', instagram: '', linkedin: '' },
  ];

  return (
    <div className="p-4 md:p-8 w-screen">
      {/* Heading centered across both sections */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Members</h2>
      </div>

      {/* Top Section with Domain Buttons, Divider, and Members */}
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Domain Buttons */}
        <div className="md:w-1/5 flex flex-wrap justify-center md:flex-col items-center md:pt-8 space-y-4 mb-4 md:mb-0">
          <div className="flex overflow-x-auto md:overflow-x-hidden md:flex-col space-x-4 md:space-x-0 md:space-y-4">
            {Object.keys(domainData).map((domain) => (
              <div key={domain} className="flex items-center justify-center w-32 md:w-full">
                <button
                  onClick={() => setActiveDomain(domain)}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${domainBackgrounds[domain]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className={`w-28 h-10 md:w-32 md:h-12 text-white text-sm font-semibold rounded-lg flex justify-center items-center transition-transform mb-2 md:mb-4 ${
                    activeDomain === domain ? "border-2 border-black scale-105" : ""
                  }`}
                >
                  {domain}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

        {/* Members Section */}
        <div className="flex-1">
          {/* For mobile view - keep existing grid layout */}
          <div className="block md:hidden">
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold text-left">{activeDomain}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {domainData[activeDomain].map((member, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center text-sm md:text-base"
                >
                  <p className="font-semibold text-orange-600">{member.name}</p>
                  <p className="text-gray-700">{member.role}</p>
                  <p className="text-gray-500">{member.branch}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For laptop view - scrollable container */}
          <div className="hidden md:block h-[600px] overflow-y-auto">
            {Object.keys(domainData).map((domain) => (
              <div key={domain} className="mb-8">
                <h3 className="text-xl md:text-2xl font-semibold text-left mb-4">{domain}</h3>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
                  {domainData[domain].map((member, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center text-sm md:text-base"
                    >
                      <p className="font-semibold text-orange-600">{member.name}</p>
                      <p className="text-gray-700">{member.role}</p>
                      <p className="text-gray-500">{member.branch}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-gray-300"></div>

      {/* Special Thanks Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Special Thanks</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {specialThanksProfiles.map((profile, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  className="w-full h-40 md:h-60 object-cover"
                  src={profile.image}
                  alt={`${profile.name} profile`}
                />
                <div className="absolute bottom-2 left-2 flex flex-col space-y-2">
                  <a
                    href={profile.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-full bg-white text-black hover:text-blue-600 transition-all"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-full bg-white text-black hover:text-pink-500 transition-all"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-full bg-white text-black hover:text-blue-800 transition-all"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm md:text-lg font-semibold">{profile.name}</h3>
                <p className="text-gray-600 text-xs md:text-base">{profile.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;












//PREVIOUSLY PUSHED CODE WITHOUT SCROLL BAR (with working domain buttons)

// import React, { useState } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import profileImage1 from './assets/profile1.jpg';
// import profileImage2 from './assets/profile2.jpg';
// import profileImage3 from './assets/profile3.jpg';
// import profileImage4 from './assets/profile4.jpg';
// import profileImage5 from './assets/profile1.jpg';  // Added new profile images
// import profileImage6 from './assets/profile2.jpg';
// import profileImage7 from './assets/profile3.jpg';
// import profileImage8 from './assets/profile4.jpg';

// // Import background images for each domain button
// import designBg from './assets/docBg.jpg';
// import pmBg from './assets/docBg.jpg';
// import docBg from './assets/docBg.jpg';
// import eventBg from './assets/docBg.jpg';
// import sponsorBg from './assets/docBg.jpg';

// const TeamSection = () => {
//   const [activeDomain, setActiveDomain] = useState("Design");

//   const domainData = {
//     Design: Array(8).fill({ name: "Akash Kumar", role: "Core Coordinator", branch: "Electrical Engineering" }),
//     "PM & Relation": Array(8).fill({ name: "Akash Kumar", role: "Core Coordinator", branch: "Electrical Engineering" }),
//     Doc: Array(8).fill({ name: "Akash Kumar", role: "Core Coordinator", branch: "Electrical Engineering" }),
//     Event: Array(8).fill({ name: "Akash Kumar", role: "Core Coordinator", branch: "Electrical Engineering" }),
//     Sponsor: Array(8).fill({ name: "Akash Kumar", role: "Core Coordinator", branch: "Electrical Engineering" }),
//   };

//   const domainBackgrounds = {
//     Design: designBg,
//     "PM & Relation": pmBg,
//     Doc: docBg,
//     Event: eventBg,
//     Sponsor: sponsorBg,
//   };

//   const specialThanksProfiles = [
//     { name: 'Aushi Mishra', designation: 'Data Analyst', image: profileImage1, facebook: '', instagram: '', linkedin: '' },
//     { name: 'Rohit Sharma', designation: 'Software Developer', image: profileImage2, facebook: '', instagram: '', linkedin: '' },
//     { name: 'Priya Singh', designation: 'Product Manager', image: profileImage3, facebook: '', instagram: '', linkedin: '' },
//     { name: 'Sneha Patel', designation: 'UX Designer', image: profileImage4, facebook: '', instagram: '', linkedin: '' },
//     { name: 'Ankit Verma', designation: 'Web Developer', image: profileImage5, facebook: '', instagram: '', linkedin: '' },
//     { name: 'Maya Gupta', designation: 'Mobile Developer', image: profileImage6, facebook: '', instagram: '', linkedin: '' },
//     { name: 'Ravi Kumar', designation: 'UI/UX Designer', image: profileImage7, facebook: '', instagram: '', linkedin: '' },
//     { name: 'Neha Joshi', designation: 'Project Manager', image: profileImage8, facebook: '', instagram: '', linkedin: '' },
//   ];

//   return (
//     <div className="p-4 md:p-8">
//       {/* Heading centered across both sections */}
//       <div className="text-center mb-6">
//         <h2 className="text-2xl md:text-3xl font-semibold">Members</h2>
//       </div>

//       {/* Top Section with Domain Buttons, Divider, and Members */}
//       <div className="flex flex-col md:flex-row md:space-x-4">
//         {/* Domain Buttons */}
//         <div className="md:w-1/5 flex flex-wrap justify-center md:flex-col items-center md:pt-8 space-y-4 mb-4 md:mb-0 md:max-h-[400px] overflow-x-hidden"> {/* Added overflow-x-hidden */}
//           <div className="flex overflow-x-auto md:overflow-y-hidden md:flex-col space-x-4 md:space-x-0 md:space-y-4">
//             {Object.keys(domainData).map((domain) => (
//               <div key={domain} className="flex items-center justify-center w-32 md:w-full">
//                 <button
//                   onClick={() => setActiveDomain(domain)}
//                   style={{
//                     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${domainBackgrounds[domain]})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                   }}
//                   className={`w-28 h-10 md:w-32 md:h-12 text-white text-sm font-semibold rounded-lg flex justify-center items-center transition-transform mb-2 md:mb-4 ${
//                     activeDomain === domain ? "border-2 border-black scale-105" : ""
//                   }`}
//                 >
//                   {domain}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Vertical Divider */}
//         <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

//         {/* Members Section */}
//         <div className="flex-1">
//           {/* Domain-specific Heading aligned to the left */}
//           <div className="mb-4">
//             <h3 className="text-xl md:text-2xl font-semibold text-left">{activeDomain}</h3>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {domainData[activeDomain].map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center text-sm md:text-base"
//               >
//                 <p className="font-semibold text-orange-600">{member.name}</p>
//                 <p className="text-gray-700">{member.role}</p>
//                 <p className="text-gray-500">{member.branch}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="my-8 h-px bg-gray-300"></div>

//       {/* Special Thanks Section */}
//       <div>
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Special Thanks</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {specialThanksProfiles.map((profile, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div className="relative">
//                 <img
//                   className="w-full h-40 md:h-60 object-cover"  // Set to cover to prevent zooming
//                   src={profile.image}
//                   alt={`${profile.name} profile`}
//                 />
//                 <div className="absolute bottom-2 left-2 flex flex-col space-y-2">
//                   <a
//                     href={profile.facebook}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-1 rounded-full bg-white text-black hover:text-blue-600 transition-all"
//                   >
//                     <FaFacebookF />
//                   </a>
//                   <a
//                     href={profile.instagram}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-1 rounded-full bg-white text-black hover:text-pink-500 transition-all"
//                   >
//                     <FaInstagram />
//                   </a>
//                   <a
//                     href={profile.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-1 rounded-full bg-white text-black hover:text-blue-800 transition-all"
//                   >
//                     <FaLinkedinIn />
//                   </a>
//                 </div>
//               </div>
//               <div className="p-4 text-center">
//                 <h3 className="text-sm md:text-lg font-semibold">{profile.name}</h3>
//                 <p className="text-gray-600 text-xs md:text-base">{profile.designation}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;


