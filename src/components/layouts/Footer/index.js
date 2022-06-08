import icons from "../../../assets/icons";
import "./style.scss";
import classNames from "classnames/bind";
// const cx = classNames.bind(styles);

function Footer() {
   return (
      <footer className="footer ">
         <div className="footer-container">
            <div className="footer-content">
               <div className="footer-logo">
                  <img src={icons.logo.default} />
                  <p className="footer-des">
                     Collaboration platform for modern teams.
                  </p>
               </div>
               <div className="footer-box">
                  <h5 className="footer-title">Company</h5>
                  <ul className="footer-list-item">
                     <li className="footer-item">About Us</li>
                     <li className="footer-item">Careers</li>
                     <li className="footer-item">Support</li>
                     <li className="footer-item">Knowledgebase</li>
                  </ul>
               </div>
               <div className="footer-box">
                  <h5 className="footer-title">Features</h5>
                  <ul className="footer-list-item">
                     <li className="footer-item">Screen Sharing</li>
                     <li className="footer-item">iOS {"&"} Android Apps</li>
                     <li className="footer-item">User Management</li>
                     <li className="footer-item">File Sharing</li>
                  </ul>
               </div>
               <div className="footer-box">
                  <h5 className="footer-title">Contact Us</h5>
                  <ul className="footer-list-item">
                     <li className="footer-item">info@teamapp.com</li>
                     <li className="footer-item">1-800-200-300</li>
                     <li className="footer-item">
                        1010 Sunset Blv. Palo Alto, California
                     </li>
                  </ul>
               </div>
               <div className="footer-seen-email">
                  <h5 className="footer-title">Stay up to date</h5>
                  <p className="footer-des">Subscribe to our newsletter</p>
                  <input className="footer-input" placeholder="Email" />
               </div>
            </div>
            <div>
               <p className="footer-des">© Copyright Team Inc.</p>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
