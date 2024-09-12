export interface Chat {
    id: number; // or string
    name: string;
    message: string;
    time: string;
    status?: string; // Add status if it is part of the chat data
    avatar?: string; // Add avatar if it is part of the chat data
    messages: Message[]; // Assuming Chat contains messages
  }
  
  export interface Message {
    id: number; // or string
    sender_name: string;
    message: string;
    time: string;
  }
  