import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface SingleColumnLayoutProps {
  children: ReactNode;
}

const SingleColumnLayout: React.FC<SingleColumnLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
};

export default SingleColumnLayout;

