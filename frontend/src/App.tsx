import { useEffect, useState } from "react";
import { GetScreens } from "../wailsjs/go/main/App";
import ScreenDummy from "./components/devices/Screen";

function App() {
  const [screens, setScreens] = useState<
    { Width: number; Height: number; Top: number; Left: number }[]
  >([]);

  useEffect(() => {
    GetScreens().then((screens) => {
      setScreens(screens);
    });
  }, []);

  return (
    <div className="flex justify-between px-16 container mx-auto items-center">
      <h1 className="text-4xl font-poppins text-gray-700">
        Layout
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Verse
        </span>
      </h1>

      <div className="flex items-center">
        {screens.map((screen, index) => {
          return <ScreenDummy {...screen} key={`Screen-${index}`} />;
        })}
      </div>
    </div>
  );
}

export default App;
