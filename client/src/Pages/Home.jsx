import { links } from "../data/links.json";
import { FaFileAlt } from "react-icons/fa";
export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-x-2 gap-y-3 py-10 px-8 bg-black ">
      {links.map((link, index) => {
        const url = `https://cses.fi/${link}`;
        return (
          <div
            key={index}
            className={`flex gap-3 items-end ${index > 0 && index < links.length && "border-t-gray-300 py-3"}`}
          >
            <div>
              <FaFileAlt size={50} className="text-gray-200" />
            </div>
            <a
              href={url}
              className="visited:text-blue-300 hover:text-blue-800 underline text-3xl text-gray-400"
            >
              {url}
            </a>
          </div>
        );
      })}
    </div>
  );
}
