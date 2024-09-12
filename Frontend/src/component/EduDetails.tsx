import React from 'react';

const EduDetails: React.FC = () => {
  return (
    <div className="flex flex-col justify-start bg-neutral-100 p-5 rounded-lg mx-4 mb-10 ml-3.5 mr-50 h-20 w-[90%]">
      <div className="text-gray-500 text-left text-xs mb-1 mt-3 ml-5">
        Education<span className="text-red-500">*</span>
      </div>
      <div className="text-xs text-left ml-5">B.com</div>
    </div>
  );
};

export default EduDetails;
