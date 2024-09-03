import styles from "../Tweet/tweetcard.module.css"
import { VscAccount } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { LuArrowDownUp } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa6";
import { BsSave2 } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";


interface Tweet{
    usernick:string;
    username:string;
    createdTime:string;
    content:string;
    commentsCount:string;
    rtTweetsCount:string;
    favCount:string;
    viewsCount:string;
}

const TweetCard : React.FC<Tweet> = ({usernick,username,createdTime,content,commentsCount,rtTweetsCount,favCount,viewsCount})=> {
    return (
        <div className={styles.hover_div}>
            <div className={styles.outer_div}>
                <div className={styles.pp_div}>
                    <button className={styles.pp_button}>
                        <VscAccount className={styles.pp_image} />
                    </button>
                </div>
                <div className={styles.tweet_div}>
                    <div className={styles.inline_tweet_div}>
                        <div className={styles.profile_div}>
                            <label className={styles.nick_label}>{usernick}</label>
                            <label className={styles.username_label}>{username}</label>
                            <label className={styles.username_label}>· {createdTime} sa</label>
                        </div>
                        <div className={styles.paragraph}>
                            <p className={styles.p}>{content}</p>
                        </div>
                        <div className={styles.icon_list_div}>
                            <div className={styles.icon_div}>
                                <div className={styles.icon}>
                                <FaRegComment  />
                                </div>
                                
                                <p className={styles.icon_p}>{commentsCount}</p>
                            </div>
                            <div className={styles.icon_div}>
                                <LuArrowDownUp className={styles.icon}/>
                                <p className={styles.icon_p}>{rtTweetsCount}</p>
                            </div>
                            <div className={styles.icon_div}>
                                <VscHeart className={styles.icon}/>
                                <p className={styles.icon_p}>{favCount}</p>
                            </div>
                            <div className={styles.icon_div}>
                                <VscGraph className={styles.icon}/>
                                <p className={styles.icon_p}>{viewsCount}</p>
                            </div>
                            <div className={styles.righticons_div}>
                                <div>
                                    <BsSave2 className={styles.icon}/>
                                </div>
                                <div>
                                    <FaArrowUpFromBracket className={styles.icon}/>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default TweetCard;