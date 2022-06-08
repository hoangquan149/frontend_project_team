import PeopleItem from "../../../components/commons/components/PeopleItem";
import "./style.scss";

function People() {
   return (
      <div className="people">
         <div className="people-container">
            <div className="people-header">
               <h1 className="people-header-title">
                  What people say about Team
               </h1>
               <div className="people-list">
                  <PeopleItem />
                  <PeopleItem />
               </div>
            </div>
         </div>
      </div>
   );
}

export default People;
