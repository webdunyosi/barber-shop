import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const MainLayout = ({ currentStep = 1 }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 web-pattern">
      {/* Header */}
      <Header currentStep={currentStep} toggleSidebar={toggleSidebar} />
      
      {/* Main Content with Sidebar */}
      <div className="relative">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        {/* Page Content - add left margin on desktop to account for fixed sidebar */}
        <main className="container mx-auto px-4 py-8 lg:ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;