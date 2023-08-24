import { ScreenDims } from "../../types";
import { useEffect, useRef, useState } from "react";

interface Props {
  name: string;
  onNameChange: (name: string) => void;
  screen: ScreenDims;
  onLayoutChange: (layoutJSON: string) => void;
}

export default function ScreenEditor({ screen, onLayoutChange, name }: Props) {
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
    <div
      ref={ref}
      style={{
        height,
      }}
      className="border-2 border-gray-700 transition-all ease-out duration-200 flex items-center justify-center overflow-hidden"
    >
      <h2>{name}</h2>
    </div>
  );
}
