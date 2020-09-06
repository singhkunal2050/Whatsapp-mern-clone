import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src ="https://api.adorable.io/avatars/285/abott@adorable.png" />
      <div className="sidebarChat__info">
          <h2>Kunal Singh</h2>
          <p>What is upp?</p>
      </div>
    </div>
  )
}

export default SidebarChat
