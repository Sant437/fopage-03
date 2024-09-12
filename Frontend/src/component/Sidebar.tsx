import React from 'react';
import SidebarItem from './SidebarItem';

interface SidebarItemData {
  name: string;
  image: string;
  className: string;
}

const sidebarItems: SidebarItemData[] = [
  { name: 'Overview', image: '/assets/view.svg', className: 'text-xs h-7 w-7' },
  { name: 'Field Officer', image: '/assets/fs.svg', className: 'text-xs bg-green-600 h-10 text-white w-full' },
  { name: 'Farmer', image: '/assets/farmer.svg', className: 'text-xs' },
  { name: 'Staff Management', image: '/assets/staff.svg', className: 'text-xs' },
  { name: 'Report', image: '/assets/report.svg', className: 'text-xs' },
  { name: 'Crop Management', image: '/assets/crop.svg', className: 'text-xs' },
  { name: 'Location Management', image: '/assets/loc.svg', className: 'text-xs' },
  { name: 'Regulation', image: '/assets/reg.svg', className: 'text-xs' },
  { name: 'Survey', image: '/assets/survey.svg', className: 'text-xs' },
];

const Sidebar: React.FC = () => {
  return (
    <nav className="fixed top-16 left-0 bg-neutral-100 w-48 h-440 mt-10 z-20">
      <ul className="space-y-4">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            name={item.name}
            image={item.image}
            className={item.className}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
