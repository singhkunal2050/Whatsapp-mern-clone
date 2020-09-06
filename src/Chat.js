import React from 'react'
import './Chat.css'
import { Avatar  , IconButton} from '@material-ui/core'
import {SearchOutlined , AttachFile , MoreVert} from "@material-ui/icons"

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://randomuser.me/api/portraits/men/74.jpg" />
        <div className="chat__headerInfo">
          <h3>Sachin Sonawane</h3>
          <p>Last seen at ....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Chat
