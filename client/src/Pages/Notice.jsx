import { useState } from "react";
import { FaBullseye } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Notice() {
  const [see, setSee] = useState(false);
  const handleShowNotice = () => {
    setSee(true);
  };
  if (see) {
    return (
      <div className="px-8 flex flex-col bg-black text-xl font-bold text-white">
        <span className="flex gap-3 items-center py-1 text-green-400">
          <FaBullseye className="text-yellow-300" />
          Note!
          <MdClose
            onClick={() => setSee(false)}
            className="text-red-500 cursor-pointer font-bold"
            size={30}
          />
        </span>
        <p className="text-gray-500">
          Link in <span className="text-blue-300">Color</span> are Visited
          Links.
        </p>
        <div className="mt-2">
          <h3 className="text-2xl ">Reason to Create this website...</h3>
          <Link
            to={
              "https://github.com/vineet-53/CSES-ProblemSet/blob/main/README.md"
            }
            className="text-green-500 underline"
          >
            Link to readme
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black px-8">
      <button
        onClick={handleShowNotice}
        className="text-2xl underline hover:text-blue-400 text-yellow-400 "
      >
        See Me!
      </button>
    </div>
  );
}
