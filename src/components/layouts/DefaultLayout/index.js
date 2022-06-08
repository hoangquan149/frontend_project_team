// import Header from "../Header";
import Header from "../Home/Header";
import Footer from "../Footer";

function DefaultLayout({ children }) {
   return (
      <div>
         <Header></Header>
         <div className="wrapper">{children}</div>
         <Footer></Footer>
      </div>
   );
}

export default DefaultLayout;
