import { LuPaperclip } from "react-icons/lu";
import { RxPaperPlane } from "react-icons/rx";
const Tweetbox = () => {
  return (
    <div className="border-4 h-28 border-primary px-5 flex m-3 items-center justify-between gap-10 rounded-pill">
      <div>
        <img src="/cat.jpg" className="size-16 rounded-full cursor-pointer" />
      </div>
      <div>
        <input
          className="border-2 rounded-lg h-12 w-96 outline-none px-2 placeholder:text-gray-500 text-lg"
          placeholder="Something on your mind?"
        />
      </div>
      <div className="flex gap-8">
        <LuPaperclip className="size-7 cursor-pointer" />
        <RxPaperPlane className="size-7 cursor-pointer" />
      </div>
    </div>
  );
};

export default Tweetbox;
