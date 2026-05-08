// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Firstdashboard from "../Componets/Firstdashboard"
import Dashboard from "../Sidebar_items/Home/Dashboard"
import Login from "../Sidebar_items/Accounts/Login"
import Register from "../Sidebar_items/Accounts/Register"
import Add_Users from "../Sidebar_items/User_Management/Add_Users"
import Add_Day from "../Sidebar_items/User_Management/Add_Days"
import Manage_Users from "../Sidebar_items/User_Management/Manage_Users"
import Manage_UD_Users from "../Sidebar_items/User_Management/Manage_UD_Users"
import Manage_Reg_Users from "../Sidebar_items/User_Management/Manage_Reg_Users"
import Manage_Apk_Users from "../Sidebar_items/User_Management/Manage_Apk_Users"
import Add_Reseller from "../Sidebar_items/Reseller_Management/Add_Reseller"
import Add_Credits from "../Sidebar_items/Reseller_Management/Add_Credits"
import Manage_Resellers from "../Sidebar_items/Reseller_Management/Manage_Resellers"
import Add_Admin from "../Sidebar_items/Admin_Management/Add_Admin"
import Manage_Admin from "../Sidebar_items/Admin_Management/Manage_Admin"
import Add_Notif from "../Sidebar_items/Notif_Management/Add_Notif"
import Manage_Notif from "../Sidebar_items/Notif_Management/Manage_Notif"
import Add_Apk from "../Sidebar_items/Apk_Management/Add_Apk"
import Manage_Apk from "../Sidebar_items/Apk_Management/Manage_Apk"
import Add_Script from "../Sidebar_items/Script_Management/Add_Script"
import Manage_Script from "../Sidebar_items/Script_Management/Manage_Script"
import Add_Lib from "../Sidebar_items/Lib_Management/Add_Lib"
import Manage_Lib from "../Sidebar_items/Lib_Management/Manage_Lib"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Firstdashboard />}>
          //Dashboard items
          <Route index element={<Dashboard />} />

            {/* User Account */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* User Management */} 
          <Route path="Add_User" element={<Add_Users />} />
          <Route path="Add_Day" element={<Add_Day />} />
          <Route path="Manage_Users" element={<Manage_Users />} />
          <Route path="Manage_UD_Users" element={<Manage_UD_Users />} />
          <Route path="Manage_Reg_Users" element={<Manage_Reg_Users />} />
          <Route path="Manage_Apk_Users" element={<Manage_Apk_Users />} />

          {/* Reseller Management */}
          <Route path="Add_Reseller" element={<Add_Reseller />} />
          <Route path="Add_Credits" element={<Add_Credits />} />
          <Route path="Manage_Reseller" element={<Manage_Resellers />} />
          
           {/* Reseller Admin */}
           <Route path="Add_Admin" element={<Add_Admin />} />
           <Route path="Manage_Admin" element={<Manage_Admin />} />

           {/* Reseller Notification */}
           <Route path="Add_Notif" element={<Add_Notif />} />
           <Route path="Manage_Notif" element={<Manage_Notif />} />

             {/* Reseller Apk */}
           <Route path="Add_Apk" element={<Add_Apk />} />
           <Route path="Manage_Apk" element={<Manage_Apk />} />

            {/* Reseller Script */}
            <Route path="Add_Script" element={<Add_Script />} />
            <Route path="Manage_Script" element={<Manage_Script />} />

             {/* Reseller Lib */}
           <Route path="Add_Lib" element={<Add_Lib />} />
           <Route path="Manage_Lib" element={<Manage_Lib />} />
        

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App