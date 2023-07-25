import { useEffect, useState } from "react";
import { GetScreens } from "../wailsjs/go/main/App";
import { WindowMaximise } from "../wailsjs/runtime/runtime";
import Landing from "./pages/Landing";
import NewLayout from "./pages/NewLayout";

function App() {
  const [page, setPage] = useState("landing");
  const [screens, setScreens] = useState<
    { Width: number; Height: number; Top: number; Left: number }[]
  >([]);

  useEffect(() => {
    GetScreens().then((screens) => {
      setScreens(screens);
    });
  }, []);

  const onNewLayout = async () => {
    setPage("new-layout");
    WindowMaximise();
  };

  return (
    <>
      {page === "landing" && (
        <Landing screens={screens} onNewLayout={onNewLayout} />
      )}
      {page === "new-layout" && <NewLayout />}
    </>
  );
}

export default App;
