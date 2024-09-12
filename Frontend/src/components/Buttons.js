import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { RiProhibitedLine } from 'react-icons/ri';

function Buttons() {
  return (
    <div className="flex ml-8 mb-20 z-20 space-x-2">
      <button className="bg-green-600 text-white text-xs px-4 py-2 rounded flex items-center">
        <BsCheckCircle className="mr-2" /> Approve
      </button>
      <button className="text-white text-xs px-5 py-2 rounded flex items-center" style={{backgroundColor: "#F75656"}}>
        <RiProhibitedLine className="mr-2" /> Reject
      </button>
    </div>
  );
}

export default Buttons;
