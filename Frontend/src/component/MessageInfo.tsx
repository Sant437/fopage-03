// import React from 'react';

// interface Message {
//   id: number;
//   name: string;
//   imageSrc: string;
//   message: string;
//   time: string;
// }

// const messages: Message[] = [
//   {
//     id: 1,
//     name: 'Shiek',
//     imageSrc: '/assets/shiek.svg',
//     message: 'Do you want any help',
//     time: 'Just now',
//   },
//   {
//     id: 2,
//     name: 'Sethu',
//     imageSrc: '/assets/sethu.svg',
//     message: 'James Added former jasmine',
//     time: 'Just now',
//   },
//   {
//     id: 3,
//     name: 'Sathish',
//     imageSrc: '/assets/sathish.svg',
//     message: 'Do you want help',
//     time: 'Just now',
//   },
//   {
//     id: 4,
//     name: 'Vijay',
//     imageSrc: '/assets/vijay.svg',
//     message: 'James Added former jasmine',
//     time: 'Just now',
//   },
// ];

// const MessageInfo: React.FC = () => {
//   return (
//     <div className="flex flex-col ml-56">
//       {messages.map((msg, index) => (
//         <div key={msg.id} className="bg-white p-4 h-24 rounded mb-6">
//           <div>
//             <div className='text-xs' style={{ color: "#02963A" }}>Unread</div>
//           </div>
//           <div className='flex flex-row'>
//             <img
//               className="w-8 h-8 mt-2 ml-2"
//               src={msg.imageSrc}
//               alt="Profile"
//             />
//             <div className='flex flex-col ml-8'>
//               <div className='text-sm font-medium mb-1'>{msg.name}</div>
//               <div className='text-xs whitespace-nowrap'>{msg.message}</div>
//             </div>
//             <div className={`text-xs ${index % 2 === 0 ? 'ml-570' : 'ml-530'}`}>
//               {msg.time}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MessageInfo;





import React, { useState } from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";

interface Chat {
  name: string;
  message: string;
  time: string;
  avatar: string;
  status: string;
}

interface MessageSystemProps {
  chat: Chat | null;
  loggedInUserMobileNumber: string; // Added prop for logged-in user's mobile number
}

const MessageSystem: React.FC<MessageSystemProps> = ({ chat, loggedInUserMobileNumber }) => {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<Chat[]>([]); // Array to store messages
  const [file, setFile] = useState<File | null>(null); // State to handle file

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      const formattedTime = now.toLocaleTimeString([], options);

      const newMessage: Chat = {
        name: loggedInUserMobileNumber, // Use mobile number as sender's name
        message: messageInput,
        time: formattedTime,
        avatar: '/assets/default-avatar.svg', // Default avatar for simplicity
        status: 'online', // Assume online status for sender
      };

      setMessages([...messages, newMessage]);
      setMessageInput(''); // Clear input after sending
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      const formattedTime = now.toLocaleTimeString([], options);

      const newMessage: Chat = {
        name: loggedInUserMobileNumber, // Use mobile number as sender's name
        message: `Sent a file: ${selectedFile.name}`,
        time: formattedTime,
        avatar: '/assets/default-avatar.svg', // Default avatar for simplicity
        status: 'online', // Assume online status for sender
      };

      setMessages([...messages, newMessage]);
      setFile(null); // Clear the file after sending
    }
  };

  if (!chat) {
    return (
      <div className="flex-grow mb-4 p-4 ml-64 mt-20 flex flex-col h-[calc(100vh-5rem)]">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-[600] mb-5 text-[#232323] flex items-center space-x-2">
            <span>Select a chat to see messages.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow mb-4 flex flex-col h-[calc(100vh-5rem)]">
      {/* Header with chat information */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-[700] text-[#232323] flex items-center space-x-2">
          <div><IoPersonCircleSharp className='w-14 h-14'/></div>
          <div>
            <span className='font-medium'>{chat.name}</span>
            <div className={`text-xs ${chat.status === 'Online' ? 'text-green-500' : 'text-gray-500'}`}>
              {chat.status}
            </div>
          </div>
        </div>
      </div>

      {/* Message area */}
      <div className="flex flex-col flex-grow overflow-y-auto bg-[#f6f6f8] p-4">
        {/* Display messages */}
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.name === loggedInUserMobileNumber ? 'justify-end' : ''} mb-4`}>
            {msg.name !== loggedInUserMobileNumber && <img src={msg.avatar} alt={msg.name} className="w-10 h-10 rounded-full mr-2" />}
            <div className={`flex flex-col ${msg.name === loggedInUserMobileNumber ? 'items-end' : ''}`}>
              <p className="bg-white p-2 w-[490px] text-xs rounded-lg shadow-md">
                {msg.message}
                <span className="text-xs text-gray-500 float-right" style={{ position: 'relative', top: '-5px', marginRight: '10px' }}>
                  {msg.time}
                </span>
              </p>
            </div>
            {msg.name === loggedInUserMobileNumber && <img src={msg.avatar} alt={msg.name} className="w-10 h-10 rounded-full ml-2" />}
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex items-center mb-4 p-4 border-t bg-[#ffffff] shadow-md">
        <input
          type="file"
          id="file-input"
          className="hidden"
          onChange={handleFileChange}
        />
        <label htmlFor="file-input">
          <img className="p-2 mr-2 bg-white w-10 h-10 cursor-pointer" src="/assets/add.svg" alt="Plus" />
        </label>
        <input
          type="text"
          value={messageInput}
          onChange={handleInputChange}
          placeholder="Type Here"
          className="text-xs font-medium text-gray-400 flex-grow p-2 border rounded-lg outline-none" 
        />
        <img
          onClick={handleSendMessage}
          className="p-2 bg-white w-14 h-14 cursor-pointer"
          src="/assets/sendbutton.svg"
          alt="Send"
        />
      </div>
    </div>
  );
};

export default MessageSystem;
