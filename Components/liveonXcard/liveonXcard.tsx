import styles from "../liveonXcard/liveonXcard.module.css"

export default function LiveonXCard(){
    return(
        <div className={styles.div}>
            <h2 className={styles.h2}>X'te Canlı</h2>
            <div className={styles.indiv}>
                <p className={styles.span}>15 Temmuz Demokrasi Buluşması</p>
                <div className={styles.buttonDiv}></div>
            </div>
        </div>
    );
}