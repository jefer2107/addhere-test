import * as React from "react";

import { getSession, useSession } from "next-auth/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { IProps } from "../../../../interfaces/IProps";
import { snapIvGet } from "../../../../utils/api/snapiv";
import { GetServerSideProps } from "next";

export interface IPredisposalProps extends IProps {
  patientId: number;
  snapIvId: number;
}

const PredisposalPage: FC<IPredisposalProps> = ({
  title,
  setTitle,
  search,
  setShowMenu,
  setShowSearch,
  setShowLogoBar,
  setIsMainLoading,
  patientId,
  snapIvId,
}) => {
  const router = useRouter();
  const [session, loading] = useSession();

  const userId = session ? (session.user as any)?.id : null;

  React.useEffect(() => {
    setIsMainLoading(false);
    setTitle("");
    setShowMenu(false);
    setShowSearch(false);
    setShowLogoBar(false);
  }, [setIsMainLoading, setTitle, setShowMenu, setShowSearch, setShowLogoBar]);
  const handleBack = (e: any) => {
    router.back();
  };
  const handleRptClick = (e: any) => {
    router.push(`/adhd/rpt/guidance/${snapIvId}`);
  };
  const handleNewClick = (e: any) => {};

  return (
    <div className="bg-gray-100 w-full">
      <div className="p-2 mx-auto mt-2 mr-6 max-w-md bg-white">
        <PredisposalHeader onClick={handleBack}></PredisposalHeader>
        <Bubbles className="mr-6 w-full"></Bubbles>
        <BottomBar
          className="max-w-md"
          onRptClick={handleRptClick}
          onNewClick={handleNewClick}
          patientId={patientId}
        ></BottomBar>
      </div>
    </div>
  );
};

export default PredisposalPage;

export const PredisposalHeader: FC<{ onClick: any }> = ({ onClick }) => {
  return (
    <div className="flex flex-col w-5/6 space-y-2 ml-2">
      <button
        onClick={onClick}
        type="button"
        className="flex-none px-2.5 py-3 w-10 border focus:ring-0 rounded-md hover:bg-purple-600  text-white outline-none shadow-lg transform active:scale-75 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="flex-none h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="rgba(109, 40, 217)"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      <span className="flex-none text-purple-700 font-semibold text-3xl pt-3">
        Sintomas em avaliação…
      </span>
      <span className="text-purple-700 font-light text-base">
        Na medida que as avaliações são preenchidas, o algoritmo faz ajustes nas
        percepções dos sintomas mais evidentes.
      </span>
    </div>
  );
};

export const Bubbles: FC<{ className: string }> = ({ className }) => {
  return (
    <div
      className={`${className} grid grid-cols-2 gap-4 sm:mt-12 md:mt-20 w-60 mx-auto`}
    >
      <Bubble
        className="col-start-2"
        bgColor="bg-pink-500"
        title="Hiperatividade"
        size="large"
        iconD="M13 10V3L4 14h7v7l9-11h-7z"
        x={20}
      ></Bubble>
      <Bubble
        className="col-start-2"
        x={5}
        bgColor="bg-yellow-300"
        color="text-gray-600"
        title="Desatenção"
        size="medium"
        iconD="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      ></Bubble>
      <Bubble
        className="col-start-2"
        x={16}
        disabled={false}
        bgColor="bg-blue-500"
        title="Oposição"
        size="large"
        iconD="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      ></Bubble>
      <Bubble
        className="col-start-1 row-start-2"
        x={15}
        disabled={true}
        bgColor="bg-blue-500"
        title="Autismo"
        size="large"
        iconD="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      ></Bubble>
      <Bubble
       className="col-start-1 row-start-3"
        x={20}
        disabled={true}
        bgColor="bg-blue-500"
        title="Impulsividade"
        size="large"
        iconD="M5 11l7-7 7 7M5 19l7-7 7 7"
      ></Bubble>
    </div>
  );
};
export const Bubble: FC<{
  bgColor: string;
  color?: string;
  title: string;
  size: string;
  iconD: string;
  x?: number | null;
  disabled?: boolean;
  className?: string;
}> = ({ bgColor, title, size, iconD, color, x, disabled, className }) => {
  color = disabled ? "text-gray-500" : color || "text-white";
  size = disabled ? "medium" : size;
  const iconColor = disabled ? "rgb(200, 200, 200)" : "white";
  const sz = size === "large" ? 32 : size === "medium" ? 20 : 16;
  const iconSize = size === "large" ? 12 : size === "medium" ? 10 : 8;
  const txtSize =
    size === "large" ? "text-base" : size === "medium" ? "text-xs" : "text-xs";
  const ml = `mr-${x}`;
  disabled = disabled || false;
  bgColor = disabled ? "transparent" : bgColor;
  const border = disabled ? "border border-solid border-gray-300" : "";
  return (
    <div className={className}>
      <div
        className={`${ml} mb-2 m-auto rounded-full ${border} ${bgColor} w-${sz} h-${sz} ${txtSize} flex items-center flex-col space-x-0`}
      >
        <div className="my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-${iconSize} w-${iconSize} my-0 mx-auto pb-2`}
            fill="none"
            viewBox="0 0 24 24"
            stroke={iconColor}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d={iconD}
            />
          </svg>
          <span className={`${color} ${txtSize} mt-0 pt-0`}>{title}</span>
        </div>
      </div>
    </div>
  );
};

export const BottomBar: FC<{
  onRptClick: any;
  onNewClick: any;
  patientId: number;
  className: string;
}> = ({ onRptClick, onNewClick, patientId, className }) => {
  return (
    <div
      className={`${className} flex flex-row w-full px-4 py-1 fixed bottom-4`}
    >
      <Link href={`/adhd/${patientId}`}>
        <a className="my-auto flex-1 text-purple-700">Nova Avaliação</a>
      </Link>
      <button
        onClick={onRptClick}
        type="button"
        className="flex-1 flex py-3 px-2.5 rounded-lg mr-2 w-full border focus:ring-0 hover:bg-purple-600 bg-purple-800  text-white outline-none shadow-lg transform active:scale-75 transition-transform"
      >
        <span className="my-auto w-full text-white mr-2">Recomendações</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const userId = session ? (session.user as any)?.id : null;
  const snapiv = await snapIvGet(+context.query.id, userId);
  return {
    props: {
      patientId: snapiv.patientId,
      snapIvId: snapiv.id,
    },
  };
};
