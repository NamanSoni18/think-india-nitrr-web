import React from "react";
import { CiMail, CiBank } from "react-icons/ci";
import { FaRegUser, FaPhoneAlt, FaUserFriends } from "react-icons/fa";
import { home_assets } from "../../../assets/home_assets";

function ContactForm() {
  return (
    <div className="h-[700px] w-screen mt-10 flex items-center justify-center">
      {/* Neumorphic Container with Background Image */}
      <div
        className="bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] rounded-3xl p-10 w-full max-w-7xl max-h-4xl h-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${home_assets.contact_form})`,
          // backgroundSize: "100% 100%", // updated to stretch the image
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // add this to prevent image repetition
        }}
      >
        <div className="lg:flex lg:flex-row-reverse lg:space-x-10 lg:space-x-reverse items-center gap-8">
          {/* Content Section (Right Side) */}
          <div className="lg:w-[400px] space-y-4">
            <p className="font-semibold">Join Think India</p>
            <h2 className="text-5xl font-bold text-orange-600">
              Be a Catalyst for Positive Change!
            </h2>
            <p className="text-gray-700 text-xl">
              Are you passionate about making a difference in Society? Do you
              believe in the power of youth to drive meaningful change? If so,
              we invite you to join Think India, a dynamic community dedicated
              to uplifting society and empowering new generations.
            </p>
          </div>

          {/* Form Section (Left Side) */}
          <div className="lg:w-1/2 w-full">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* First Row */}
              <div className="group w-full">
                <input
                  required
                  type="text"
                  className="input w-full border border-gray-300 rounded-md p-2"
                  name=""
                />
                <label className="flex flex-row gap-4 font-semibold text-black contact-form-label items-center mt-2">
                  <FaRegUser /> Name
                </label>
              </div>
              <div className="group w-full">
                <input
                  required
                  type="email"
                  className="input w-full border border-gray-300 rounded-md p-2"
                  name=""
                />
                <label className="flex flex-row gap-4 font-semibold text-black contact-form-label items-center mt-2">
                  <CiMail /> Email
                </label>
              </div>

              {/* Second Row */}
              <div className="group w-full">
                <input
                  required
                  type="number"
                  className="input w-full border border-gray-300 rounded-md p-2"
                  name=""
                />
                <label className="flex flex-row gap-4 font-semibold text-black contact-form-label items-center mt-2">
                  <FaPhoneAlt /> Mobile Number
                </label>
              </div>
              <div className="group w-full">
                <input
                  required
                  type="text"
                  className="input w-full border border-gray-300 rounded-md p-2"
                  name=""
                />
                <label className="flex flex-row gap-4 font-semibold text-black contact-form-label items-center mt-2">
                  <FaUserFriends /> Gender
                </label>
              </div>

              {/* Third Row (Full Width) */}
              <div className="group col-span-1 md:col-span-2 w-full">
                <input
                  required
                  type="text"
                  className="input w-full border border-gray-300 rounded-md p-2"
                  name=""
                />
                <label className="flex flex-row gap-4 font-semibold text-black contact-form-label items-center mt-2">
                  <CiBank /> Name of University, School
                </label>
              </div>

              {/* Button (Full Width) */}
              <div className="col-span-1 md:col-span-2 w-full">
                <button className="w-full rounded-md bg-orange-600 text-white py-3 shadow-md hover:shadow-lg transition">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
