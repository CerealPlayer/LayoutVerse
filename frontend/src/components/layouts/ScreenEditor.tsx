import { ScreenDims } from "../../types";
import { useEffect, useRef, useState } from "react";
import { SplitBtn } from "./SplitBtns";

interface Props {
  name: string;
  onNameChange: (name: string) => void;
  screen: ScreenDims;
  onLayoutChange: (layoutJSON: string) => void;
}

export default function ScreenEditor({
  screen,
  onLayoutChange,
  name,
  onNameChange,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const screenRatio = screen.Width / screen.Height;
  const height = width / screenRatio;

  useEffect(() => {
    if (!ref.current) return;
    const width = ref.current.clientWidth;
    setWidth(width);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 my-2">
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="border-b-2 border-transparent transition-all ease-out duration-200 flex items-center justify-center overflow-hidden focus:outline-none focus:border-blue-500 focus-within:outline-none focus-within:border-blue-500 outline-none hover:border-blue-300"
        />
        <div className="flex items-center gap-2">
          <SplitBtn />
          <SplitBtn vertical />
        </div>
      </div>
      <div
        ref={ref}
        style={{
          height,
        }}
        className="border-2 border-gray-700 transition-all ease-out duration-200 flex items-center justify-center overflow-hidden"
      ></div>
    </div>
  );
}
