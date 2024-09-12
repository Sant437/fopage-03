import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
    <div className="relative ml-4 mr-16   z-3 flex flex-col w-full space-y-0">
      <div className="flex gap-52 font-work-sans">
        <button
          onClick={() => handleNavigation('/field-officer')}
          className="border-none bg-none p-2.5 cursor-pointer text-gray-400 text-xs"
        >
          Field Officer
        </button>
        <button
          onClick={() => handleNavigation('/task-management')}
          className="border-none bg-none p-2.5 cursor-pointer text-gray-400 text-xs"
        >
          Task Management
        </button>
        <button
          onClick={() => handleNavigation('/leave-management')}
          className="border-none bg-none p-2.5 cursor-pointer text-gray-400 text-xs"
        >
          Leave Management
        </button>
        <button
          onClick={() => handleNavigation('/tracking')}
          className="border-none bg-none p-2.5 cursor-pointer text-gray-400 text-xs"
        >
          Tracking
        </button>
        <div className="text-green-500">
          <button
            onClick={() => handleNavigation('/fo-msg-system')}
            className="relative bg-none p-2.5 border-b-2 border-green-500 cursor-pointer text-green-500 text-xs"
          >
            FO Msg System
          </button>
        </div>
      </div>
      <div className="line text-gray-200">
        <hr className="m-0 w-[100%]" />
      </div>
    </div>
    
    
    </>
  );
};

export default NavigationBar;
