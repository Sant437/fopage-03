import React from 'react';

const Farmer = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center bg-gray-100 p-5 rounded-lg mx-4 mt-28 ml-3.5 mr-50 h-64 w-[94.7%]">
        <img
          className="w-52 h-52 m-8 rounded-full"
          src={`/assets/Farmer.svg`}
          alt="Farmer"
        />
        <div className="flex flex-grow justify-between mt-5">
          {/* Left Side */}
          <div className="flex flex-col gap-4 w-1/2">
            <div>
              <div className="text-gray-500 text-xs mb-1"> Farmer ID<span className="text-red-500">*</span></div>
              <div className="text-xs">123492</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs mb-1">TBGR ID<span className="text-red-500">*</span></div>
              <div className="text-xs">6403251987</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs mb-1">Age<span className="text-red-500">*</span></div>
              <div className="text-xs">48</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs mb-1">Crop Type<span className="text-red-500">*</span></div>
              <div className="text-xs">KLS - FCV</div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4 w-1/2">
            <div>
              <div className="text-gray-500 text-xs mb-1">Name<span className="text-red-500">*</span></div>
              <div className="text-xs">David</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs mb-1">Phone number<span className="text-red-500">*</span></div>
              <div className="text-xs">+919534289188</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs mb-1">Gender<span className="text-red-500">*</span></div>
              <div className="text-xs">Male</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farmer;
