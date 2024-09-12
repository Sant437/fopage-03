import React from 'react';

const Address: React.FC = () => {
  return (
    <div className="flex flex-col bg-neutral-100 p-7 rounded-lg mx-4 mt-4 w-[65%] h-auto">
      {/* Row 1 */}
      <div className="flex flex-row justify-between mb-6">
        {/* Column 1 */}
        <div className="flex flex-col flex-1">
          <div className="text-gray-500 text-xs mb-1">
            House No, Street, Area<span className="text-red-500">*</span>
          </div>
          <div className="text-xs font-medium">No.5d, Devi Apartment</div>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col flex-1 ml-8">
          <div className="text-gray-500 text-xs mb-1">
            Village<span className="text-red-500">*</span>
          </div>
          <div className="font-medium text-xs">Grandhasiri</div>
        </div>
        {/* Column 3 */}
        <div className="flex flex-col flex-1 ml-8">
          <div className="text-gray-500 text-xs mb-1">
            District<span className="text-red-500">*</span>
          </div>
          <div className="font-medium text-xs">Guntur</div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-row justify-between">
        {/* Column 1 */}
        <div className="flex flex-col flex-1">
          <div className="text-gray-500 text-xs mb-1">
            State<span className="text-red-500">*</span>
          </div>
          <div className="font-medium text-xs">Andhra Pradesh</div>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col flex-1">
          <div className="text-gray-500 text-xs mb-1">
            Pin Code<span className="text-red-500">*</span>
          </div>
          <div className="font-medium text-xs">522410</div>
        </div>
      </div>
    </div>
  );
};

export default Address;
