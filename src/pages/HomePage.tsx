import Trending from "../components/Trending";
import PeopleToFollow from "../components/PeopleToFollow";
import Tweetbox from "../components/Tweetbox";
import Feeds from "../components/Feeds";
import Profile from "../components/Profile";

const HomePage = () => {
  return (
    <main className="container mx-auto flex">
      <aside className="max-w-[25%]">
        <Trending />
        <PeopleToFollow />
      </aside>
      <div className="flex-1">
        <Tweetbox />
        <Feeds />
      </div>
      <div>
        <Profile />
      </div>
    </main>
  );
};

export default HomePage;
