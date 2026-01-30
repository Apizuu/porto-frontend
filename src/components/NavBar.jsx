// NavBar.jsx

import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import TelkomLogo2 from '../assets/Telkom_Logo2.png';
import UserIcon from '../assets/user-alt-4.svg';
import ExitIcon from '../assets/exit.svg';
import { ChevronDown } from "lucide-react";
import { useUI } from '../contexts/UIContext';
import { useAuth } from '../contexts/AuthContext';
import '../styles/NavBarStyle.css';

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { openSignOut } = useUI();
  const { user } = useAuth();
  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileClick = () => {
    console.log("Navigasi ke Profile");
    setIsDropdownOpen(false);
    navigate('/profile');
  };

  const handleLogoutClick = () => {
    console.log("Membuka modal Sign Out");
    setIsDropdownOpen(false);
    openSignOut();
  };

  // =================================================
  // TUTUP DROPDOWN KETIKA KLIK DI LUAR
  // =================================================
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // =================================================
  // DETEKSI SCROLL UNTUK NAVBAR FULL WIDTH
  // =================================================
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  // =================================================
  // MENU ROLE
  // =================================================
  const renderMenu = () => {
    if (!user) return null;

    switch (user.role) {
      case 'user':
        return null;

      case 'management':
        return null;

      case 'admin':
        return (
          <ul className="navbar-menu">
            <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>Dashboard</NavLink></li>
            <li><NavLink to="/user-management" className={({ isActive }) => (isActive ? 'active' : '')}>User Management</NavLink></li>
            <li><NavLink to="/audit-trail" className={({ isActive }) => (isActive ? 'active' : '')}>Audit Trail</NavLink></li>
            <li><NavLink to="/rpa-validation" className={({ isActive }) => (isActive ? 'active' : '')}>RPA Validation</NavLink></li>
          </ul>
        );

      default:
        return null;
    }
  };


  // =================================================
  // RENDER NAVBAR
  // =================================================
  return (
    <div className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      
      <div className="navbar-logo-area">
        <img src={TelkomLogo2} alt="Telkom Indonesia Logo" className="navbar-logo" />
      </div>

      {renderMenu()}

      <div className="navbar-profile" ref={dropdownRef}>
        <button className="profile-button" onClick={toggleDropdown} aria-expanded={isDropdownOpen}>
          <div className="profile-pic-wrapper">
            <div className="profile-placeholder"></div>
          </div>
          <ChevronDown className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={handleProfileClick} className="dropdown-item">
              <img src={UserIcon} alt="Profile" className="dropdown-icon-image" />
              <span>Profile</span>
            </button>
            <button onClick={handleLogoutClick} className="dropdown-item logout">
              <img src={ExitIcon} alt="Logout" className="dropdown-icon-image" />
              <span>Sign Out</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

export default NavBar;