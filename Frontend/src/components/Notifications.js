import React from 'react';

const Notifications = () => {
  return (
    <div className="relative top-24 left-3  ml-2 z-3 flex flex-col space-y-0">
      <div className="flex gap-2.5 font-work-sans">
        <div className="text-green-500">
          <button className="relative bg-none p-2.5 border-b-2 border-green-500 cursor-pointer text-green-500 text-xs">
            Notification
          </button>
        </div>
        <button className="border-none bg-none p-2.5 cursor-pointer text-gray-400 text-xs">Chat</button>
      </div>
      <div className="line text-gray-200">
        <hr className="m-0 w-[96%]" />
      </div>
    </div>
  );
};

export default Notifications;
