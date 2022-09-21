import * as React from "react";
import { useState } from "react";
import IconStar from "./IconStart";
import ModalQuestion from "./ModalQuestion";

export interface ISelectButtonProps {
  title: string;
  detail: string;
  score: number;
  question: number;
  numOfQuestions: number;
  onClick: (e, question, score) => void;
}

const SelectButton: React.FC<ISelectButtonProps> = ({
  title,
  detail,
  score,
  question,
  numOfQuestions,
  onClick,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedScore, setSelectedScore] = useState(score);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleConfirm = (e, score) => {
    e.preventDefault();
    setOpen(false);
    setSelectedScore(score);
    onClick(e, question, score);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <>
      <div
        className="rounded-3xl h-32  border-b border-blue-500 ring-offset-black border-b-8"
        style={{ borderBottomWidth: "10px" }}
      >
        <div className="flex-auto flex-row w-full h-full">
          <a
            href="#"
            onClick={handleClick}
            className="w-full overflow-y-hidden lg:text-2xl font-medium sm:text-sm md:text-base font-sans h-full inline-flex items-center justify-left px-5 py-3 border border-transparent rounded-2xl  text-white hover:bg-blue-400 hover:text-white"
            style={{ backgroundColor: "#85D3E6" }}
          >
            <div className="grid grid-cols-6 gap-4 w-full h-full">
              <div className="col-span-4 items-center my-auto">{title}</div>

              <div className="col-span-2 w-full items-center justify-end flex">
                <div className="inline-flex items-center">
                  {[...Array(4)].map((x, i) => (
                    <IconStar
                      key={`icon-star-${i}`}
                      isSelected={selectedScore - 1 >= i}
                      stroke="black"
                    />
                  ))}
                  <div className="text-sm ml-2 text-yellow-600">
                    {question ? `${question}/` : ""}
                    {numOfQuestions || ""}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      {open && (
        <ModalQuestion
          title={title}
          detail={detail}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default SelectButton;
