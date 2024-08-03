import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bg-white shadow-md overflow-x-hidden">
      <div className='flex justify-between items-center p-4 w-full max-w-7xl mx-auto'>
        <div className="flex items-center gap-3">
          <p className='text-violet-900 text-4xl font-semibold'>LIVE GDP</p>
        </div>
        <ul className="flex items-center gap-8 list-none text-gray-700 text-lg font-medium">
          <li className='relative cursor-pointer'>
            <Link to='/' className={`transition-colors duration-300 ${location.pathname === '/' ? 'text-red-700' : ''}`}>Home</Link>
            {location.pathname === '/' && <hr className="absolute bottom-0 left-0 border-none w-full h-1 rounded-lg bg-red-700"></hr>}
          </li>
          <li className='relative cursor-pointer'>
            <Link to='/contact' className={`transition-colors duration-300 ${location.pathname === '/contact' ? 'text-red-700' : ''}`}>Contact Us</Link>
            {location.pathname === '/contact' && <hr className="absolute bottom-0 left-0 border-none w-full h-1 rounded-lg bg-red-700"></hr>}
          </li>
          <li className='relative cursor-pointer'>
            <Link to='/about' className={`transition-colors duration-300 ${location.pathname === '/about' ? 'text-red-700' : ''}`}>About Us</Link>
            {location.pathname === '/about' && <hr className="absolute bottom-0 left-0 border-none w-full h-1 rounded-lg bg-red-700"></hr>}
          </li>
          <li className='relative cursor-pointer'>
            <a href='http://localhost:8501' target="_blank" className={`transition-colors duration-300 ${location.pathname === '' ? 'text-red-700' : ''}`}>Analysis</a>
          </li>
          <li className='relative cursor-pointer'>
            <a href='http://localhost:8502' target="_blank" className={`transition-colors duration-300 ${location.pathname === '' ? 'text-red-700' : ''}`}>Predict</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
