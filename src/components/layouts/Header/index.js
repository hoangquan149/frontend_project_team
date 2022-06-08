import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import Banner from "./Banner";

import icons from "../../../assets/icons";
import { LIST_PATH } from "../../../routes";
import styles from "./style.scss";
const cx = classNames.bind(styles);

function Header() {
   return (
      <>
         <div className="container">
            <header className={cx("header")}>
               <img
                  src={icons.logo2.default}
                  className={cx("header-logo")}
                  alt=""
               />
               <ul className={cx("menu")}>
                  <li className={cx("menu-item")}>
                     <Link to={LIST_PATH.PRODUCT}>Products</Link>
                  </li>
                  <li className={cx("menu-item")}>
                     <Link to={LIST_PATH.BLOG}>Blog</Link>
                  </li>
                  <li className={cx("menu-item")}>
                     <Link to={LIST_PATH.CONTACT}>Contact</Link>
                  </li>
                  <li className={cx("menu-item")}>
                     <Link to={""}>Login</Link>
                  </li>
                  <button className={cx("get-btn")}>Get Access</button>
               </ul>
               <label htmlFor="menu-mobile-input" className={cx("bar-btn")}>
                  <FontAwesomeIcon icon={faBars} />
               </label>
            </header>

            <input
               type={"checkbox"}
               className={cx("menu-input")}
               id="menu-mobile-input"
               hidden
            />
            <label
               htmlFor="menu-mobile-input"
               className={cx("menu-overlay")}
            ></label>
            <nav className={cx("menu-mobile")}>
               <label htmlFor="menu-mobile-input">
                  <FontAwesomeIcon icon={faClose} className={cx("close-btn")} />
               </label>
               <ul className={cx("menu-mobile-list")}>
                  <li className={cx("menu-mobile-item")}>
                     <Link to={LIST_PATH.PRODUCT}>Products</Link>
                  </li>
                  <li className={cx("menu-mobile-item")}>
                     <Link to={LIST_PATH.BLOG}>Blog</Link>
                  </li>
                  <li className={cx("menu-mobile-item")}>
                     <Link to={LIST_PATH.CONTACT}>Contact</Link>
                  </li>
                  <li className={cx("menu-mobile-item")}>
                     <Link to={""}>Login</Link>
                  </li>
               </ul>
            </nav>
         </div>
         {/* <Banner /> */}
      </>
   );
}

export default Header;
