import { BiHeart, BiMessage, BiRefresh } from "react-icons/bi";

export interface FeedProps {
  profilePic: string;
  name: string;
  userName: string;
  body: string;
}

const Feed = ({ profilePic, name, userName, body }: FeedProps) => {
  return (
    <article className="my-3 flex items-center gap-3 justify-between border-2 border-primary rounded-pill p-3">
      <div className="flex gap-5">
        <div>
          <img src={profilePic} className="rounded-full size-14" />
        </div>
        <div>
          <div className="flex gap-2">
            <h6 className="text-lg font-medium">{name}</h6>
            <p className="text-md text-gray-700">@{userName}</p>
          </div>
          <p className="text-lg font-normal overflow-clip">{body}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <BiHeart className="size-7 cursor-pointer" />
        <BiMessage className="size-7 cursor-pointer" />
        <BiRefresh className="size-7 cursor-pointer" />
      </div>
    </article>
  );
};

export default Feed;
