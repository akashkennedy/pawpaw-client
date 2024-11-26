import Trending from "../components/Trending";
import PeopleToFollow from "../components/PeopleToFollow";

const HomePage = () => {
  return (
    <main className="container mx-auto">
      <aside className="max-w-[25%]">
        <Trending />
        <PeopleToFollow />
      </aside>
    </main>
  );
};

export default HomePage;
