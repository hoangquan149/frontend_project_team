import icons from "../../../assets/icons";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Footer() {
   return (
      <footer className={cx("footer")}>
         <div className="container">
            <div className={cx("footer-content")}>
               <div className={cx("footer-box")}>
                  <img src={icons.logo.default} className={cx("footer-logo")} />
                  <p className={cx("footer-des")}>
                     Collaboration platform for modern teams.
                  </p>
               </div>
               <div className={cx("footer-box")}>
                  <h5 className={cx("footer-title")}>Company</h5>
                  <ul className={cx("footer-list-item")}>
                     <li className={cx("footer-item")}>About Us</li>
                     <li className={cx("footer-item")}>Careers</li>
                     <li className={cx("footer-item")}>Support</li>
                     <li className={cx("footer-item")}>Knowledgebase</li>
                  </ul>
               </div>
               <div className={cx("footer-box")}>
                  <h5 className={cx("footer-title")}>Features</h5>
                  <ul className={cx("footer-list-item")}>
                     <li className={cx("footer-item")}>Screen Sharing</li>
                     <li className={cx("footer-item")}>
                        iOS {"&"} Android Apps
                     </li>
                     <li className={cx("footer-item")}>User Management</li>
                     <li className={cx("footer-item")}>File Sharing</li>
                  </ul>
               </div>
               <div className={cx("footer-box")}>
                  <h5 className={cx("footer-title")}>Contact Us</h5>
                  <ul className={cx("footer-list-item")}>
                     <li className={cx("footer-item")}>info@teamapp.com</li>
                     <li className={cx("footer-item")}>1-800-200-300</li>
                     <li className={cx("footer-item")}>
                        1010 Sunset Blv. Palo Alto, California
                     </li>
                  </ul>
               </div>
               <div className={cx("footer-box")}>
                  <h5 className={cx("footer-title")}>Stay up to date</h5>
                  <p className={cx("footer-des")}>
                     Subscribe to our newsletter
                  </p>
                  <input className={cx("footer-input")} placeholder="Email" />
               </div>
            </div>
            <div className={cx("footer-bottom")}>
               <p>© Copyright Team Inc.</p>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
