import { links } from "../data/links.json";
export default function Home() {
  return (
    <div className="flex gap-3 flex-col bg-black ">
      {links.map((link, index) => {
        const url = `https://cses.fi/${link}`;
        return (
          <div key={index}>
            <a
              href={url}
              className="visited:text-blue-300 underline text-3xl text-gray-400"
            >
              {url}
            </a>
          </div>
        );
      })}
    </div>
  );
}
