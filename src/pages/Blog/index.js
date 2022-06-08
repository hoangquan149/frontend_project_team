import classNames from "classnames/bind";
import styles from "./style.module.scss";
import BlogItem from "../../components/commons/components/BlogItem";
const cx = classNames.bind(styles);

function Blog() {
   return (
      <div className="container">
         <div className={cx("blog-header")}>
            <h1 className={cx("blog-title")}>Blog</h1>
            <p className={cx("blog-sdescription")}>
               Our latest web design tips, tricks, insights, and resources, hot
               off the presses.
            </p>
         </div>
         <div className={cx("blog-list")}>
            <div className={cx("blog-item")}>
               <BlogItem />
            </div>
            <div className={cx("blog-item")}>
               <BlogItem />
            </div>
            <div className={cx("blog-item")}>
               <BlogItem />
            </div>
         </div>
         {/* <div className={"row"}>
            <div className={"col-lg-4 col-md-6 col-xs-12"}>
               <BlogItem />
            </div>
            <div className={"col-lg-4 col-md-6 col-xs-12"}>
               <BlogItem />
            </div>
            <div className={"col-lg-4 col-md-6 col-xs-12"}>
               <BlogItem />
            </div>
         </div> */}
      </div>
   );
}

export default Blog;
