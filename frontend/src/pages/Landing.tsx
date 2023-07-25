import ScreenDummy from "../components/devices/Screen";

interface Props {
  screens: { Width: number; Height: number; Top: number; Left: number }[];
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
      <button
        onClick={onNewLayout}
        className="border-blue-900 hover:bg-blue-600 shadow-md hover:shadow-lg active:bg-blue-700 shadow-neutral-400 transition-all ease-out duration-200 border px-4 py-2 rounded-lg bg-blue-500 font-bold text-white"
      >
        New layout
      </button>
    </div>
  );
}
