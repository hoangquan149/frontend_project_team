import icons from "../../../assets/icons";
import "./style.scss";
function Introduce() {
   return (
      <div className="introduce">
         <div className="introduce-container">
            <div className="introduce-content">
               <h1 className="introduce-title">Your hub for teamwork</h1>
               <p className="introduce-description">
                  Project discussions, important documents, free food
                  announcements: they all live tidily together in Team. With
                  your team and information in one easily searchable place,
                  collaborating online is as easy as collaborating in person.
               </p>
               <a className="intro-btn">
                  Learn More{" "}
                  <span>
                     <icons.arrowRight.ReactComponent />
                  </span>
               </a>
            </div>
         </div>
         {/* <img className="introduce-image" src={icons.dashboard.default} /> */}
      </div>
   );
}

export default Introduce;
