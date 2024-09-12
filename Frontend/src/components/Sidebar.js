import React from 'react';

// Array of sidebar items with SVG paths and conditional full-width
const sidebarItems = [
  { name: 'Overview', image: '/assets/view.svg', className: 'text-xs h-8 w-8' },
  { name: 'Field Officer', image: '/assets/fs.svg', className: 'text-xs bg-green-600 text-white w-full' },
  { name: 'Farmer', image: '/assets/farmer.svg', className: 'text-xs' },
  { name: 'Staff Management', image: '/assets/staff.svg', className: 'text-xs' },
  { name: 'Report', image: '/assets/report.svg', className: 'text-xs' },
  { name: 'Crop Management', image: '/assets/crop.svg', className: 'text-xs' },
  { name: 'Location Management', image: '/assets/loc.svg', className: 'text-xs' },
  { name: 'Regulation', image: '/assets/reg.svg', className: 'text-xs' },
  { name: 'Survey', image: '/assets/survey.svg', className: 'text-xs' },
];

const Sidebar = () => {
  return (
    // <aside className="mt-[93px] text-black h-[130px] md:h-[450px] p-4">
      <nav className="mt-[93px] bg-neutral-100 h-[460px] w-48">
        <ul className="space-y-4">
          {sidebarItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <div className={`p-2 flex items-center ${item.className}`}>
                {/* Render the SVG image */}
                <img className="w-5 h-5 mr-2" src={item.image} alt={item.name} />
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    // </aside>
  );
};

export default Sidebar;
