import React from 'react';
import TelecommutingJsx from "./TelecommutingJsx";

const Profile = () => {
  return (
    <div className="admin-login-container flex flex-col items-center">
      <h1 className="admin-login-heading text-xl md:text-3xl font-bold my-4">
        Profile Page
      </h1>
      <div className="svg-container w-full max-w-[500px] h-auto">
        {/* Use the img tag to display the SVG */}
        <TelecommutingJsx />
      </div>
    </div>
  );
};

export default Profile;
