import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-black py-8 px-8 flex justify-between">
      <div className="text-5xl text-gray-400 font-bold">CSES</div>
      <ul className="text-3xl underline text-gray-400 flex gap-3 ">
        <Link className="hover:text-gray-300 cursor-pointer" to={"/"}>
          Home
        </Link>
        <Link
          className="hover:text-gray-300 cursor-pointer"
          to={"/random-problem"}
        >
          Random Problem
        </Link>
      </ul>
    </nav>
  );
}
