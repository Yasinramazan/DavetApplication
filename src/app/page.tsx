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
}


const tweets: Tweet[] = [
  {
    usernick: "@john_doe",
    username: "John Doe",
    createdTime: "2024-09-01T12:34:56",
    content: "Just finished a 10K run! Feeling great. #fitness #healthylifestyle",
    commentsCount: "15",
    rtTweetsCount: "10",
    favCount: "100",
    viewsCount: "1000",
  },
  {
    usernick: "@jane_smith",
    username: "Jane Smith",
    createdTime: "2024-09-01T09:20:30",
    content: "Excited for the new product launch tomorrow! Stay tuned. #innovation",
    commentsCount: "25",
    rtTweetsCount: "30",
    favCount: "250",
    viewsCount: "3000",
  },
  {
    usernick: "@tech_guru",
    username: "Tech Guru",
    createdTime: "2024-09-02T14:15:00",
    content: "The future of AI is bright. What do you think? #AI #tech",
    commentsCount: "35",
    rtTweetsCount: "50",
    favCount: "500",
    viewsCount: "7000",
  },
  {
    usernick: "@foodie_lover",
    username: "Foodie Lover",
    createdTime: "2024-09-01T18:00:45",
    content: "Just tried the best pizza in town! #foodie #pizza",
    commentsCount: "20",
    rtTweetsCount: "40",
    favCount: "300",
    viewsCount: "4000",
  },
  {
    usernick: "@adventure_jane",
    username: "Jane Adventure",
    createdTime: "2024-09-02T11:15:00",
    content: "Exploring the hidden gems of the city, finding new places, and meeting amazing people along the way. Life is truly an adventure every day.",
    commentsCount: "30",
    rtTweetsCount: "40",
    favCount: "200",
    viewsCount: "3000",
  },
  {
    usernick: "@traveler_world",
    username: "Traveler World",
    createdTime: "2024-09-02T08:30:10",
    content: "Exploring the beautiful beaches of Bali. #travel #paradise",
    commentsCount: "45",
    rtTweetsCount: "60",
    favCount: "700",
    viewsCount: "8000",
  },
  {
    usernick: "@gamer123",
    username: "Gamer123",
    createdTime: "2024-09-02T20:50:25",
    content: "Can't wait for the new game release tonight! #gaming #hyped",
    commentsCount: "50",
    rtTweetsCount: "70",
    favCount: "900",
    viewsCount: "10000",
  },
  {
    usernick: "@movie_buff",
    username: "Movie Buff",
    createdTime: "2024-09-01T22:45:15",
    content: "Just watched the latest blockbuster! What a movie! #cinema",
    commentsCount: "30",
    rtTweetsCount: "45",
    favCount: "400",
    viewsCount: "6000",
  },
  {
    usernick: "@nature_lover",
    username: "Nature Lover",
    createdTime: "2024-09-02T05:20:00",
    content: "Sunrise at the mountains is always breathtaking. #nature #peace",
    commentsCount: "15",
    rtTweetsCount: "20",
    favCount: "250",
    viewsCount: "3500",
  },
  {
    usernick: "@music_fanatic",
    username: "Music Fanatic",
    createdTime: "2024-09-02T12:00:05",
    content: "Listening to the new album on repeat. It's so good! #music #newrelease",
    commentsCount: "60",
    rtTweetsCount: "80",
    favCount: "1100",
    viewsCount: "12000",
  },
  {
    usernick: "@bookworm",
    username: "Bookworm",
    createdTime: "2024-09-01T15:30:45",
    content: "Just finished reading a fantastic book! #books #reading",
    commentsCount: "10",
    rtTweetsCount: "15",
    favCount: "150",
    viewsCount: "2000",
  },
  {
    usernick: "@nature_lover",
    username: "Nature Lover",
    createdTime: "2024-09-02T05:20:00",
    content: "Sunrise at the mountains is always breathtaking. #nature #peace",
    commentsCount: "15",
    rtTweetsCount: "20",
    favCount: "250",
    viewsCount: "3500",
  },
  {
    usernick: "@music_fanatic",
    username: "Music Fanatic",
    createdTime: "2024-09-02T12:00:05",
    content: "Listening to the new album on repeat. It's so good! #music #newrelease",
    commentsCount: "60",
    rtTweetsCount: "80",
    favCount: "1100",
    viewsCount: "12000",
  },
  {
    usernick: "@bookworm",
    username: "Bookworm",
    createdTime: "2024-09-01T15:30:45",
    content: "Just finished reading a fantastic book! #books #reading",
    commentsCount: "10",
    rtTweetsCount: "15",
    favCount: "150",
    viewsCount: "2000",
  },
  {
    usernick: "@nature_lover",
    username: "Nature Lover",
    createdTime: "2024-09-02T05:20:00",
    content: "Sunrise at the mountains is always breathtaking. #nature #peace",
    commentsCount: "15",
    rtTweetsCount: "20",
    favCount: "250",
    viewsCount: "3500",
  },
  {
    usernick: "@music_fanatic",
    username: "Music Fanatic",
    createdTime: "2024-09-02T12:00:05",
    content: "Listening to the new album on repeat. It's so good! #music #newrelease",
    commentsCount: "60",
    rtTweetsCount: "80",
    favCount: "1100",
    viewsCount: "12000",
  },
  {
    usernick: "@bookworm",
    username: "Bookworm",
    createdTime: "2024-09-01T15:30:45",
    content: "Just finished reading a fantastic book! #books #reading",
    commentsCount: "10",
    rtTweetsCount: "15",
    favCount: "150",
    viewsCount: "2000",
  },
  {
    usernick: "@nature_lover",
    username: "Nature Lover",
    createdTime: "2024-09-02T05:20:00",
    content: "Sunrise at the mountains is always breathtaking. #nature #peace",
    commentsCount: "15",
    rtTweetsCount: "20",
    favCount: "250",
    viewsCount: "3500",
  },
  {
    usernick: "@music_fanatic",
    username: "Music Fanatic",
    createdTime: "2024-09-02T12:00:05",
    content: "Listening to the new album on repeat. It's so good! #music #newrelease",
    commentsCount: "60",
    rtTweetsCount: "80",
    favCount: "1100",
    viewsCount: "12000",
  },
  {
    usernick: "@bookworm",
    username: "Bookworm",
    createdTime: "2024-09-01T15:30:45",
    content: "Just finished reading a fantastic book! #books #reading",
    commentsCount: "10",
    rtTweetsCount: "15",
    favCount: "150",
    viewsCount: "2000",
  },

];
interface Tweet {
  usernick: string;
  username: string;
  createdTime: string;
  content: string;
  commentsCount: string;
  rtTweetsCount: string;
  favCount: string;
  viewsCount: string;
}


const tweets: Tweet[] = [
  {
    usernick: "@john_doe",
    username: "John Doe",
    createdTime: "2024-09-01T12:34:56",
    content: "Just finished a 10K run! Feeling great. #fitness #healthylifestyle",
    commentsCount: "15",
    rtTweetsCount: "10",
    favCount: "100",
    viewsCount: "1000",
  },
  {
    usernick: "@jane_smith",
    username: "Jane Smith",
    createdTime: "2024-09-01T09:20:30",
    content: "Excited for the new product launch tomorrow! Stay tuned. #innovation",
    commentsCount: "25",
    rtTweetsCount: "30",
    favCount: "250",
    viewsCount: "3000",
  },
  {
    usernick: "@tech_guru",
    username: "Tech Guru",
    createdTime: "2024-09-02T14:15:00",
    content: "The future of AI is bright. What do you think? #AI #tech",
    commentsCount: "35",
    rtTweetsCount: "50",
    favCount: "500",
    viewsCount: "7000",
  },
  {
    usernick: "@foodie_lover",
    username: "Foodie Lover",
    createdTime: "2024-09-01T18:00:45",
    content: "Just tried the best pizza in town! #foodie #pizza",
    commentsCount: "20",
    rtTweetsCount: "40",
    favCount: "300",
    viewsCount: "4000",
  },
  {
    usernick: "@adventure_jane",
    username: "Jane Adventure",
    createdTime: "2024-09-02T11:15:00",
    content: "Exploring the hidden gems of the city, finding new places, and meeting amazing people along the way. Life is truly an adventure every day.",
    commentsCount: "30",
    rtTweetsCount: "40",
    favCount: "200",
    viewsCount: "3000",
  },
  {
    usernick: "@traveler_world",
    username: "Traveler World",
    createdTime: "2024-09-02T08:30:10",
    content: "Exploring the beautiful beaches of Bali. #travel #paradise",
    commentsCount: "45",
    rtTweetsCount: "60",
    favCount: "700",
    viewsCount: "8000",
  },
  {
    usernick: "@gamer123",
    username: "Gamer123",
    createdTime: "2024-09-02T20:50:25",
    content: "Can't wait for the new game release tonight! #gaming #hyped",
    commentsCount: "50",
    rtTweetsCount: "70",
    favCount: "900",
    viewsCount: "10000",
  },
  {
    usernick: "@movie_buff",
    username: "Movie Buff",
    createdTime: "2024-09-01T22:45:15",
    content: "Just watched the latest blockbuster! What a movie! #cinema",
    commentsCount: "30",
    rtTweetsCount: "45",
    favCount: "400",
    viewsCount: "6000",
  },
  {
    usernick: "@nature_lover",
    username: "Nature Lover",
    createdTime: "2024-09-02T05:20:00",
    content: "Sunrise at the mountains is always breathtaking. #nature #peace",
    commentsCount: "15",
    rtTweetsCount: "20",
    favCount: "250",
    viewsCount: "3500",
  },
  {
    usernick: "@music_fanatic",
    username: "Music Fanatic",
    createdTime: "2024-09-02T12:00:05",
    content: "Listening to the new album on repeat. It's so good! #music #newrelease",
    commentsCount: "60",
    rtTweetsCount: "80",
    favCount: "1100",
    viewsCount: "12000",
  },
  {
    usernick: "@bookworm",
    username: "Bookworm",
    createdTime: "2024-09-01T15:30:45",
    content: "Just finished reading a fantastic book! #books #reading",
    commentsCount: "10",
    rtTweetsCount: "15",
    favCount: "150",
    viewsCount: "2000",
  },
  {
    usernick: "@nature_lover",
    username: "Nature Lover",
    createdTime: "2024-09-02T05:20:00",
    content: "Sunrise at the mountains is always breathtaking. #nature #peace",
    commentsCount: "15",
    rtTweetsCount: "20",
    favCount: "250",
    viewsCount: "3500",
  },
  {
    usernick: "@music_fanatic",
    username: "Music Fanatic",
    createdTime: "2024-09-02T12:00:05",
    content: "Listening to the new album on repeat. It's so good! #music #newrelease",
    commentsCount: "60",
    rtTweetsCount: "80",
    favCount: "1100",
    viewsCount: "12000",
  },
  {
    usernick: "@bookworm",
    username: "Bookworm",
    createdTime: "2024-09-01T15:30:45",
    content: "Just finished reading a fantastic book! #books #reading",
    commentsCount: "10",
    rtTweetsCount: "15",
    favCount: "150",
    viewsCount: "2000",
  },
  {
    usernick: "@nature_lover",
    username: "Nature Lover",
    createdTime: "2024-09-02T05:20:00",
    content: "Sunrise at the mountains is always breathtaking. #nature #peace",
    commentsCount: "15",
    rtTweetsCount: "20",
    favCount: "250",
    viewsCount: "3500",
  },
  {
    usernick: "@music_fanatic",
    username: "Music Fanatic",
    createdTime: "2024-09-02T12:00:05",
    content: "Listening to the new album on repeat. It's so good! #music #newrelease",
    commentsCount: "60",
    rtTweetsCount: "80",
    favCount: "1100",
    viewsCount: "12000",
  },
  {
    usernick: "@bookworm",
    username: "Bookworm",
    createdTime: "2024-09-01T15:30:45",
    content: "Just finished reading a fantastic book! #books #reading",
    commentsCount: "10",
    rtTweetsCount: "15",
    favCount: "150",
    viewsCount: "2000",
  },
  {
    usernick: "@nature_lover",
    username: "Nature Lover",
    createdTime: "2024-09-02T05:20:00",
    content: "Sunrise at the mountains is always breathtaking. #nature #peace",
    commentsCount: "15",
    rtTweetsCount: "20",
    favCount: "250",
    viewsCount: "3500",
  },
  {
    usernick: "@music_fanatic",
    username: "Music Fanatic",
    createdTime: "2024-09-02T12:00:05",
    content: "Listening to the new album on repeat. It's so good! #music #newrelease",
    commentsCount: "60",
    rtTweetsCount: "80",
    favCount: "1100",
    viewsCount: "12000",
  },
  {
    usernick: "@bookworm",
    username: "Bookworm",
    createdTime: "2024-09-01T15:30:45",
    content: "Just finished reading a fantastic book! #books #reading",
    commentsCount: "10",
    rtTweetsCount: "15",
    favCount: "150",
    viewsCount: "2000",
  },

];

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
                  <TweetCard usernick={item.username} username={item.usernick} createdTime="1" content={item.content} commentsCount={item.commentsCount} rtTweetsCount={item.rtTweetsCount} favCount={item.favCount} viewsCount={item.viewsCount} />
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

