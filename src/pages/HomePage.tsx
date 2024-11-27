import Trending from "../components/Trending";
import PeopleToFollow from "../components/PeopleToFollow";
import Tweetbox from "../components/Tweetbox";
import Feeds from "../components/Feeds";

const HomePage = () => {
  return (
    <main className="container mx-auto flex">
      <aside className="max-w-[25%]">
        <Trending />
        <PeopleToFollow />
      </aside>
      <div>
        <Tweetbox />
        <Feeds />
      </div>
    </main>
  );
};

export default HomePage;
