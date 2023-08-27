import { useState } from "react";
import { Button, SecondaryButton } from "../components/ui/Button";
import { LayoutWindow, ScreenDims } from "../types";
import ScreenEditor from "../components/layouts/ScreenEditor";

interface Props {
  screens: ScreenDims[];
  onLayoutSave: (layoutJSON: string | null) => void;
}

export default function NewLayout({ screens, onLayoutSave }: Props) {
  const initialLayout = screens.map((screen, i) => {
    return {
      dims: {
        Left: screen.Left,
        Top: screen.Top,
        Width: screen.Width,
        Height: screen.Height,
      },
      screenName: `Screen ${i + 1}`,
      appName: "",
    };
  });
  const [layout, setLayout] = useState<LayoutWindow[]>(initialLayout);

  const layoutChangeHandler = (layoutJSON: string, index: number) => {
    console.log(layoutJSON);
  };

  const layoutSaveHandler = () => {
    if (!layout.length) {
      onLayoutSave(null);
      return;
    }
    onLayoutSave(JSON.stringify(layout));
  };
  return (
    <div className="px-16 container mx-auto mt-8 flex flex-col gap-4">
      <div className="flex items-center gap-4 justify-end">
        <Button onClick={layoutSaveHandler}>Save</Button>
        <SecondaryButton onClick={() => onLayoutSave(null)}>
          Cancel
        </SecondaryButton>
      </div>
      <div className="flex gap-4 items-stretch [&>*]:w-full">
        {layout.map((screen, index) => {
          return (
            <ScreenEditor
              key={`Screen-${index}`}
              screen={screen.dims}
              onLayoutChange={(layoutJSON) => layoutChangeHandler(layoutJSON, index)}
              name={screen.screenName}
              onNameChange={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
}
