import icons from "../../../assets/icons";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function CommentItem({ name, content, avt, write = "written by" }) {
   return (
      <div className={cx("comment")}>
         <div>
            <img src={avt || icons.avt2.default} />
         </div>
         <div className={cx("info-comment")}>
            <h2>{write}</h2>
            <h1 className={cx("fullName")}>{name}</h1>
            <p>{content}</p>
         </div>
      </div>
   );
}

export default CommentItem;
