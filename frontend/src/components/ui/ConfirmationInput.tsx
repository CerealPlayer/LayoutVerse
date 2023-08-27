import { ChangeEventHandler, useState } from "react";
import Check from "../icons/Check";
import X from "../icons/X";

interface Props {
  name?: string;
  type?: string;
  value?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  onConfirm?: (newValue: string) => void;
  onCancel?: () => void;
}

export default function ConfirmationInput({
  name,
  type,
  value,
  initialValue,
  onChange,
  onConfirm,
  onCancel,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(initialValue || "");

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex items-center justify-between gap-4 my-2">
      <input
        type={type}
        name={name}
        value={value || inputValue}
        onChange={(e) => {
          if (!isEditing) setIsEditing(true);
          if (onChange) {
            onChange(e.target.value);
            return;
          }
          changeHandler(e);
        }}
        className="border-b-2 border-transparent transition-all ease-out duration-200 flex items-center justify-center overflow-hidden focus:outline-none focus:border-blue-500 focus-within:outline-none focus-within:border-blue-500 outline-none hover:border-blue-300"
      />
      {isEditing && (
        <>
          <button
            onClick={() => {
              try {
                onConfirm && onConfirm(inputValue);
                setIsEditing(false);
              } catch {}
            }}
          >
            <Check />
          </button>
          <button
            onClick={() => {
              if (onCancel) {
                onCancel()
              };
              setInputValue(initialValue || "");
              setIsEditing(false);
            }}
          >
            <X />
          </button>
        </>
      )}
    </div>
  );
}
