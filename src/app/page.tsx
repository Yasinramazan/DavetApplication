import Image from "next/image";
import styles from "./page.module.css";
import HeaderButton from "../../Components/headerbutton/headerbuttoncomp";
import SearchBar from "../../Components/searchbar/searchbar";
import { GoFoldUp } from "react-icons/go";
import PostButton from "../../Components/postbutton/postbutton"
import { text } from "stream/consumers";
import PremiumCard from "../../Components/premiumcard/premiumcard";
import LiveonXCard from "../../Components/liveonXcard/liveonXcard";
import DiscoverCard from "../../Components/discovercard/discovercard";
import TopNavigationBar from "../../Components/topnavigationbar/topnavigationbar";
import TweetCard from "../../Components/Tweet/tweetcard";



export default function Home() {

  
  return (
    <div className={styles.mainDiv}>
      <div className={styles.sidebar}>
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
            <PostButton/>
      </div>
      <div className={styles.flowdiv}>
        <div className={styles.middle_outer_div}>
        <TopNavigationBar/>
        <TweetCard/>
        </div>
        
      </div>
      <div className={styles.rightsidebar}>
        <SearchBar/>
        <PremiumCard/>
        <LiveonXCard/>
        <DiscoverCard/>
      </div>
    </div>
  );
}

