import icons from "../../../assets/icons";
import MessageItem from "../../../commons/components/MessageItem";
import "./style.scss";

const images = [icons.send.default, icons.user1.default, icons.user2.default];

function BrookeOne() {
   return (
      <div className="brooke">
         <div className="brooke-container">
            <div className="brooke-image">
               <div className="brooke-image-content">
                  <MessageItem
                     time="11:00 AM - 11:30 AM"
                     content="Hey you guys we need to do this and that too ✌️"
                     listActions={images}
                     pin="10 attachements"
                  />
                  <MessageItem
                     time="11:00 AM - 11:30 AM"
                     content="Website for the Product"
                     listActions={images}
                  />
               </div>
            </div>
            {/* <img src={icons.brookeOne.default} className="brooke-image" /> */}
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
