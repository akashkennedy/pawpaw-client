import User from "./User";
import { ProfileProps } from "./User";

const PeopleToFollow = () => {
  const peoples: ProfileProps[] = [
    {
      name: "Shepard",
      userName: "itsshepard",
      profilePic: "/shepard.jpg",
    },
    {
      name: "Cutemeow",
      userName: "meowmeow",
      profilePic: "/cat.jpg",
    },
    {
      name: "rango",
      userName: "yorangohere",
      profilePic: "/lizard.jpg",
    },
  ];
  return (
    <section className="border-4 w-max border-primary rounded-pill m-3 p-3">
      <h2 className="text-2xl font-semibold">People to Follow</h2>
      <p className="font-medium text-md text-gray-800">
        Follow People with Similar Interests
      </p>
      <article className="space-y-2 m-3">
        {peoples.map((people: ProfileProps, index: number) => (
          <User
            key={index}
            name={people.name}
            userName={people.userName}
            profilePic={people.profilePic}
          />
        ))}
      </article>
    </section>
  );
};

export default PeopleToFollow;
