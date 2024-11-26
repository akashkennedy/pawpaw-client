export interface ProfileProps {
  userName: string;
  name: string;
  profilePic: string;
}

const User = ({ userName, name, profilePic }: ProfileProps) => {
  return (
    <div className="border-2 flex justify-between items-center border-primary p-2 rounded-pill cursor-pointer">
      <div className="flex gap-3">
        <img src={profilePic} alt={name} className="size-14 rounded-full" />
        <div className="flex flex-col">
          <h6 className="font-medium text-md">{name}</h6>
          <p className="text-md text-gray-700">@{userName}</p>
        </div>
      </div>
      <button className="rounded-pill border border-primary font-medium text-lg px-3 py-1 transition hover:bg-primary/30">
        Follow
      </button>
    </div>
  );
};

export default User;
