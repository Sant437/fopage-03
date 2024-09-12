import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";
import { io, Socket } from 'socket.io-client';

interface Chat {
  name: string;
  avatar: string;
  status: string;
  mobileNumber: string;
}

interface Message {
  sender_mobile: string;
  receiver_mobile: string;
  sender_name: string;
  receiver_name: string;
  message: string;
  time: string; // Time should be a string
}

interface MessageSystemProps {
  chat: Chat | null;
  currentUserMobile: string;
}

const MessageSystem: React.FC<MessageSystemProps> = ({ chat, currentUserMobile }) => {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const socketio = useRef<Socket | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(e.target.value);
  };

  useEffect(() => {
    if (chat) {
      const fetchMessages = async () => {
        try {
          const response = await fetch(`/api/messages?sender_mobile=${currentUserMobile}&receiver_mobile=${chat.mobileNumber}`);
          let data = await response.json();

          // Convert time to string if it's a Date object
          data = data.map((message: Message) => {
            const time = new Date(message.time);
            return {
              ...message,
              time: isNaN(time.getTime()) ? '' : new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'Asia/Kolkata',
              }).format(time),
            };
          });

          setMessages(data);
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      };

      fetchMessages();
    }
  }, [chat, currentUserMobile,handleInputChange]);

  useEffect(() => {
    if (chat) {
      socketio.current = io('http://localhost:5000');

      socketio.current.on('receiveMessage', (newMessage: any) => {
        const time = new Date(newMessage?.time);
        const formattedMessage = {
          ...newMessage,
          time: isNaN(time.getTime()) ? '' : new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Asia/Kolkata',
          }).format(time),
        };

        setMessages(prevMessages => [...prevMessages, formattedMessage]);
      });

      return () => {
        socketio.current?.disconnect();
      };
    }
  }, [chat]);

 

  const handleSendMessage = async () => {
    if (messageInput.trim()) {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      };
      const formattedTime = now.toLocaleTimeString('en-US', options);

      const newMessage: Message = {
        sender_mobile: currentUserMobile,
        receiver_mobile: chat?.mobileNumber || '',
        sender_name: 'San',
        receiver_name: chat?.name || 'User',
        message: messageInput,
        time: formattedTime, // Ensure time is a string
      };

      try {
        socketio.current?.emit('sendMessage', newMessage);

        await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newMessage),
        });

        setMessages([...messages, newMessage]);
        setMessageInput('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      };
      const formattedTime = now.toLocaleTimeString('en-US', options);

      const newMessage: Message = {
        sender_mobile: currentUserMobile,
        receiver_mobile: chat?.mobileNumber || '',
        sender_name: 'San',
        receiver_name: chat?.name || 'User',
        message: `Sent a file: ${selectedFile.name}`,
        time: formattedTime, // Ensure time is a string
      };

      try {
        socketio.current?.emit('sendMessage', newMessage);

        await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newMessage),
        });

        setMessages([...messages, newMessage]);
        setFile(null);
      } catch (error) {
        console.error('Error sending file message:', error);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!chat) {
    return (
      <div className=" mb-4 p-4 ml-64 mt-20 flex flex-col h-530">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-[600] mb-5 text-[#232323] flex items-center space-x-2">
            <span>Select a chat to see messages.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center bg-white">
        <div className="text-xl font-[700] text-[#232323] flex items-center space-x-2">
          <IoPersonCircleSharp className='w-14 h-14 ml-7 mt-3 mb-3' />
          <div>
            <span className='font-medium'>{chat.name}</span>
            <div className='text-xs text-green-500'>
              Online
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow overflow-y-auto bg-[#f6f6f8]">
        {messages.map((msg, index) => (
          <div key={index} className={`flex px-10 ${msg.sender_mobile === currentUserMobile ? 'justify-end' : 'justify-start'} mt-4 mb-4 `}>
            {msg.sender_mobile !== currentUserMobile && (
              <img
                src={chat.avatar || '/assets/vijay.svg'}
                alt={msg.sender_name}
                className="w-8 h-8 mt-5 rounded-full mr-2"
              />
            )}
            <div className={`flex flex-col ${msg.sender_mobile === currentUserMobile ? 'items-end' : 'items-start'}`}>
            <p className={`p-2 break-words hypens-auto max-w-[350px] text-xs rounded-lg shadow-md ${msg.sender_mobile === currentUserMobile ? 'bg-[#f1fff6]' : 'bg-white'}`}>
                {msg.message}
                <span className="text-xs text-gray-500 float-right ml-52 mt-2">
                  {msg.time} {/* Ensure time is a string */}
                </span>
              </p>
            </div>
            {msg.sender_mobile === currentUserMobile && (
              <img
                src={chat.avatar || '/assets/default_avatar.png'}
                alt={msg.sender_name}
                className="w-8 h-8 mt-5 rounded-full ml-2"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center p-4 border-t bg-[#ffffff]">
        <input
          type="file"
          id="file-input"
          className="hidden"
          onChange={handleFileChange}
        />
        <label htmlFor="file-input">
          <img className="p-2 mr-2 bg-white w-10 h-10 cursor-pointer" src="/assets/add.svg" alt="Add" />
        </label>
        <input
          type="text"
          value={messageInput}
          onChange={handleInputChange}
          placeholder="Type Here"
          onKeyDown={handleKeyDown}
          className="text-xs font-medium text-gray-400 flex-grow p-2 border rounded-lg outline-none"
        />
        <img
          onClick={handleSendMessage}
          className="w-10 h-10 cursor-pointer"
          src="/assets/sendbutton.svg"
          alt="Send"
        />
      </div>
    </div>
  );
};

export default MessageSystem;
