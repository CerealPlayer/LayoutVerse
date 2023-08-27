import { ScreenDims } from "../../types";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { SplitBtn } from "./SplitBtns";
import ConfirmationInput from "../ui/ConfirmationInput";

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

  const changeHandler = (newValue: string) => {
    onNameChange(newValue);
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4 my-2">
        <ConfirmationInput
          name="name"
          type="text"
          initialValue={name}
          onConfirm={changeHandler}
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
