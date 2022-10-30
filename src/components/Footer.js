import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <div className="main-footer">
      <div className="containers">
        
        <hr/>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Software Engineering Club | Made with ❤️ by SEC
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
