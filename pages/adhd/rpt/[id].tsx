import * as React from "react";
import UiSnapIvRpt from "../../../components/snapIv/UiSnapIvRpt";
import { useQuery } from "react-query";
import axios from "axios";
import { SnapIv } from "@prisma/client";
import Loading from "../../../components/shared/Loading";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { IProps } from "../../../interfaces/IProps";

interface IRptSnapIvProps extends IProps {
  id: string;
}

const RptSnapIv: React.FunctionComponent<IRptSnapIvProps> = ({
  id,
  setIsMainLoading,
}) => {
  const {
    data: snapiv,
    error,
    isFetching,
  } = useQuery(["snapiv", id], () => axios.get<SnapIv>(`/api/Adhd/${id}`), {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setIsMainLoading(false);
  }, [setIsMainLoading]);

  if (error) {
    return (
      <Loading text="Houve um problema no carregamento dos dados! Tente limpar o cache e preencher novamente." />
    );
  }

  return isFetching ? (
    <Loading />
  ) : (
    <div
      className="m-auto w-screen overflow-auto print-w"
      style={{ minWidth: "920px", width: "98vw" }}
    >
      <UiSnapIvRpt snapIv={snapiv?.data} />
    </div>
  );
};

export default RptSnapIv;

// export async function getStaticPaths({ id }: { id: string }) {
//   return {
//     paths: [
//       { params: { id } },
//     ],
//     fallback: true // See the "fallback" section below
//   };
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { id: context?.query?.id },
  };
};
