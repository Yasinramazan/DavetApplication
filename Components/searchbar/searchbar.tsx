import styles from "../searchbar/searchbar.module.css"
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar(){
    return(
        <div className={styles.div}>
            <IoSearchOutline />
            <input className={styles.input} placeholder="Ara">
            </input>
        </div>
    );
}