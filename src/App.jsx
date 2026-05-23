import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout/layout"
import SignUp from "./Pages/Auth/SignUp"
import Login from "./Pages/Auth/Login"
import Home from "./Pages/UserSide/Home/home"
import About from "./Pages/UserSide/About/about"
import AdminLayout from "./Components/AdminLayout/adminLayout"
import Dashboard from "./Pages/AdminSide/Dashboard"
import Users from "./Pages/AdminSide/Users"
import Doctors from "./Pages/AdminSide/Doctors"
import { useEffect } from "react"

function App() {

  // Install Node 
  // Install Rreact 
  // Create Folders
  // Functions
  // Import and Export
  // Layouts
  // Routes
  // Hooks (useState , useEffectc, etc)
  // Props
  // Parent and childs
  // Roll managements

  const adminData = {
    name : "Admin",
    email : "admin@gmail.com",
    role : "admin",
    password : "Test@123",
  }

  useEffect(()=>{
    localStorage.setItem("adminData",JSON.stringify(adminData))
  },[])

  const adminToken = localStorage.getItem("adminToken")
  const userToken = localStorage.getItem("userToken")


  

  return (
    adminToken ? (
      <AdminLayout>
      <Routes>
        <Route path="/*" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/doctors" element={<Doctors />} />
      </Routes>
      </AdminLayout>
    ) : userToken ? (
      <Layout>
        <Routes>
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<About />} />
          <Route path="/services" element={<About />} />
        </Routes>
      </Layout>
    ) : (
      <Routes>
        <Route path="/*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    )
  )
}

export default App
