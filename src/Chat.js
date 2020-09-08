import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic } from "@material-ui/icons"

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <IconButton>
          <Avatar src="https://randomuser.me/api/portraits/men/74.jpg" />
        </IconButton>

        <div className="chat__headerInfo">
          <h3>Om Prakash</h3>
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

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">You </span>
          Thus is the message
          <span className="chat__timestamp">
            {Date().toString().substr(19, 6)} PM
          </span>
        </p>

        <p className="chat__message  chat__receiver">
          <span className="chat__name">Kunal Singh </span>
          Thus is the message
          <span className="chat__timestamp">
            {Date().toString().substr(19, 6)} PM
          </span>
        </p>

        <p className="chat__message">
          <span className="chat__name">You </span>
          Thus is the message
          <span className="chat__timestamp">
            {Date().toString().substr(19, 6)} PM
          </span>
        </p>


        <p className="chat__message  chat__receiver">
          <span className="chat__name">Kunal Singh </span>
          Thus is the message
          <span className="chat__timestamp">
            {Date().toString().substr(19, 6)} PM
          </span>
        </p>

        <p className="chat__message">
          <span className="chat__name">You </span>
          Thus is the message
          <span className="chat__timestamp">
            {Date().toString().substr(19, 6)} PM
          </span>
        </p>


        <p className="chat__message  chat__receiver">
          <span className="chat__name">Kunal Singh </span>
          Thus is the message
          <span className="chat__timestamp">
            {Date().toString().substr(19, 6)} PM
          </span>
        </p>

        <p className="chat__message">
          <span className="chat__name">You </span>
          Thus is the message
          <span className="chat__timestamp">
            {Date().toString().substr(19, 6)} PM
          </span>
        </p>


        <p className="chat__message  chat__receiver">
          <span className="chat__name">Kunal Singh </span>
          Thus is the message
          <span className="chat__timestamp">
            {Date().toString().substr(19, 6)} PM
          </span>
        </p>

        <p className="chat__message">
          <span className="chat__name">You </span>
          Thus is the message
          <span className="chat__timestamp">
            {Date().toString().substr(19, 6)} PM
          </span>
        </p>

      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input placeholder="Type a message..." type="text" />
          <button onClick={null} type="submit"> Send Message</button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>

      </div>

    </div>
  )
}

export default Chat
