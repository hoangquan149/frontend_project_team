import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES } from "./routes";
import DefaultLayout from "./components/layouts/DefaultLayout";
import "./App.scss";

function App() {
   return (
      <div className="wrapper">
         <Routes>
            {PUBLIC_ROUTES.map((route, index) => {
               const Layout =
                  route.layout === null
                     ? Fragment
                     : route.layout || DefaultLayout;
               const Page = route.component ? route.component : null;
               return (
                  <Route
                     key={index}
                     name={route.name}
                     path={route.path}
                     element={
                        <Layout>
                           <Page />
                        </Layout>
                     }
                  />
               );
            })}
         </Routes>
      </div>
   );
}

export default App;
