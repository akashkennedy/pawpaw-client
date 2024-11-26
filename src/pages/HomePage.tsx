import Trending from "../components/Trending";
import PeopleToFollow from "../components/PeopleToFollow";
import Tweetbox from "../components/Tweetbox";

const HomePage = () => {
  return (
    <main className="container mx-auto flex">
      <aside className="max-w-[25%]">
        <Trending />
        <PeopleToFollow />
      </aside>
      <Tweetbox />
    </main>
  );
};

export default HomePage;
