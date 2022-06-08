import icons from "../../../assets/icons";
import "./style.scss";

function BrookeTwo() {
   return (
      <div className="brooke-two">
         <div className="brooke-two-container">
            <div className="brooke-two-content">
               <h1 className="brooke-two-title">
                  Scheduling that actually works
               </h1>
               <p className="brooke-two-description">
                  Integrated a Team calendar with your favorite calendar app, be
                  it Google Calendar or iCal.
               </p>
               <p className="brooke-two-description">
                  Each team member works with their favorite calendar, while all
                  the date is synced with the master calendar.
               </p>
               <a className="intro-btn">
                  Learn More{" "}
                  <span>
                     <icons.arrowRight.ReactComponent />
                  </span>
               </a>
            </div>
            <img src={icons.brookeTwo.default} />
         </div>
      </div>
   );
}

export default BrookeTwo;
