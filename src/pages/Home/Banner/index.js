import "./style.scss";
function Banner() {
   return (
      <div className="banner">
         <div className="banner-container">
            <div className="banner-content">
               <h1 className="banner-title">
                  Instant collaboration for remote teams
               </h1>
               <p className="banner-description">
                  All-in-one place for your remote team to chat, collaborate and
                  track project progress.
               </p>
               <div className="banner-access">
                  <input className="banner-input" placeholder="Your email " />
                  <button className="banner-btn">Get Early Access</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Banner;
