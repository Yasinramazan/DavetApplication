import styles from "./headerbuttonstyle.module.css"
import { GoFoldUp } from "react-icons/go";

export default function HeaderButton({text}:{text:string}){
    return(
        <div className={styles.div}>
            <div>
                <GoFoldUp/>
                <span className={styles.span}>
                    {text}
                </span>
            </div>
        </div>
    );
}