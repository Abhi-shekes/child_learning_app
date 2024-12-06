import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, AlignJustify, Trophy, User } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-around items-center">
          <NavItem to="/" icon={<Home />} label="Home" isActive={isActive('/')} />
          <NavItem to="/learn" icon={<AlignJustify />} label="Learn" isActive={isActive('/learn')} />
          <NavItem to="/leaderboard" icon={<Trophy />} label="Leaders" isActive={isActive('/leaderboard')} />
          <NavItem to="/profile" icon={<User />} label="Profile" isActive={isActive('/profile')} />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon, label, isActive }: { to: string; icon: React.ReactNode; label: string; isActive: boolean }) => (
  <Link
    to={to}
    className={`flex flex-col items-center space-y-1 ${
      isActive ? 'text-blue-500' : 'text-gray-500'
    }`}
  >
    {icon}
    <span className="text-xs">{label}</span>
  </Link>
);

export default Navigation;