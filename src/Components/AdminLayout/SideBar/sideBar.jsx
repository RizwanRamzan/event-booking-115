import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

    const navigate = useNavigate()

    const logout =()=>{
      localStorage.removeItem("adminToken")
      window.location.pathname = "/login"
    }

    const items = [
        { key: '1',  label: 'Dashboard',onClick:()=>navigate("/admin/dashboard") },
        { key: '2',  label: 'Users' ,onClick:()=>navigate("/admin/users")},
        { key: '3',  label: 'Doctors',onClick:()=>navigate("/admin/doctors") },
        { key: '4',  label: 'Logout',onClick:()=> logout()},
      ];

  return (
    
    <Menu
    style={{width:"100%",height:"100%"}}
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        items={items}
      />
  )
}

export default SideBar