import styles from "../Tweet/tweetcard.module.css"
import { VscAccount } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { LuArrowDownUp } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa6";
import { BsSave2 } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";


export default function TweetCard() {
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
                            <label className={styles.nick_label}>William McKinley 🇭🇰</label>
                            <label className={styles.username_label}>@mckinley_1776</label>
                            <label className={styles.username_label}>· 1 sa</label>
                        </div>
                        <div className={styles.paragraph}>
                            <p className={styles.p}>Rusya Merkez Bankası bir sonraki toplantıda büyük ihtimalle faizleri yeniden artıracak. Ülkede iç talep çok güçlü.</p>
                        </div>
                        <div className={styles.icon_list_div}>
                            <FaRegComment className={styles.icon} />
                            <LuArrowDownUp />
                            <VscHeart />
                            <VscGraph />
                            <div className={styles.righticons_div}>
                                <BsSave2 />
                                <FaArrowUpFromBracket />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}