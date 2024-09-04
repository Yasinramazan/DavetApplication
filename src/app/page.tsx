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

interface Tweet {
  usernick: string;
  username: string;
  createdTime: string;
  content: string;
  commentsCount: string;
  rtTweetsCount: string;
  favCount: string;
  viewsCount: string;
  images : string[]
}

const tweets: Tweet[] = [
  {
    usernick: "@john_doe",
    username: "John Doe",
    createdTime: "2024-09-01T12:00:00Z",
    content: "Exploring the world of TypeScript and loving every moment!,Exploring the world of TypeScript and loving every moment!,Exploring the world of TypeScript and loving every moment!",
    commentsCount: "10",
    rtTweetsCount: "5",
    favCount: "20",
    viewsCount: "100",
    images: [
      "https://www.trthaber.com/dosyalar/images/AA-17927797.jpg",
      "https://blog.etasimacilik.com/wp-content/uploads/yolturleri_eta.jpg",
      "https://www.trthaber.com/dosyalar/images/AA-20271758.jpg",
      "https://www.trthaber.com/resimler/2274000/erdogan-sisi-2275510.jpg"
    ],
  },
  {
    usernick: "@emily_smith",
    username: "Emily Smith",
    createdTime: "2024-09-02T08:30:00Z",
    content: "The road less traveled is often the most rewarding. #Travel",
    commentsCount: "15",
    rtTweetsCount: "10",
    favCount: "50",
    viewsCount: "200",
    images: [
      "https://www.trthaber.com/dosyalar/images/AA-17927797.jpg",
      "https://blog.etasimacilik.com/wp-content/uploads/yolturleri_eta.jpg",
      "https://www.trthaber.com/dosyalar/images/AA-20271758.jpg",
      "https://www.trthaber.com/resimler/2274000/erdogan-sisi-2275510.jpg",
    ],
  },
  {
    usernick: "@michael_jones",
    username: "Michael Jones",
    createdTime: "2024-09-03T14:15:00Z",
    content: "Nature has a way of calming the soul. #NatureLover",
    commentsCount: "8",
    rtTweetsCount: "4",
    favCount: "30",
    viewsCount: "150",
    images: [
      "https://www.trthaber.com/dosyalar/images/AA-17927797.jpg",
      "https://blog.etasimacilik.com/wp-content/uploads/yolturleri_eta.jpg",
      "https://www.trthaber.com/dosyalar/images/AA-20271758.jpg",
      "https://www.trthaber.com/resimler/2274000/erdogan-sisi-2275510.jpg"
    ],
  },
  {
    usernick: "@susan_lee",
    username: "Susan Lee",
    createdTime: "2024-09-04T11:45:00Z",
    content: "Taking a break from the hustle and enjoying some peace.",
    commentsCount: "12",
    rtTweetsCount: "7",
    favCount: "25",
    viewsCount: "175",
    images: [
      "https://www.trthaber.com/dosyalar/images/AA-17927797.jpg",
      "https://blog.etasimacilik.com/wp-content/uploads/yolturleri_eta.jpg",
      "https://www.trthaber.com/dosyalar/images/AA-20271758.jpg"
    ],
  },
  {
    usernick: "@alice_williams",
    username: "Alice Williams",
    createdTime: "2024-09-05T09:30:00Z",
    content: "A new day brings new opportunities. Make the most of it!",
    commentsCount: "18",
    rtTweetsCount: "12",
    favCount: "45",
    viewsCount: "220",
    images: [
      "https://www.trthaber.com/dosyalar/images/AA-17927797.jpg",
      "https://blog.etasimacilik.com/wp-content/uploads/yolturleri_eta.jpg",
      "https://www.trthaber.com/dosyalar/images/AA-20271758.jpg"
    ],
  },
  {
    usernick: "@robert_brown",
    username: "Robert Brown",
    createdTime: "2024-09-06T13:00:00Z",
    content: "Success is a journey, not a destination.",
    commentsCount: "22",
    rtTweetsCount: "8",
    favCount: "60",
    viewsCount: "250",
    images: [
      "https://www.trthaber.com/dosyalar/images/AA-17927797.jpg",
      "https://blog.etasimacilik.com/wp-content/uploads/yolturleri_eta.jpg",
      "https://www.trthaber.com/dosyalar/images/AA-20271758.jpg"
    ],
  },
  {
    usernick: "@linda_davis",
    username: "Linda Davis",
    createdTime: "2024-09-07T16:45:00Z",
    content: "Embrace the beauty of life and cherish every moment.",
    commentsCount: "5",
    rtTweetsCount: "2",
    favCount: "15",
    viewsCount: "80",
    images: [
      "https://www.trthaber.com/dosyalar/images/AA-17927797.jpg",
      "https://blog.etasimacilik.com/wp-content/uploads/yolturleri_eta.jpg",
      "https://www.trthaber.com/dosyalar/images/AA-20271758.jpg"
    ],
  },
  {
    usernick: "@david_clark",
    username: "David Clark",
    createdTime: "2024-09-08T17:00:00Z",
    content: "Learn, grow, and evolve with each passing day.",
    commentsCount: "9",
    rtTweetsCount: "6",
    favCount: "35",
    viewsCount: "140",
    images: [
      "https://www.trthaber.com/dosyalar/images/AA-17927797.jpg",
      "https://blog.etasimacilik.com/wp-content/uploads/yolturleri_eta.jpg",
      "https://www.trthaber.com/dosyalar/images/AA-20271758.jpg"
    ],
  },
  {
    usernick: "@sarah_martin",
    username: "Sarah Martin",
    createdTime: "2024-09-09T18:30:00Z",
    content: "Seek out new experiences and embrace the unknown.",
    commentsCount: "14",
    rtTweetsCount: "10",
    favCount: "40",
    viewsCount: "200",
    images: [
      "https://www.trthaber.com/dosyalar/images/AA-17927797.jpg",
      "https://blog.etasimacilik.com/wp-content/uploads/yolturleri_eta.jpg",
      "https://www.trthaber.com/dosyalar/images/AA-20271758.jpg"
    ],
  },
  {
    usernick: "@james_king",
    username: "James King",
    createdTime: "2024-09-10T19:15:00Z",
    content: "Inspiration comes from the most unexpected places.",
    commentsCount: "11",
    rtTweetsCount: "5",
    favCount: "28",
    viewsCount: "180",
    images: [
      "https://www.trthaber.com/dosyalar/images/AA-17927797.jpg",
      "https://blog.etasimacilik.com/wp-content/uploads/yolturleri_eta.jpg",
      "https://www.trthaber.com/dosyalar/images/AA-20271758.jpg"
    ],
  },
]


export default function Home() {

  
return (
    <div className={styles.mainDiv}>
      <div className={styles.back_div}>

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
          <PostButton />
        </div>


        <div className={styles.scrollable}>
          <div className={styles.flowdiv}>
            <div className={styles.middle_outer_div}>
              <TopNavigationBar />
              {tweets.map((item, index) =>
                <div key={index}>
                  <TweetCard usernick={item.username} username={item.usernick} createdTime="1" content={item.content} commentsCount={item.commentsCount} rtTweetsCount={item.rtTweetsCount} favCount={item.favCount} viewsCount={item.viewsCount} images={item.images}/>
                </div>
              )}

            </div>

          </div>
          <div className={styles.rightsidebar}>
            <SearchBar />
            <PremiumCard />
            <LiveonXCard />
            <DiscoverCard />
          </div>
        </div>


      </div>


    </div>
  );
}

