import React, { useState, useEffect } from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";
import axios from 'axios';
 
interface Chat {
  name: string;
  message: string;
  time: string;
  avatar: string;
  status: string;
  mobile: string;
}
 
interface ChatListProps {
  onChatSelect: (chat: Chat) => void;
}
 
const ChatList: React.FC<ChatListProps> = ({ onChatSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [chatData, setChatData] = useState<Chat[]>([]);
 
  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chats');
        setChatData(response.data);
      } catch (error) {
        console.error('Error fetching chat data:', error);
      }
    };
 
    fetchChatData();
  }, []);
 
  const filteredChats = chatData.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
<div className="flex flex-col w-1/3 h-full shadow-md">
<div className="flex justify-center mb-4 mt-3">
<input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search here"
          className="w-[85%] p-2 rounded-lg placeholder:text-xs text-left outline-none"
        />
<i className="fa fa-search absolute right-10 top-3 text-gray-400"></i>
</div>
<div className="ml-6 z-2 flex flex-col mr-[30%] space-y-0">
<div className="flex gap-2.5 font-work-sans">
<button className="bg-none p-2.5 border-b-2 border-green-500 cursor-pointer text-green-500 text-xs">
            Recent Chats
</button>
<button className="border-none bg-none p-2.5 cursor-pointer text-gray-400 text-xs">All Chats</button>
</div>
<div className="line text-gray-200">
<hr className="m-0 w-[93%]" />
</div>
</div>
<div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat, index) => (
<div
            key={index}
            onClick={() => onChatSelect(chat)}
            className="cursor-pointer bg-white p-4 h-16 mt-1 rounded mb-1"
>
<div className="flex flex-row items-center">
<IoPersonCircleSharp className='w-9 h-9' />
<div className="flex flex-col ml-1">
<div className='text-xs font-semibold' style={{ color: "#232323" }}>{chat.name}</div>
<div className='text-xs whitespace-nowrap'>{chat.message}</div>
</div>
<div className='text-xs ml-6'>{chat.time}</div>
</div>
<div className="line ml-6 text-gray-200">
<hr className="m-0 w-[93%]" />
</div>
</div>
        ))}
</div>
</div>
  );
};
 
export default ChatList;