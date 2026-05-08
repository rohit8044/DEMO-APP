import { useState,useRef,useEffect } from 'react'
import './Firstdashboard.css'
import Cancel from "../assets/cancel.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, faUser, faUsers, faUserShield, faBell, faMobileAlt, 
  faFileCode, faFile, faTools, faShoppingCart, faServer, 
  faChevronRight, faChevronDown 
} from "@fortawesome/free-solid-svg-icons";

import { Link,Outlet } from 'react-router-dom'


export default function Firstdashboard() {
  const sidebarRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      open &&
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [open]);

  return (
    <>
    
      {/* Top Bar */}
      <div className="top-bar">
        <div className="menu-icon" onClick={() => setOpen(prev => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
         <div className='top-left-items'>
           <div className='top-image'> <FontAwesomeIcon icon={faUser} /> </div>
          <div className='top-image'><FontAwesomeIcon icon={faUser} /></div>
          <div className='top-image'><FontAwesomeIcon icon={faUser} /></div>
         </div>
      </div>
     

      {/* Sidebar */}
      <div ref={sidebarRef} className={`sidebar ${open ? "active" : "close"}`}>

        {/* Heading */}
        <div className="heading-box">
          <h1 className="heading-dashboard">X REG</h1>
          <img 
            onClick={() => setOpen(false)} 
            className="cancel-button" 
            src={Cancel} 
            alt="cancel"
          />
        </div>
        
        {/* Menu List */}
        <div className="menu-list">

          {/* Home */}
          <div className={`slider-items ${openMenu === "home" ? "open" : ""}`}>
            <div className="menu-title" onClick={() => toggleMenu("home")}>
              <span>
                <FontAwesomeIcon icon={faHome} /> Home 
              </span>

              <span className="arrowkey">
                <FontAwesomeIcon icon={openMenu === "home" ? faChevronDown : faChevronRight} />
              </span>
            </div>

            {openMenu === "home" && (
              <ul className="submenu">
                 <Link to="/" onClick={closeSidebar}> <li>dashboard</li></Link>
                 
              </ul>
            )}
           
          </div>

             {/* User Account */}
          <div className={`slider-items ${openMenu === "Account" ? "open" : ""}`}>
            <div className="menu-title" onClick={() => toggleMenu("Account")}>
              <span>
                <FontAwesomeIcon icon={faUser} /> Account
              </span>

              <span className="arrowkey">
                <FontAwesomeIcon icon={openMenu === "Account" ? faChevronDown : faChevronRight} />
              </span>
            </div>

            {openMenu === "Account" && (
              <ul className="submenu">
               
                 <Link to="/login" onClick={closeSidebar}> <li>Login</li></Link>
                <Link to="/register"onClick={closeSidebar}> <li>Register</li></Link>
                
              </ul>
            )}
          </div>

          {/* User Management */}
          <div className={`slider-items ${openMenu === "user" ? "open" : ""}`}>
            <div className="menu-title" onClick={() => toggleMenu("user")}>
              <span>
                <FontAwesomeIcon icon={faUser} /> User Management
              </span>

              <span className="arrowkey">
                <FontAwesomeIcon icon={openMenu === "user" ? faChevronDown : faChevronRight} />
              </span>
            </div>

            {openMenu === "user" && (
              <ul className="submenu">
                 <Link to="/Add_User"onClick={closeSidebar}> <li>Add User</li></Link>
                 <Link to="/Add_Day"onClick={closeSidebar}> <li>Add Days</li></Link>
                 <Link to="/Manage_Users"onClick={closeSidebar}> <li>Manage Users</li></Link>
                 <Link to="/Manage_UD_Users"onClick={closeSidebar}> <li>Manage UD Users</li></Link>
                 <Link to="/Manage_Reg_Users"onClick={closeSidebar}> <li>Manage Reg Users</li></Link>
                 <Link to="/Manage_Apk_Users"onClick={closeSidebar}> <li>Manage Apk Users</li></Link>
              </ul>
            )}
          </div>

          {/* Reseller Management */}
          <div className={`slider-items ${openMenu === "reseller" ? "open" : ""}`}>
            <div className="menu-title" onClick={() => toggleMenu("reseller")}>
              <span>
                <FontAwesomeIcon icon={faUsers} /> Reseller Management
              </span>

              <span className="arrowkey">
                <FontAwesomeIcon icon={openMenu === "reseller" ? faChevronDown : faChevronRight} />
              </span>
            </div>

            {openMenu === "reseller" && (
              <ul className="submenu">

                 <Link to="/Add_Reseller"onClick={closeSidebar}> <li>Add Reseller</li></Link>
                 <Link to="/Add_Credits"onClick={closeSidebar}> <li>Add Credits</li></Link>
                 <Link to="/Manage_Reseller"onClick={closeSidebar}> <li>Manage Resellers</li></Link>
    
              </ul>
            )}
          </div>

          {/* Reseller Admin */}
          <div className={`slider-items ${openMenu === "admin" ? "open" : ""}`}>
            <div className="menu-title" onClick={() => toggleMenu("admin")}>
              <span>
                 <FontAwesomeIcon icon={faUserShield} /> Admin Management
              </span>

              <span className="arrowkey">
                <FontAwesomeIcon icon={openMenu === "admin" ? faChevronDown : faChevronRight} />
              </span>
            </div>

            {openMenu === "admin" && (
              <ul className="submenu">
                
                 <Link to="/Add_Admin"onClick={closeSidebar}> <li>Add Admin</li></Link>
                 <Link to="/Manage_Admin"onClick={closeSidebar}> <li>Manage Admin</li></Link>
              </ul>
            )}
          </div>

           {/* Reseller Notification */}
          <div className={`slider-items ${openMenu === "notif" ? "open" : ""}`}>
            <div className="menu-title" onClick={() => toggleMenu("notif")}>
              <span>
                 <FontAwesomeIcon icon={faBell} /> Notif Management
              </span>

              <span className="arrowkey">
                <FontAwesomeIcon icon={openMenu === "notif" ? faChevronDown : faChevronRight} />
              </span>
            </div>

            {openMenu === "notif" && (
              <ul className="submenu">
                 <Link to="/Add_Notif"onClick={closeSidebar}> <li>Add Notif</li></Link>
                 <Link to="/Manage_Notif"onClick={closeSidebar}> <li>Manage Notif</li></Link>
              </ul>
            )}
          </div>
        {/* Reseller Apk */}
          <div className={`slider-items ${openMenu === "Apk" ? "open" : ""}`}>
            <div className="menu-title" onClick={() => toggleMenu("Apk")}>
              <span>
                   <FontAwesomeIcon icon={faMobileAlt} /> Apk Management
              </span>

              <span className="arrowkey">
                <FontAwesomeIcon icon={openMenu === "Apk" ? faChevronDown : faChevronRight} />
              </span>
            </div>

            {openMenu === "Apk" && (
              <ul className="submenu">

                 <Link to="/Add_Apk"onClick={closeSidebar}> <li>Add Apk</li></Link>
                 <Link to="/Manage_Apk"onClick={closeSidebar}> <li>Manage Apk</li></Link>
                
              </ul>
            )}
          </div>

           {/* Reseller Script */}
          <div className={`slider-items ${openMenu === "Script" ? "open" : ""}`}>
            <div className="menu-title" onClick={() => toggleMenu("Script")}>
              <span>
                    <FontAwesomeIcon icon={faFileCode} /> Script Management
              </span>

              <span className="arrowkey">
                <FontAwesomeIcon icon={openMenu === "Script" ? faChevronDown : faChevronRight} />
              </span>
            </div>

            {openMenu === "Script" && (
              <ul className="submenu">

                <Link to="/Add_Script"onClick={closeSidebar}> <li>Add Script</li></Link>
                 <Link to="/Manage_Script"onClick={closeSidebar}> <li>Manage Scrpit</li></Link>
               
              </ul>
            )}
          </div>
           {/* Reseller Lib */}
          <div className={`slider-items ${openMenu === "Lib" ? "open" : ""}`}>
            <div className="menu-title" onClick={() => toggleMenu("Lib")}>
              <span>
                  <FontAwesomeIcon icon={faFile} /> Lib Management
              </span>

              <span className="arrowkey">
                <FontAwesomeIcon icon={openMenu === "Lib" ? faChevronDown : faChevronRight} />
              </span>
            </div>

            {openMenu === "Lib" && (
              <ul className="submenu">

                 <Link to="/Add_Lib"onClick={closeSidebar}> <li>Add Lib</li></Link>
                 <Link to="/Manage_Lib"onClick={closeSidebar}> <li>Manage Lib</li></Link>
        
              </ul>
            )}
          </div>

          {/* Reseller Mod */}
          <div className={`slider-items ${openMenu === "Mod" ? "open" : ""}`}>
            <div className="menu-title" onClick={() => toggleMenu("Mod")}>
              <span>
                  <FontAwesomeIcon icon={faTools} /> Mod Management
              </span>

              <span className="arrowkey">
                <FontAwesomeIcon icon={openMenu === "Mod" ? faChevronDown : faChevronRight} />
              </span>
            </div>

            {openMenu === "Mod" && (
              <ul className="submenu">

                 <Link to="/"onClick={closeSidebar}> <li>Mod Name</li></Link>
                 <Link to="/"onClick={closeSidebar}> <li>Mod Safe or Not</li></Link>
                 <Link to="/"onClick={closeSidebar}> <li>Mod Status</li></Link>
                 <Link to="/"onClick={closeSidebar}> <li>Mod Fuctions</li></Link>
                 <Link to="/"onClick={closeSidebar}> <li>Update Mod</li></Link>
                 <Link to="/"onClick={closeSidebar}> <li>Lib Online</li></Link>
                
              </ul>
            )}
          </div>

        {/* Reseller Products */}
          <div className={`slider-items ${openMenu === "Products" ? "open" : ""}`}>
            <div className="menu-title" onClick={() => toggleMenu("Products")}>
              <span>
                 <FontAwesomeIcon icon={faShoppingCart} /> Products Management
              </span>

              <span className="arrowkey">
                <FontAwesomeIcon icon={openMenu === "Products" ? faChevronDown : faChevronRight} />
              </span>
            </div>

            {openMenu === "Products" && (
              <ul className="submenu">

                <Link to="/"onClick={closeSidebar}> <li>Add Products</li></Link>
                 <Link to="/"onClick={closeSidebar}> <li>Manage Products</li></Link>
                 <Link to="/"onClick={closeSidebar}> <li>Manage Orders</li></Link>
               
              </ul>
            )}
          </div>

          {/* Reseller Server */}
          <div className={`slider-items ${openMenu === "Server" ? "open" : ""}`}>
            <div className="menu-title" onClick={() => toggleMenu("Server")}>
              <span>
                 <FontAwesomeIcon icon={faServer} /> Server Management
              </span>

              <span className="arrowkey">
                <FontAwesomeIcon icon={openMenu === "Server" ? faChevronDown : faChevronRight} />
              </span>
            </div>

            {openMenu === "Server" && (
              <ul className="submenu">

                 <Link to="/"onClick={closeSidebar}> <li>Server Name</li></Link>
                 <Link to="/"onClick={closeSidebar}> <li>Server Status</li></Link>
               
              </ul>
            )}
          </div>

        </div> {/* menu-list */}
            
      </div> {/* sidebar */}

            {/* Main Page Content */}
            <div className="main-content">
           <Outlet />
           
      </div>
    </>
  )
}