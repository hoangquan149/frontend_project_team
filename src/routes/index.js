import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import DefaultLayout from "../components/layouts/DefaultLayout";
import DefaultLayoutHome from "../components/layouts/Home/DefaultLayoutHome";

export const LIST_PATH = {
   HOME: "/",
   BLOG: "/blog",
   CONTACT: "/contact",
   PRODUCT: "/product",
};

export const PUBLIC_ROUTES = [
   {
      name: "Home",
      path: LIST_PATH.HOME,
      component: Home,
      layout: DefaultLayoutHome,
   },
   {
      name: "Blog",
      path: LIST_PATH.BLOG,
      component: Blog,
      layout: DefaultLayout,
   },
   {
      name: "Contact",
      path: LIST_PATH.CONTACT,
      component: Contact,
      layout: DefaultLayout,
   },
   {
      name: "Product",
      path: LIST_PATH.PRODUCT,
      component: Product,
      layout: DefaultLayout,
   },
];
