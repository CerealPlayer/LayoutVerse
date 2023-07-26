import { useEffect, useState } from "react";
import { GetScreens } from "../wailsjs/go/main/App";
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
  };

  const layoutSaveHandler = async (layoutJSON: string | null) => {
    setPage("landing");
    console.log(layoutJSON);
  };

  return (
    <>
      {page === "landing" && (
        <Landing screens={screens} onNewLayout={onNewLayout} />
      )}
      {page === "new-layout" && (
        <NewLayout screens={screens} onLayoutSave={layoutSaveHandler} />
      )}
    </>
  );
}

export default App;
