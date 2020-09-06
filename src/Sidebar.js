import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerRight">
          <ChatIcon />
        </div>
        <div className="sidebar__headerLeft">

        </div>
      </div>
    </div>
  )
}

export default Sidebar
