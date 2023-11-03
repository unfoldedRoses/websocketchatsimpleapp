import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header>
      <nav className="bg-black flex justify-between p-4">
        <a href="/" className="text-xl font-bold text-white">
          <span className="text-orange">Leaflet</span>Blogs
        </a>
        <div className="md:flex gap-6 ml-auto hidden">
          {navItems.map((item, index) => (
            <NavLink key={index} to={item.path} className="text-white">
              {item.link}
            </NavLink>
          ))}
        </div>
        <button  className="text-xl font-bold text-white hover:text-blue-500">Login</button>
      </nav>
    </header>
  );
};

export default Navbar;
