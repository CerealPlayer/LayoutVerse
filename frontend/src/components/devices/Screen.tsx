interface Props {
  Width: number;
  Height: number;
}

export default function ScreenDummy({ Width, Height }: Props) {
  return (
    <div className='h-24 w-36 flex items-center m-4 justify-center border-2 border-neutral-400 border-opacity-40 outline-2 outline-offset-2 outline outline-neutral-400 rounded-lg'>
      <span className="text-neutral-600">
        {Width} x {Height}
      </span>
    </div>
  );
}
