import React from 'react';// Adjust the path according to your file structure

const Header = () => {
  return (
    <header className="bg-white p-4 w-full fixed top-0 left-0 z-10 border-b-2 rounded-2xl">
      < div className="container mx-auto flex justify-between">
        <img
          src={`/assets/Logo.svg`} 
          alt="Logo"
          className="h-10 ml-10 w-100"
        />
        <img
          src={'/assets/Logo1.svg'}
          alt='Logo1'
          className='ml-770 h-8 w-8 mt-1'
        />
        <img
          src={'/assets/Logo2.svg'}
          alt='Logo2'
          className='ml-7 h-10'
        />
        <img
          src={'/assets/Logo3.svg'}
          alt='Logo3'
          className='ml-5 h-6'
        />
      </div>
    </header>
  );
};

export default Header;
