import React from 'react';


function Family() {
  return (
    <div>
         <div className="flex flex-col bg-neutral-100 p-5 rounded-lg mx-4 mt-4 w-[60%] h-24">
      {/* Title Section */}
      

      {/* Address Information */}
      <div className="flex flex-col gap-4">
        {/* Row 1 */}
        <div className="flex flex-row justify-between items-center mb-5">
          <div className="flex-1">
            <div className="text-gray-500 text-xs mb-1">Marital Status<span className="text-red-500">*</span></div>
            <div className="text-xs font-medium">Married</div>
          </div>
          <div className="flex-1">
            <div className="text-gray-500 text-xs mb-1">Spouse Name</div>
            <div className="font-medium text-xs">Dev</div>
          </div>
          <div className="flex-1">
            <div className="text-gray-500 text-xs">Children</div>
            <div className="text-neutral-600 font-medium text-xs">Male</div>
            <div className="font-medium text-xs">01</div>
          </div>
          <div className="flex-1">
            <div className="text-neutral-600 text-xs">Female</div>
            <div className="font-medium text-xs">Nil</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Family