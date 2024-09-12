import React from 'react';

function Button() {
  return (
    <div className="absolute top-24 ml-2 flex ">
      <div className="relative left-2 bg-white shadow-md text-black px-4 py-2 rounded-lg text-xs z-10 ">
        Notification
      </div>
      <div className="relative bg-green-100 text-green-600 px-4 py-2 rounded-r text-xs z-0">
        Notification Details
      </div>
    </div>
  );
}

export default Button;
