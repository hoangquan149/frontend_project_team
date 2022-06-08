import styles from "./style.module.scss";
import classNames from "classnames/bind";
import icons from "../../../../assets/icons";
const cx = classNames.bind(styles);

function PeopleItem() {
   return (
      <div className={cx("wrapper")}>
         <img className={cx("star")} src={icons.stars.default} />
         <p className={cx("description")}>
            Faucibus. At penatibus ad cubilia risus senectus varius sociis
            suspendisse integer suspendisse turpis senectus pellentesque nibh
            iaculis.
         </p>
         <div className={cx("content")}>
            <img className={cx("avatar")} src={icons.avatar.default} />
            <div className={cx("info")}>
               <p className={cx("name")}>Amy Goldberg</p>
               <span className={cx("username")}>COO at Slack</span>
            </div>
         </div>
      </div>
   );
}

export default PeopleItem;
