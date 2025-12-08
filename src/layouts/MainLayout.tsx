import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <ProfileCard />
          </div>
          <div className="md:col-span-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

