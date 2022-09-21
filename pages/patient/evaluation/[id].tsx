import * as React from "react";

import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { IProps } from "../../../interfaces/IProps";
import { prisma } from "../../../pages/api/auth/[...nextauth]";
import { Patient } from "@prisma/client";
import { GetServerSideProps } from "next";
import { GlobalService } from "../../../utils/global.service";

const glb = new GlobalService();

export interface IPatientListProps extends IProps {
  patient: any;
  patientId: number;
}

const PatientEvaluations: FC<IPatientListProps> = ({
  title,
  setTitle,
  search,
  setShowMenu,
  setShowSearch,
  setShowLogoBar,
  setIsMainLoading,
  patient,
  patientId
}) => {
  const router = useRouter();
  const [session, loading] = useSession();

  const userId = session ? (session.user as any)?.id : null;

  useEffect(() => {
    setIsMainLoading(false);
    setTitle("Avaliações");
    setShowMenu(false);
    setShowSearch(false);
    setShowLogoBar(false);
  }, [setIsMainLoading, setTitle, setShowMenu, setShowSearch, setShowLogoBar]);
  const handleAddClick = (e) => {
    router.push(`/adhd/${patientId}`);
  };
  const handleBackClick = (e) => {
    router.back();
  };
  const handleEvaluationClick = (e) => {};
  return (
    <div className="bg-yellow-500 overflow-hidden font-sans text-2xl font-medium text-white flex-col h-full mt-0 pt-0">
      <NakedTopBar onBackClick={handleBackClick} className="flex-none" title={title}></NakedTopBar>

      <PatientHeader
        className="flex-none"
        name="D.C.M."
        image="/img/child-01.png"
        age={11}
      ></PatientHeader>

      <div className="flex-grow bg-white rounded-3xl h-100 min-h-96 overflow-y-auto">
        <div className="m-2 pt-4 mb-24">
          {[
            {
              role: "Professora",
              professional: "Luísa Trajano",
              dtEvaluation: new Date(),
            },
            {
              role: "Pai",
              professional: "Rui Barbosa",
              dtEvaluation: new Date(),
            },
            {
              role: "Neuropsicóloga",
              professional: "Anita Malfati",
              dtEvaluation: new Date(),
            },
          ].map(({ role, professional, dtEvaluation }) => (
            <Evaluation
              role={role}
              professional={professional}
              dtEvaluation={dtEvaluation}
              onClick={handleEvaluationClick}
            ></Evaluation>
          ))}
        </div>
      </div>
      <AddButton onClick={handleAddClick}></AddButton>
    </div>
  );
};

export default PatientEvaluations;

export const NakedTopBar: FC<{ title: string; className: string, onBackClick: any }> = ({
  title,
  className,
  onBackClick
}) => {
  return (
    <div className={className}>
      <div className="flex flex-row h-14 p-2">
        <button
          onClick={onBackClick}
          type="button"
          className="px-2.5 py-3 ml-4 w-10 border focus:ring-0 rounded-md hover:bg-purple-600  text-white outline-none shadow-lg transform active:scale-75 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <span className="inline-block flex-grow align-middle text-center justify-center text-3xl w-full">
          {title}
        </span>
      </div>
    </div>
  );
};

export const AddButton: FC<{ onClick: any }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="z-50 rounded-full w-14 h-14 fixed bottom-4 right-2 focus:ring-0 hover:ring-0 focus-within:ring-0 focus:border-0 bg-yellow-500 hover:bg-gray-400 hover:border-0 text-gray-100 font-bold py-2 px-4 inline-flex items-center"
    >
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
          strokeWidth={3}
          d="M12 4v16m8-8H4"
        />
      </svg>
    </button>
  );
};

export const PatientHeader: FC<{
  name: string;
  image: string;
  className: string;
  age: number;
}> = ({ name, age, image, className }) => {
  return (
    <div className={className}>
      <div className="bg-confetti bg-no-repeat bg-center h-72 object-center align-middle justify-center text-center w-full">
        <div className="pt-7 pb-8 flex flex-row object-none object-center justify-center align-middle content-center">
          <span className="mr-3 mt-1 text-3xl inline-block align-middle">
            {name}
          </span>
          <span className="mr-3 mt-1 text-3xl text-gray-200 inline-block align-middle">
            {age} anos
          </span>
        </div>

        <img
          className="h-36 w-36 m-auto object-center text-center align-middle justify-center rounded-full ring-4 ring-purple-100"
          src={image}
          alt={name}
        ></img>
      </div>
    </div>
  );
};

export const Evaluation: FC<{
  role: string;
  professional: string;
  dtEvaluation: Date;
  onClick: any;
}> = ({ role, professional, dtEvaluation, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="hover:bg-yellow-100 px-5 mb-3 flex border border-yellow-300 border-2 rounded-2xl h-32"
    >
      <div className=" pb-4 flex-grow flex-col space-x-2 my-auto py-2 text-lg">
        <div className="flex space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-none h-10 w-10 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="rgba(245, 158, 11)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <div className="ml-2 flex-none mr-2 text-yellow-500 font-bold text-3xl inline-block align-middle">
            {glb.FormatDateHour(dtEvaluation, 'dd " " M3 " " yyyy')}
          </div>
        </div>

        <div className="flex pt-2 space-x-1 text-sm ">
          <div className="flex-none w-32 text-gray-500 font-normal">{role}</div>
          <div className="flex-1 text-gray-900 font-semibold">
            {professional}
          </div>
        </div>
      </div>

      <div className="w-4 my-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="rgba(245, 158, 11)"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // const patient = await prisma.patient.findUnique({
  //   where: {
  //     id: Number(params?.id) || -1,
  //   },
  //   // include: {
  //   //   author: {
  //   //     select: { name: true, email: true },
  //   //   },
  //   // },
  // });
  return {
    props: { patientId: query.id, patient: {} }
  };
};
