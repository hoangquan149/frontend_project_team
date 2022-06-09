import icons from "../../assets/icons";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import CommentItem from "../../commons/components/CommentItem";

const cx = classNames.bind(styles);

function Contact() {
   return (
      <div className="container">
         <div className={cx("contact-content")}>
            <div className={cx("contact-header")}>
               <h1 className={cx("title")}>
                  10 secret tips to managing a remote team
               </h1>
               <div className={cx("info")}>
                  <img src={icons.avt.default} />
                  <p className={cx("name")}>John Birmingham</p>
                  <div className={cx("rule")}></div>
                  <p className={cx("dateTime")}>25 December 2019</p>
               </div>
            </div>
            <div>
               <img src={icons.contact.default} className={cx("image")} />
            </div>
            <div className={cx("box-description")}>
               <p className={cx("description")}>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
               </p>
               <p className={cx("description")}>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
               </p>
               <p className={cx("description")}>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
               </p>
               <p className={cx("description")}>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
               </p>
               <p className={cx("description")}>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
               </p>
               <p className={cx("description")}>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
               </p>

               <div className={cx("comment-list")}>
                  <CommentItem
                     name="John Birmingham"
                     content=" COO at Team. Author of the upcoming book on Team
                        Management and Leadership."
                  />
               </div>

               <div className={cx("rule1")}></div>

               <div className={cx("form")}>
                  <h1>Join the conversation</h1>
                  <div className={cx("input")}>
                     <div>
                        <img src={icons.avt2.default} />
                     </div>
                     <textarea rows="4" placeholder="Comment" />
                     <button className={cx("submit-btn")}>Submit</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Contact;
