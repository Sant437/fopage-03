import React from 'react';

export default function Address() {
  return (
    <div className="flex flex-col bg-neutral-100 p-5 rounded-lg mx-4 mt-4 w-[60%] h-auto">
      {/* Title Section */}
      

      {/* Address Information */}
      <div className="flex flex-col gap-4">
        {/* Row 1 */}
        <div className="flex flex-row justify-between items-center mb-5">
          <div className="flex-1">
            <div className="text-gray-500 text-xs mb-1">House No, Street, Area<span className="text-red-500">*</span></div>
            <div className="text-xs font-medium">No.5d, Devi Apartment</div>
          </div>
          <div className="flex-1">
            <div className="text-gray-500 text-xs mb-1">Village<span className="text-red-500">*</span></div>
            <div className="font-medium text-xs">Grandhasiri</div>
          </div>
          <div className="flex-1">
            <div className="text-gray-500 text-xs mb-1">District<span className="text-red-500">*</span></div>
            <div className="font-medium text-xs">Guntur</div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex-1">
            <div className="text-gray-500 text-xs mb-1">State<span className="text-red-500">*</span></div>
            <div className="font-medium text-xs">Andhra Pradesh</div>
          </div>
          <div className="flex-1">
            <div className="text-gray-500 text-xs mb-1">Pin Code<span className="text-red-500">*</span></div>
            <div className="font-medium text-xs">522410</div>
          </div>
        </div>
      </div>
    </div>
  );
}
