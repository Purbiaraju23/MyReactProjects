import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const COLOR = [
    "red",
    "yellow",
    "green",
    "pink",
    "blue",
    "black",
    "cyan",
    "purple",
  ];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
          <div className="fixed flex fle-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            {COLOR.map((item, key) => (
              <button
                key={key}
                onClick={() => setColor(item)}
                className="outline-none ms-2 px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: item }}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
