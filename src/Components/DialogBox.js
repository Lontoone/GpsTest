import React from 'react'
import "../Css/MainStyle.css"

function DialogBox({msg}) {
  return (
    <div className="dialog-box">
        {msg}
    </div>
  )
}

export default DialogBox