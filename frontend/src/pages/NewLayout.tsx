import { useState } from "react";
import Button from "../components/ui/Button";

interface Props {
  screens: ScreenDims[];
  onLayoutSave: (layoutJSON: string | null) => void;
}

export default function NewLayout({ screens, onLayoutSave }: Props) {
  const [layout, setLayout] = useState<LayoutWindow[]>([]);

  const layoutSaveHandler = () => {
    if (!layout.length) {
      onLayoutSave(null);
      return;
    };
    onLayoutSave(JSON.stringify(layout));
  }
  return (
    <div className="px-16 container mx-auto">
      <Button onClick={layoutSaveHandler}>Save</Button>
    </div>
  );
}
