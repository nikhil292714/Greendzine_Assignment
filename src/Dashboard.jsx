import React from 'react';
import BottomBar from "./BottomBar";

export default function Dashboard() {
  const productivity_data = [
    {
      Monday: "75%",
      Tuesday: "52%",
      Wednesday: "68%", 
      Thursday: "93%",
      Friday: "75%",
      Saturday: "63%",
    },
  ];
  
  const notifyCount = 4;

  return (
    <>
      {/* Call Icon */}
      <img
        src="/call.png"
        alt="Call Icon"
        className="w-12 h-12 absolute top-4 right-4"
      />

      {/* Main Container */}
      <div className="flex flex-col justify-center items-center pt-8 space-y-6">
        {/* Logo */}
        <img
          src="/login_logo.png"
          alt="Moptro Logo"
          className="w-24 h-24 mt-8 mb-4"
        />

        {/* Notification Bubble */}
        <div className="absolute top-8 right-8 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
          {notifyCount}
        </div>

        {/* Dashboard Title */}
        <div className="bg-[#1A2C2C99] text-white text-lg font-semibold p-4 rounded-xl shadow-lg">
          Employee Productivity Dashboard
        </div>

        {/* Productivity Data Container */}
        <div className="bg-[#1A2C2C] max-w-sm w-full p-6 rounded-2xl shadow-md text-white space-y-6">
          {Object.keys(productivity_data[0]).map((day) => (
            <div key={day} className="space-y-1">
              {/* Day and Percentage */}
              <div className="flex justify-between text-sm font-medium">
                <span>Productivity On {day}</span>
                <span>{productivity_data[0][day]}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-2.5 rounded-full">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{
                    width: productivity_data[0][day],
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomBar notifyCount={notifyCount} />
    </>
  );
}
