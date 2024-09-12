import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { RiProhibitedLine } from 'react-icons/ri';

const Buttons: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [reason, setReason] = useState('');
  const maxChars = 180;

  const handleRejectClick = () => {
    setIsPopupVisible(true);
  };

  const handleCancelClick = () => {
    setIsPopupVisible(false);
  };

  const handleConfirmClick = () => {
    // Handle confirm logic here
    setIsPopupVisible(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReason(event.target.value);
  };

  const getCharCount = (text: string): number => {
    return text.length;
  };

  return (
    <div className="flex ml-8 mb-20 mt-10 z-20 space-x-2">
      <button className="bg-green-600 text-white text-xs px-4 py-2 rounded flex items-center">
        <BsCheckCircle className="mr-2" /> Approve
      </button>
      <button
        className="text-white text-xs px-6 py-2 rounded flex items-center"
        style={{ backgroundColor: "#F75656" }}
        onClick={handleRejectClick}
      >
        <RiProhibitedLine className="mr-2" /> Reject
      </button>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#f2f4f2] bg-opacity-50 z-50">
          <div className="relative rounded bg-[#f5f3f3] shadow-lg w-80">
            <h2 className="text-xs bg-red-500 text-white p-4 border-[2px] border-black rounded">Rejected</h2>
            <div className='relative px-4 py-2 mt-3'>
              <div className='relative'>
                <textarea
                  className='w-full h-28 border placeholder:text-xs border-gray-300 rounded text-xs resize-none'
                  rows={4}
                  value={reason}
                  onChange={handleChange}
                  placeholder='Enter the reject reason'
                  style={{ padding: '0.5rem', paddingRight: '2rem' }}
                ></textarea>
                <div className='absolute inset-0 flex items-end justify-end p-2 pointer-events-none'>
                  <p className='text-xs text-gray-500'>
                    {getCharCount(reason)}/{maxChars}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 justify-end px-4 py-4">
              <button
                className="bg-gray-300 text-gray-700 px-6 text-xs py-2 rounded"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-6 text-xs py-2 rounded"
                onClick={handleConfirmClick}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buttons;
