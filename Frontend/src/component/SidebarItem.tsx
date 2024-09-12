// src/components/SidebarItem.tsx

import React from 'react';

interface SidebarItemProps {
  name: string;
  image: string;
  className: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name, image, className }) => {
  return (
    <li className="flex items-center">
      <div className={`p-2 flex items-center ${className}`}>
        <img className="w-4 h-4 mr-2" src={image} alt={name} /> {/* Updated size here */}
        {name}
      </div>
    </li>
  );
};

export default SidebarItem;
