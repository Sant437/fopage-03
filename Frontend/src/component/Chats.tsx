// import React, { useState, useEffect } from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import axios from 'axios';
// import MessageSystem from './MessageSystem';
// import { IoPersonCircleSharp } from "react-icons/io5";
 
// interface Chat {
//   lastMessageTime:string;
//   lastMessage: string;
//   name: string;
//   message: string;
//   time: string;
//   avatar: string;
//   status: string;
//   mobile: string; // Use string for 

//   mobileNumber: string;
// }
 
// const Chats: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
//   const [chatData, setChatData] = useState<Chat[]>([]);
 
//   const currentUserMobile='9952635807';
//   // Fetch chat data from the API
//   const fetchChatData = async (userMobile:string) => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/chats',{
//         params:{
//             current_user_mobile:userMobile,
//         },
//       });
//       setChatData(response.data);
//       console.log(response.data);
      
//     } catch (error) {
//       console.error('Error fetching chat data:', error);
//     }
//   };
 
//   useEffect(() => {
//     fetchChatData(currentUserMobile);
//   }, []);
  
 
//   // Refresh chat data every 30 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       fetchChatData(currentUserMobile);
//     }, 300);
 
//     return () => clearInterval(interval);
//   }, [currentUserMobile]);
 
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };
 
//   const handleChatClick = (chat: Chat) => {
//     setSelectedChat(chat);
//   };
 
//   const filteredChats = chatData.filter(chat =>
//     chat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

 
//   return (
//     <div className='flex h-screen ml-2'>

//       <div className="flex bg-white flex-col ml-4 shadow-md w-[25%] p-4">
//         {/* Search Bar */}
//         <div className="flex justify-center mb-4 mt-3 ml-4">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Search here"
//             className="bg-[#F6F6F8] w-[95%]  p-2 rounded-lg placeholder:text-xs text-left outline-none"
//             style={{
//               height:"50px"
//             }}
//           />
//           <i className="fa fa-search relative right-10 top-3 text-green-600"></i>
//         </div>
 
//         <div className="ml-6 z-2 flex flex-col space-y-0">
//           <div className="flex gap-2.5 font-work-sans">
//             <div className="text-green-500">
//               <button className="bg-none p-2.5 border-b-2 border-green-500 cursor-pointer text-green-500 text-xs">
//                 Recent Chats
//               </button>
//             </div>
//             <button className="border-none bg-none p-2.5 cursor-pointer text-gray-400 text-xs">All Chats</button>
//           </div>
//           <div className="line text-gray-200 w-[88%]">
//             <hr className="m-0" />
//           </div>
//         </div>
 
//         {/* Scrollable Chat List */}
//         <div className="flex-1 bg-white mt-2 overflow-y-auto">
//           {filteredChats.map((chat, index) => (
//             <div
//               key={index}
//               onClick={() => handleChatClick(chat)}
//               className={`cursor-pointer ${selectedChat?.mobile === chat.mobile ? 'bg-white-100' : ''}`}
//             >
//               <div className="bg-white p-4 h-16 mt-1 rounded mb-1">
//                 <div className='flex flex-row items-center'>
//                   <div className="flex">
//                     <IoPersonCircleSharp className='w-9 h-9' />
//                   </div>
//                   <div className='flex flex-col ml-1'>
//                     <div className='flex flex-row'>
//                         <div className='text-xs flex font-semibold w-[90%]' style={{ color: "#232323" }}>
//                            {chat.name}
//                         </div>
//                         <div className='text-xs flex float-right'>{chat.lastMessageTime}</div>
//                     </div>
//                     <div className='text-xs whitespace-nowrap'>{chat.lastMessage}</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="line ml-6 text-gray-200">
//                 <hr className="m-0 w-[93%]" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex w-[70%] bg-[#f0f0f0]">
//         <MessageSystem chat={selectedChat} currentUserMobile='9952635807' />
//       </div>

//     </div>
//   );
// };
 
// export default Chats;












import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import MessageSystem from './MessageSystem';
import { IoPersonCircleSharp } from "react-icons/io5";
 
interface Chat {
  lastMessageTime:string;
  lastMessage: string;
  name: string;
  message: string;
  time: string;
  avatar: string;
  status: string;
  mobile: string; // Use string for 

  mobileNumber: string;
}
 
const Chats: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [chatData, setChatData] = useState<Chat[]>([]);
 
  const currentUserMobile='9952635807';
  // Fetch chat data from the API
  const fetchChatData = async (userMobile: string) => {
    try {
      const response = await axios.get('http://localhost:5000/api/chats', {
        params: {
          current_user_mobile: userMobile,
        },
      });
  
      // Format the time for each chat's lastMessageTime
      const formattedData = response.data.map((chat: Chat) => {
        const time = new Date(chat?.lastMessageTime);
        return {
          ...chat,
          lastMessageTime: isNaN(time.getTime())
            ? ''
            : new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'Asia/Kolkata',
              }).format(time),
        };
      });
  
      setChatData(formattedData);
    } catch (error) {
      console.error('Error fetching chat data:', error);
    }
  };
  
 
  useEffect(() => {
    fetchChatData(currentUserMobile);
  }, []);
  
 
  // Refresh chat data every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchChatData(currentUserMobile);
    }, 300);
 
    return () => clearInterval(interval);
  }, [currentUserMobile]);
 
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
 
  const handleChatClick = (chat: Chat) => {
    setSelectedChat(chat);
  };
 
  const filteredChats = chatData.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  return (
    <div className='flex h-screen ml-2'>

      <div className="flex bg-white flex-col ml-4 shadow-md w-[25%] p-4">
        {/* Search Bar */}
        <div className="flex justify-center mb-4 mt-3 ml-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search here"
            className="bg-[#F6F6F8] w-[93%]  p-2 rounded-lg placeholder:text-xs text-left outline-none"
            style={{
              height:"50px"
            }}
          />
          <i className="fa fa-search relative right-10 top-3 text-green-600"></i>
        </div>
 
        <div className="ml-6 z-2 flex flex-col space-y-0">
          <div className="flex gap-2.5 font-work-sans">
            <div className="text-green-500">
              <button className="bg-none p-2.5 border-b-2 border-green-500 cursor-pointer text-green-500 text-xs">
                Recent Chats
              </button>
            </div>
            <button className="border-none bg-none p-2.5 cursor-pointer text-gray-400 text-xs">All Chats</button>
          </div>
          <div className="line text-gray-200 w-[93%]">
            <hr className="m-0" />
          </div>
        </div>
 
        {/* Scrollable Chat List */}
        <div className="flex-1 bg-white mt-2 overflow-y-auto">
          {filteredChats.map((chat, index) => (
            <div
              key={index}
              onClick={() => handleChatClick(chat)}
              className={`cursor-pointer ${selectedChat?.mobile === chat.mobile ? 'bg-white-100' : ''}`}
            >
              <div className="bg-white p-4 h-16 mt-1 rounded mb-1">
                <div className='flex flex-row w-full justify-start'>
                  <div className="flex">
                    <IoPersonCircleSharp className='w-9 h-9' />
                  </div>
                  <div className='flex flex-col ml-1 w-[85%]'>
                    <div className='flex flex-row justify-between'>
                        <div className='text-xs flex font-semibold' style={{ color: "#232323" }}>
                           {chat.name}
                        </div>
                        <div className='text-xs flex float-right'>{chat.lastMessageTime}</div>
                    </div>
                    <div className='text-xs whitespace-nowrap'>{chat.lastMessage}</div>
                  </div>
                </div>
              </div>
              <div className="line ml-6 text-gray-200">
                <hr className="m-0 w-[93%]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-[70%] bg-[#f0f0f0]">
        <MessageSystem chat={selectedChat} currentUserMobile='9791316409' />
      </div>

    </div>
  );
};
 
export default Chats;
