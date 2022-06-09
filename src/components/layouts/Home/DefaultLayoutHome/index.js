// import Header from "../Header";
import Header from "../Header";
import Footer from "../../Footer";

function DefaultLayoutHome({ children }) {
   return (
      <div>
         <Header></Header>
         <div className="wrapper">{children}</div>
         <Footer></Footer>
      </div>
   );
}

export default DefaultLayoutHome;
