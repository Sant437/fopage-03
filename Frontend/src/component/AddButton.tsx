// src/component/AddButton.tsx
import React, { useState } from 'react';
import axios from 'axios';

const AddButton: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Correct URL with http protocol
      await axios.post('/api/AddUser', {
        mobileNumber,
        name
      });
      alert('User data saved successfully!');
      handleClosePopup();
    } catch (error) {
      console.error('Error saving user data:', error);
      alert('Failed to save user data.');
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleOpenPopup}
      >
        Add
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl mb-4">Add User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="mobileNumber" className="block text-sm text-gray-700">Mobile Number:</label>
                <input
                  type="text"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full px-3 py-2 text-xs border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm text-gray-700">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 text-xs bg-gray-300 rounded"
                  onClick={handleClosePopup}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs bg-blue-500 text-white rounded"
                  onClick={handleSubmit}
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddButton;

