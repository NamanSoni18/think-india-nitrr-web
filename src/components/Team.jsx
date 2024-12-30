import React from "react";
import TeamSection from "./InnerComponent/Team Section/TeamSpecific";
import { motion } from "framer-motion";
import { home_assets } from "../assets/home_assets";

// Team members data for both TeamSlider and MeetOurCommunity components
const teamMembersForSlider = [
  {
    name: "Madhvi Jain",
    role: "Core Executive Member",
    imageUrl: home_assets.profile1, // Updated with local image
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Priya Sharma",
    role: "Core Executive Member",
    imageUrl: home_assets.profile2, // Updated with local image
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Payal Kumari",
    role: "Core Executive Member",
    imageUrl: home_assets.profile3, // Updated with local image
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Rahul Mehta",
    role: "Core Executive Member",
    imageUrl: home_assets.profile4, // Updated with local image
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Sneha Patil",
    role: "Core Executive Member",
    imageUrl: home_assets.profile1, // Updated with local image
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Madhvi Jain",
    role: "Core Executive Member",
    imageUrl: home_assets.profile2, // Updated with local image
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Priya Sharma",
    role: "Core Executive Member",
    imageUrl: home_assets.profile3, // Updated with local image
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Payal Kumari",
    role: "Core Executive Member",
    imageUrl: home_assets.profile4, // Updated with local image
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Rahul Mehta",
    role: "Core Executive Member",
    imageUrl: home_assets.profile1, // Updated with local image
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Sneha Patil",
    role: "Core Executive Member",
    imageUrl: home_assets.profile2, // Updated with local image
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Sneha Patil",
    role: "Core Executive Member",
    imageUrl: home_assets.profile3, // Updated with local image
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
];

// Team members for the community section
const teamMembersForCommunity = [
  {
    name: "Somya Gupta",
    role: "All India Convenor Think India",
    roleLevel: "Top Level",
    image: home_assets.profile1, // Updated with local image
  },
  {
    name: "Aushi Mishra",
    role: "Head Coordinator",
    roleLevel: "Top Level",
    image: home_assets.profile2, // Updated with local image
  },
  {
    name: "Rahul Verma",
    role: "Community Manager",
    roleLevel: "Second Level",
    image: home_assets.profile3, // Updated with local image
  },
  {
    name: "Priya Sharma",
    role: "Event Organizer",
    roleLevel: "Third Level",
    image: home_assets.profile4, // Updated with local image
  },
  {
    name: "Amit Kumar",
    role: "Ambassador",
    roleLevel: "Top Level",
    image: home_assets.profile1, // Updated with local image
  },
  {
    name: "Neha Reddy",
    role: "Co-Ambassador",
    roleLevel: "Second Level",
    image: home_assets.profile2, // Updated with local image
  },
  {
    name: "Neha Reddy",
    role: "Co-Ambassador",
    roleLevel: "Second Level",
    image: home_assets.profile3, // Updated with local image
  },
  {
    name: "Neha Reddy",
    role: "Co-Ambassador",
    roleLevel: "Second Level",
    image: home_assets.profile4, // Updated with local image
  },
  {
    name: "Anil Kumar",
    role: "Mentor",
    roleLevel: "Third Level",
    image: home_assets.profile1, // Updated with local image
  },
  {
    name: "Simran Kaur",
    role: "Design Team",
    roleLevel: "Third Level",
    image: home_assets.profile2, // Updated with local image
  },
  {
    name: "Vikash Saini",
    role: "B Tech Coordinator",
    roleLevel: "Second Level",
    image: home_assets.profile3, // Updated with local image
  },
  {
    name: "Ananya Verma",
    role: "Treasurer",
    roleLevel: "Second Level",
    image: home_assets.profile4, // Updated with local image
  },
  {
    name: "Sandeep Sharma",
    role: "Event Management Team",
    roleLevel: "Third Level",
    image: home_assets.profile1, // Updated with local image
  },
  {
    name: "Ravi Gupta",
    role: "MCA Coordinator",
    roleLevel: "Second Level",
    image: home_assets.profile2, // Updated with local image
  },
  {
    name: "Priyanka Yadav",
    role: "M Tech Coordinator",
    roleLevel: "Second Level",
    image: home_assets.profile3, // Updated with local image
  },
  {
    name: "Kiran Patel",
    role: "MSc Coordinator",
    roleLevel: "Second Level",
    image: home_assets.profile4, // Updated with local image
  },
  {
    name: "Shivani Bhagat",
    role: "Sponsorship Team",
    roleLevel: "Third Level",
    image: home_assets.profile1, // Updated with local image
  },
];


const bhaskaracharyaTeamMembers = [
  {
    name: "Anjali Kumar",
    role: "Study Circle Coordinator",
    image:
      home_assets.profile1,
  },
  {
    name: "Karan Singh",
    role: "Mathematics Enthusiast",
    image:
      home_assets.profile2,
  },
  {
    name: "Sana Iqbal",
    role: "Research Analyst",
    image:
      home_assets.profile3,
  },
  {
    name: "Vikram Joshi",
    role: "Math Educator",
    image:
      home_assets.profile4,
  },
];

// TeamSlider Component
// TeamSlider Component
const TeamSlider = () => {
  const sliderItems = [...teamMembersForSlider, ...teamMembersForSlider];

  return (
    <div
      className="overflow-hidden py-8"
      style={{ backgroundColor: "#ffebde" }}
    >
      <motion.div
        className="flex flex-nowrap gap-6"
        initial={{ x: 0 }}
        animate={{ x: `-${100}%` }}
        transition={{
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          width: `${(sliderItems.length / teamMembersForSlider.length) * 100}%`,
        }}
      >
        {sliderItems.map((member, index) => (
          <div
            key={index}
            className="relative min-w-[200px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full py-3 text-center text-white bg-black bg-opacity-50">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// TeamCard Component for community sections
const TeamCard = ({ member }) => (
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-60 object-cover"
    />
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
      <p className="text-gray-500">{member.role}</p>
    </div>
  </div>
);

const MeetOurCommunity = () => {
  // Categorize team members by role level
  const topLevelMembers = teamMembersForCommunity.filter((member) => member.roleLevel === 'Top Level');
  const secondLevelMembers = teamMembersForCommunity.filter((member) => member.roleLevel === 'Second Level');
  const thirdLevelMembers = teamMembersForCommunity.filter((member) => member.roleLevel === 'Third Level');
  
  return (
    <section className="py-12" style={{ backgroundColor: "white" }}>
      <h2 className="text-center text-5xl font-bold mb-8">Meet Our Community</h2>
      <div className="container mx-auto px-4">
        <div className="grid gap-8">
          {/* Top Level Role - 2 columns, 2 rows */}
          <div className="grid grid-cols-2 gap-4">
            {topLevelMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>

          {/* Second Level Role - 4 columns, 1 row */}
          <div className="grid grid-cols-4 gap-4">
            {secondLevelMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>

          {/* Third Level Role - 4 columns, 1 row */}
          <div className="grid grid-cols-4 gap-4">
            {thirdLevelMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// Bhaskaracharya Study Circle Team Section
const BhaskaracharyaStudyCircle = () => {
  return (
    <section className="py-12" style={{ backgroundColor: "white" }}>
      <h2 className="text-center text-3xl font-bold mb-8">
        Bhaskaracharya Study Circle Team
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bhaskaracharyaTeamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Main JoinSection Component
const Team = () => {
  return (
    <div
      className="min-h-screen w-screen flex flex-col"
      style={{ backgroundColor: "#ffebde" }}
    >
      <main
        className="flex-grow flex flex-col items-center justify-center text-center px-6"
        style={{
          lineHeight: "normal",
          marginTop: "90px",
        }}
      >
        <h1
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-loose"
          style={{ lineHeight: "normal" }}
        >
          Over <span className="text-orange-500">150+</span> Dedicated Active
          Members
        </h1>
        <p
          className="text-lg md:text-xl text-gray-700 mb-8"
          style={{ lineHeight: "normal", marginBottom: "50px" }}
        >
          Inspire Millions Of People To Connect With Our Community{" "}
          <span className="text-white font-semibold">Now</span>
        </p>
        <button
          className="bg-orange-200 text-white px-6 py-2 rounded-[10px] font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-orange-600"
          style={{ backgroundColor: "orange" }}
        >
          Join Now
        </button>
      </main>

      {/* Team Slider Section */}
      <TeamSlider />

      {/* Meet Our Community Section */}
      <MeetOurCommunity />

      {/* Bhaskaracharya Study Circle Team Section */}
      <BhaskaracharyaStudyCircle />

      <TeamSection />
    </div>
  );
};

export default Team;
