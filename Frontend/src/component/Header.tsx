import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 w-full fixed h-30 z-10 border-b-2 rounded-2xl">
      <div className="ml-16 flex justify-between flex-row">
        <div>
          <img
            src='/assets/Logo.svg'
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>
        <div className='flex justify-end'>
        <div className='flex'>
          <img
            src='/assets/Logo1.svg'
            alt='Logo1'
            className='h-8 w-8 mt-2'
          />
        </div>
        <div className='border-2 w-48 h-[48px] ml-8 flex items-center shadow-md rounded-md border-green-600 p-2'>
          <img
            className="w-6 h-6"
            src='/assets/Logo2.svg'
            alt="Profile"
          />
          <div className='flex flex-col ml-2'>
            <span className='text-xs font-medium'>Kelvin Roadster</span>
            <span className='text-xs text-gray-500 font-light'>Senior Manager</span>
          </div>
          <div>
            <img
              className="w-6 h-6 ml-4"
              src='/assets/arrow.svg'
              alt="Arrow"
            />
          </div>
        </div>
        <div className='flex ml-3'>
          <img
            src='/assets/Logo3.svg'
            alt='Logo3'
            className='h-7 w-7 mt-2'
          />
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
