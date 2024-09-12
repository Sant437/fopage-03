import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import NavigationBar from './component/NavigationBar';
import Notifications2 from './component/Notifications2';
import Chats from './component/Chats';
import AddButton from './component/AddButton'; // Import the AddButton component

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col bg-[#FBFBFB]">
        <Header />
        
           
          <Sidebar />
          <div >
          {/* <main className="flex p-4 ml-48 mt-[4rem] overflow-x-visible"> */}
          <div className=' ml-48 mt-[4rem]'>
            <div className="flex flex-col">
            <div className='mt-8 ml-12'>
                Field Officer Management
              </div>
              <div className="flex mt-5 ml-7">
                <NavigationBar />
              </div>
              <div className="mt-3 ml-10">
                <Notifications2 />
              </div>
              <div className="mt-3 ml-11"> {/* Adjusted margin-top for spacing */}
                <AddButton /> {/* Add the AddButton component here */}
              </div>
              <div className="mt-3 ml-6">
                <Chats/>
              </div>
            </div>
          </div> 
          {/* </main> */}
          </div>

        </div>
      
    </Router>
  );
};

export default App;
