import styles from "../topnavigationbar/topnavigationbar.module.css"


export default function TopNavigationBar() {
    return (
        <div className={styles.outer_div}>
            <nav className={styles.navbar}>
                <ul className={styles.nav_links}>
                    <div className={styles.inner_div}>
                        <li><a href="#home">Sana Özel</a></li>
                    </div>
                    <div className={styles.inner_div}>
                        <li><a href="#about">Takip Edilenler</a></li>
                    </div>
                    <div className={styles.inner_div}>
                        <li><a href="#services">Kachow Forum</a></li>
                    </div>
                    <div className={styles.inner_div}>
                        <li><a href="#contact">Milli Paranoya</a></li>
                    </div>
                </ul>
            </nav>
        </div>

    );
}