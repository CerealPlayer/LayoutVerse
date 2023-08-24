import classnames from "classnames";

interface Props {
  vertical?: boolean;
}

export function SplitBtn({ vertical }: Props) {
  const className = classnames(
    "w-6 h-6 flex items-center justify-center overflow-hidden bg-neutral-200 rounded-md hover:bg-neutral-300 active:bg-neutral-400 transition-all duration-200 ease-out",
    {
      "rotate-90": !vertical,
    }
  );
  return (
    <button className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-border-horizontal"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 12l16 0" />
        <path d="M4 4l0 .01" />
        <path d="M8 4l0 .01" />
        <path d="M12 4l0 .01" />
        <path d="M16 4l0 .01" />
        <path d="M20 4l0 .01" />
        <path d="M4 8l0 .01" />
        <path d="M12 8l0 .01" />
        <path d="M20 8l0 .01" />
        <path d="M4 16l0 .01" />
        <path d="M12 16l0 .01" />
        <path d="M20 16l0 .01" />
        <path d="M4 20l0 .01" />
        <path d="M8 20l0 .01" />
        <path d="M12 20l0 .01" />
        <path d="M16 20l0 .01" />
        <path d="M20 20l0 .01" />
      </svg>
    </button>
  );
}
