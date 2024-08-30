import Image from "next/image";
import styles from "./page.module.css";
import HeaderButton from "../../Components/headerbutton/headerbuttoncomp";
import { GoFoldUp } from "react-icons/go";
import { text } from "stream/consumers";

export default function Home() {

  let text = "deneme";  
  return (
    <div className={styles.mainDiv}>
      <div className={styles.flexDiv}>
      <GoFoldUp/>
        <div className={styles.leftDiv}>
        
        <HeaderButton text="Anasayfa"></HeaderButton>
        <HeaderButton text="Keşfet"></HeaderButton>
        <HeaderButton text="Bildirimler"></HeaderButton>
        <HeaderButton text="Mesajlar"></HeaderButton>
        <HeaderButton text="Grok"></HeaderButton>
        <HeaderButton text="Yer İşaretleri"></HeaderButton>
        <HeaderButton text="İşler"></HeaderButton>
        <HeaderButton text="Topluluklar"></HeaderButton>
        <HeaderButton text="Premium"></HeaderButton>
        <HeaderButton text="Onaylı Kuruluşlar"></HeaderButton>
        <HeaderButton text="Profil"></HeaderButton>
        <HeaderButton text="Daha Fazla"></HeaderButton>
        
        </div>
        
      </div>
      <div className={styles.flexDiv}>b</div>
      <div className={styles.flexDiv}>c</div>
    </div>
  );
}
