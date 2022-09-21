import * as React from "react";

interface ITopBarProps {
  title: string;
  onClick?: (e) => void;
}

const TopBar: React.FunctionComponent<ITopBarProps> = ({ title, onClick }) => {
  return (
    <div className="inline-flex w-full mx-2 mt-2">
      {onClick && (
        <button
          className="bg-transparent border-2 p-1 border-gray-50 rounded-md mr-5 hover:text-indigo-900 text-indigo-400"
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <div className="w-auto m-auto text-gray-900 font-bold text-lg items-center justify-center">
        {title}
      </div>
      <div className="w-16"></div>
    </div>
  );
};

export default TopBar;
