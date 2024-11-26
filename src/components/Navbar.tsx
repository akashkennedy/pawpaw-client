import { BiSearchAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between rounded-pill m-3 mx-auto border-primary border-4 px-3 py-1">
      <div>
        <div className="border-primary border-2 rounded-pill flex p-1">
          <BiSearchAlt className="size-6" />
          <input className="w-36 rounded-pill outline-none border-none pl-2 bg-primary bg-opacity-20" />
        </div>
      </div>
      <img
        src={logo}
        className="size-14 self-center cursor-pointer transition hover:scale-90"
      />
      <FiSend className="size-10 cursor-pointer fill-primary transition hover:rotate-6" />
    </nav>
  );
};

export default Navbar;
