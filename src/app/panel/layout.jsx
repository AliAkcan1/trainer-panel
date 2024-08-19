import React from 'react'
import Navbar from '../ui/panel/Navbar/Navbar'
import Sidebar from '../ui/panel/Sidebar/Sidebar'


const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout