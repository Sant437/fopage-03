import React from 'react';

function Proof() {
  return (
    <div className="flex justify-between bg-neutral-100 p-5 rounded-lg mx-4 mb-10 ml-3.5 mr-50 h-20 w-[90%]">
      {/* Left Side */}
      <div className="flex flex-col justify-start">
        <div className="text-gray-500 text-xs mb-1">Aadhar No<span className="text-red-500">*</span></div>
        <div className="text-xs mb-2">123492</div>
      </div>
      
     
      <div className="flex flex-col justify-start">
        <div className="text-green-600 text-xs mt-3">helen aadhar.pdf</div>
        
      </div>
    </div>
  );
}

export default Proof;
