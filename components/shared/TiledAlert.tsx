import * as React from "react";

interface ITiledAlertProps {
  message: string;
  title: string;
  setVisible?: any;
  timer?: number;
  className?: string;
}

const TiledAlert: React.FunctionComponent<ITiledAlertProps> = ({
  title,
  message,
  setVisible,
  timer,
  className,
}) => {
  timer = timer ? (timer < 1000 ? timer * 1000 : timer) : null;
  if (timer) {
    setTimeout(() => setVisible(false), timer);
  }
  return (
    <div role="alert" className={`${className}`}>
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        {title}
      </div>
      <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default TiledAlert;
