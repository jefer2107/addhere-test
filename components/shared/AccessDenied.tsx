import { signIn } from "next-auth/react";
import * as React from "react";

export interface IAccessDeniedProps {}

const AccessDenied: React.FC<IAccessDeniedProps> = ({}) => {
  return (
    <div className="text-center flex flex-col m-auto w-96 pt-40 h-auto overflow-hidden align-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 m-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="rgb(30, 64, 175)"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
      <div className="text-2xl font-semibold text-blue-800">
        Utilize o botão{" "}
        <button type="button" onClick={() => signIn()}>entrar</button> para fazer seu login!
      </div>
    </div>
  );
};

export default AccessDenied;
