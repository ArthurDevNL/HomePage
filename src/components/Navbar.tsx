import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600 transition duration-300";
  };

  return (
    <nav className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-6 text-lg justify-center">
            <Link to="/" className={isActive('/')}>Home</Link>
            <span className="text-gray-300">•</span>
            <Link to="/publications" className={isActive('/publications')}>Publications</Link>
            <span className="text-gray-300">•</span>
            <Link to="/blog" className={isActive('/blog')}>Blog</Link>
        </div>
    </nav>
  );
};

export default Navbar;

