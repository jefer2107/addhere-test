import * as React from "react";

import { getSession, useSession } from "next-auth/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { IProps } from "../../../../interfaces/IProps";
import { snapIvGet } from "../../../../utils/api/snapiv";
import { GetServerSideProps } from "next";
import TiledAlert from "../../../../components/shared/TiledAlert";
import { SnapIv } from "@prisma/client";
import YouTube from "react-youtube";

export interface IGuidanceProps extends IProps {
  snapiv: SnapIv;
}

const GuidancePage: FC<IGuidanceProps> = ({
  title,
  setTitle,
  search,
  setShowMenu,
  setShowSearch,
  setShowLogoBar,
  setIsMainLoading,
  snapiv,
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
  const handleRptClick = (e: any) => {};
  const handleNewClick = (e: any) => {};

  return (
    <div className="lg:mt-2 md:mt-2 sm:mt-0 lg:mx-4 sm:mx-0 md:mx-2 bg-gray-100 w-full overflow-hidden h-screen">
      <div className="lg:mt-4 md:mt-4 sm:mt-0 p-4 bg-white mx-auto max-w-md overflow-hidden h-screen">
        <GuidanceHeader onClick={handleBack}></GuidanceHeader>
        <div className="overflow-y-auto h-full mt-2">
          <TiledAlert
            className="w-full pt-4"
            title="Atenção"
            message="Essa avaliação NÃO é um diagnóstico. Para compreender as potenciais suspeições observadas, siga as orientações dos vídeos."
          ></TiledAlert>

          <div className="mx-auto pt-6 w-full flex flex-col space-y-1">
            <Title>Orientação Geral:</Title>
            <SubTitle>
              Esse vídeo ensinará como interpretar os resultados de suspeição de
              sintomas identificados pelo Aplicativo.
            </SubTitle>

            <Video className="py-4 w-full" videoId="2fZYnWUmieQ"></Video>

            <Title>Suspeição de Hiperatividade:</Title>
            <SubTitle>
              Foi sinalizada uma suspeição de Hiperatividade. O que isso
              significa?
            </SubTitle>
            <Video className="py-4" videoId="v0puLddkGz4"></Video>

            <Title>Suspeição de Desatenção:</Title>
            <SubTitle>
              Foi sinalizada uma suspeição de Desatenção. O que isso significa?
            </SubTitle>
            <Video className="py-4" videoId="2fZYnWUmieQ"></Video>

            <Title>Como podemos confirmar o diagnóstico?</Title>
            <SubTitle>
              Conheça o processo para se obter uma confirmação, bem como um
              laudo médico. Há opções no SUS e também de forma particular que
              serão explicadas.
            </SubTitle>
            <Video className="py-4" videoId="2fZYnWUmieQ"></Video>
            <Title>O que esperar da Escola?</Title>
            <SubTitle>
              Saiba quais são as medidas que sua escola pode adotar para
              melhorar a qualidade de vida da criança até o diagnóstico.
            </SubTitle>
            <Video className="py-4" videoId="2fZYnWUmieQ"></Video>
            <Title>Recomendações para a família:</Title>
            <SubTitle>O que você já poderia fazer em casa?</SubTitle>
            <Video className="py-4" videoId="2fZYnWUmieQ"></Video>
            <div className="h-56"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidancePage;

export const GuidanceHeader: FC<{ onClick: any }> = ({ onClick }) => {
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
        Agora apresentamos orientações importantes e que são ligadas aos
        principais sintomas percebidos.
      </span>
    </div>
  );
};

export const Title: FC<{
  className?: string;
  children: any;
}> = ({ className, children }) => {
  return (
    <span className="text-2xl pt-9 font-medium text-blue-700">{children}</span>
  );
};

export const SubTitle: FC<{
  className?: string;
  children: any;
}> = ({ className, children }) => {
  return (
    <span className="text-base py-2 font-normal text-gray-700">{children}</span>
  );
};

export const Video: FC<{
  videoId: string;
  className: string;
}> = ({ videoId, className }) => {
  const opts = {
    height: "280",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1 as 0 | 1,
    },
  };
  const handleOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <div className={className}>
      <YouTube videoId={videoId} opts={opts} onReady={handleOnReady} />
    </div>
  );
};

export const BottomBar: FC<{
  onRptClick: any;
  onNewClick: any;
  patientId: number;
}> = ({ onRptClick, onNewClick, patientId }) => {
  return (
    <div className="flex flex-row w-full px-4 py-1 fixed bottom-4">
      <Link href={`/adhd/${patientId}`}>
        <a className="my-auto flex-1 text-purple-700">Nova Avaliação</a>
      </Link>
      <button
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
      snapiv: {},
    },
  };
};
