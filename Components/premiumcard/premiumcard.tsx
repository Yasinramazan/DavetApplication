import styles from "../premiumcard/premiumcard.module.css"

export default function PremiumCard(){
    return(
        <div className={styles.div}>
            <h2 className={styles.h2}>Premium'a Abone Ol</h2>
            <p className={styles.p}>Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</p>
            <button className={styles.button}>Abone ol</button>
        </div>
    );
}