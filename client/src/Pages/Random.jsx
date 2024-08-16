import { useEffect, useState } from "react";
import { links } from "../data/links.json";
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
    <div className="h-screen flex flex-col gap-10 justify-center items-center bg-black w-full">
      {generated && link && (
        <a
          className="visited:text-blue-400 underline text-5xl text-bold text-gray-600"
          href={`https://cses.fi/${link}`}
        >
          {`https://cses.fi/${link}`}
        </a>
      )}
    </div>
  );
}
