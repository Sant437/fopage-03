import React from 'react';

const Notifications2: React.FC = () => {
  return (
    <div className="relative ml-5 z-3 flex flex-col space-y-0">
      <div className="flex gap-20 font-work-sans">

        <button className="border-none bg-none p-2.5 cursor-pointer text-gray-400 text-xs">Notification</button>
        <div className="text-green-500">
          <button className="relative bg-none p-2.5 border-b-2 border-green-500 cursor-pointer text-green-500 text-xs">
            Chats
          </button>
        </div>
      </div>
      <div className="line text-gray-200">
        <hr className="m-0 w-[96%]" />
      </div>
    </div>
  );
};

export default Notifications2;
