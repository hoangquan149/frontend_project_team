import icons from "../../../assets/icons";
import "./style.scss";

function BrookeOne() {
   return (
      <div className="brooke">
         <div className="brooke-container">
            <img src={icons.brookeOne.default} className="brooke-image" />
            <div className="brooke-content">
               <h1 className="brooke-title">Simplest task management</h1>
               <p className="brooke-description">
                  Task management with Team is as simple as it gets. No
                  complicated layout and need for user training. Your team
                  members will intuitively know how to navigate the platform.
                  It’s so simple, a baby could do it!
               </p>
               <a className="intro-btn">
                  Learn More{" "}
                  <span>
                     <icons.arrowRight.ReactComponent />
                  </span>
               </a>
            </div>
         </div>
      </div>
   );
}

export default BrookeOne;
