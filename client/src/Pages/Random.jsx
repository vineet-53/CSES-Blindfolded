import { useEffect, useState } from "react";
import { links } from "../data/links.json";
import { FaFileAlt } from "react-icons/fa";
export default function Random() {
  const [generated, setGenerated] = useState(false);
  const [link, setLink] = useState(null);
  function getRandom() {
    return Math.floor(Math.random() * links.length);
  }
  function handleGenerate() {
    const index = getRandom();
    setLink(links[index]);
    setGenerated(true);
  }
  useEffect(() => {
    setGenerated(false);
    handleGenerate();
  }, []);
  return (
    <div className="h-screen flex flex-col gap-10 py-10 px-8 bg-black w-full">
      {generated && link && (
        <div className="flex gap-3 items-center ">
          <FaFileAlt size={50} className="text-gray-200" />
          <a
            className="visited:text-blue-300 underline text-3xl text-bold text-green-500"
            href={`https://cses.fi/${link}`}
          >
            {`https://cses.fi/${link}`}
          </a>
        </div>
      )}
    </div>
  );
}
