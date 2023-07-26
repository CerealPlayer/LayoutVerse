import ScreenDummy from "../components/devices/Screen";
import Button from "../components/ui/Button";

interface Props {
  screens: ScreenDims[];
  onNewLayout: () => void;
}

export default function Landing({ screens, onNewLayout }: Props) {
  return (
    <div className="px-16 container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-poppins text-gray-700">
          Layout
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Verse
          </span>
        </h1>

        <div className="flex items-center">
          {screens && screens.map((screen, index) => {
            return <ScreenDummy {...screen} key={`Screen-${index}`} />;
          })}
        </div>
      </div>
      <Button onClick={onNewLayout}>New Layout</Button>
    </div>
  );
}
