import React from 'react'
import SideBar from './SideBar/sideBar'
import "./adminLayout.css"

const AdminLayout = ({children}) => {
  return (
    <div className='adminLayout' >
        <div className='leftSide' >
            <SideBar />
        </div>
        <div className='rightSide' > 
            {children}
        </div>
    </div>
  )
}

export default AdminLayout