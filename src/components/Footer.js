import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-links"></SocialLinks><hr/>
      <h4>&copy;{new Date().getFullYear()}&nbsp;
       portfolio developed by <span> AnneSon</span> </h4>
    </div>
  </footer>
}

export default Footer
