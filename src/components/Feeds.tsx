import { FeedProps } from "./Feed";
import Feed from "./Feed";

const Feeds = () => {
  const feeds: FeedProps[] = [
    {
      name: "Shepard",
      userName: "itsshepard",
      profilePic: "/shepard.jpg",
      body: "I Like cats with white fur really <3",
    },
    {
      name: "Cutemeow",
      userName: "meowmeow",
      profilePic: "/cat.jpg",
      body: "Can someone tell me where can I get some dry fish",
    },
    {
      name: "rango",
      userName: "yorangohere",
      profilePic: "/lizard.jpg",
      body: "It really hot out here in Sahara",
    },
    {
      name: "Emma",
      userName: "emmahere",
      profilePic: "/hamster.jpg",
      body: "Hello, How are you Everyone",
    },
  ];

  return (
    <article className="border-4 border-primary rounded-pill m-3 p-3">
      <h2 className="text-3xl font-bold">Your Feed</h2>
      <p className="text-md font-medium text-gray-700">
        Check out the Feed that tailored made for You
      </p>
      <div className="my-5">
        {feeds.map((feed: FeedProps, index: number) => (
          <Feed
            key={index}
            name={feed.name}
            userName={feed.userName}
            profilePic={feed.profilePic}
            body={feed.body}
          />
        ))}
      </div>
    </article>
  );
};

export default Feeds;
