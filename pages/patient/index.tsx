import { getSession, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import { IProps } from "../../interfaces/IProps";
import TiledAlert from "../../components/shared/TiledAlert";
import { getPatientsByUserId, getUser } from "../../utils/fetch-data";
import { GetServerSideProps } from "next";
import { Patient, User } from "@prisma/client";
import Loading from "../../components/shared/Loading";
import { GlobalService } from '../../utils/global.service';

import * as React from "react";

const glb = new GlobalService();
export interface IPatientListProps extends IProps {
  user: User;
  patients: Patient[];
}

const PatientList: FC<IPatientListProps> = ({
  title,
  setTitle,
  search,
  setShowMenu,
  setShowSearch,
  setShowLogoBar,
  setIsMainLoading,
  user,
  patients
}) => {
  const router = useRouter();
  const [alert, setAlert] = useState(false);

  const alertElement = useRef(null);

  useEffect(() => {
    setIsMainLoading(false);
    setTitle(roleId === 2 ? "Meus Alunos" : "Crianças");
    setShowMenu(false);
    setShowSearch(false);
    setShowLogoBar(false);
  }, [setIsMainLoading, setTitle, setShowMenu, setShowSearch, setShowLogoBar]);

  if (!user) return <Loading></Loading>;

  const { roleId } = user;

  const handleAddClick = (e) => {
    alertElement.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setAlert(true);
  };

  const handlePatientClick = (e: any, id: number) => {
    router.push(`/patient/evaluation/${id}`);
  };

  const handleBackClick = (e) => {
    router.back();
  };

  return (
    <>
      <div className="bg-indigo-600 overflow-hidden font-sans text-2xl font-medium text-white flex-col h-full mt-0 pt-0">
        <NakedTopBar
          className="flex-none"
          title={title}
          onBackClick={handleBackClick}
        ></NakedTopBar>

        <Responsible
          roleId={user.roleId}
          className="flex-none"
          name={`Olá, ${user.name}`}
          image={user.image}
        ></Responsible>

        <div className="flex-grow bg-white rounded-3xl h-100 min-h-96 overflow-y-auto">
          <div ref={alertElement}>
            {alert && (
              <TiledAlert
                title="Atenção"
                message="Não há permissão para criar novos alunos."
                setVisible={setAlert}
                timer={3}
              ></TiledAlert>
            )}
          </div>

          <div className="m-2 pt-4 mb-24">
            {
            // [
            //   {
            //     id: 1,
            //     image: "/img/child-01.png",
            //     name: "D.C.M.",
            //     age: 11,
            //     evaluation: 2,
            //     dtEvaluation: new Date(),
            //   },
            //   {
            //     id: 2,
            //     image: "/img/child-02.png",
            //     name: "J.G.S.",
            //     age: 11,
            //     evaluation: 3,
            //     dtEvaluation: new Date(),
            //   },
            //   {
            //     id: 3,
            //     image: "/img/child-03.png",
            //     name: "C.A.",
            //     age: 12,
            //     evaluation: 4,
            //     dtEvaluation: new Date(),
            //   },
            //   {
            //     id: 4,
            //     image: "/img/child-04.png",
            //     name: "L.P.C.M.",
            //     age: 9,
            //     evaluation: 2,
            //     dtEvaluation: new Date(),
            //   },
            // ]
            patients.map(({ id, image, name, birthDate }) => { 
              const age = birthDate ? glb.GetYearsOld(birthDate) : 0;
              const evaluation = 1;
              const dtEvaluation = new Date();
              return (
              <PatientItem
                id={id}
                image={image}
                name={name}
                age={age}
                evaluation={evaluation}
                dtEvaluation={dtEvaluation}
                onClick={handlePatientClick}
              ></PatientItem>
            );
            })
          }
          </div>
        </div>
      </div>
      <AddButton onClick={handleAddClick}></AddButton>
    </>
  );
};

export default PatientList;

export const NakedTopBar: FC<{
  title: string;
  className: string;
  onBackClick: any;
}> = ({ title, className, onBackClick }) => {
  return (
    <div className={className}>
      <div className="flex flex-row h-14 p-2">
        <button
          type="button"
          className="px-2.5 py-3 ml-4 w-10 border focus:ring-0 rounded-md hover:bg-purple-600  text-white outline-none shadow-lg transform active:scale-75 transition-transform"
          onClick={onBackClick}
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
      className="z-50 rounded-full w-14 h-14 fixed bottom-4 right-2 focus:ring-0 hover:ring-0 focus-within:ring-0 focus:border-0 bg-purple-300 hover:bg-gray-400 hover:border-0 text-gray-800 font-bold py-2 px-4 inline-flex items-center"
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

export const Responsible: FC<{
  name: string;
  image: string;
  className: string;
  roleId: number;
}> = ({ name, image, className, roleId }) => {
  let icon = "";
  switch (roleId) {
    case 1: // Responsável
      icon =
        "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z";
      break;
    case 2: // Professor
      icon =
        "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z";
      break;
    case 3: // "Profissional de Saúde"
      icon =
        "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z";
      break;
    case 4: // "Adm"
      icon =
        "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4";
      break;
    default:
      icon =
        "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z";
      break;
  }
  return (
    <div className={className}>
      <div className="bg-confetti bg-no-repeat bg-center h-72 object-center align-middle justify-center text-center w-full">
        <div className="pt-7 pb-8 flex flex-row object-none object-center justify-center align-middle content-center">
          <span className="mr-1 mt-1 text-3xl inline-block align-middle">
            {name}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1 h-8 w-9 inline-block align-top text-yellow-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d={icon} />
          </svg>
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

export const PatientItem: FC<{
  id: number;
  image: string;
  name: string;
  age: number;
  evaluation: number;
  dtEvaluation: Date;
  onClick: (e: any, id: number) => void;
}> = ({ id, image, name, age, evaluation, dtEvaluation, onClick }) => {
  return (
    <div
      onClick={(e) => onClick(e, id)}
      className="hover:bg-indigo-200 px-5 mb-3 flex border border-purple-300 border-2 rounded-2xl h-32"
    >
      <div className="flex-none mr-4 w-20 h-20 align-middle my-auto">
        <img
          className="h-20 w-20 m-auto object-center text-center align-middle justify-center rounded-full ring-4 ring-purple-100"
          src={image}
          alt={name}
        ></img>
      </div>

      <div className=" pb-4 flex-grow flex-col space-x-2 my-auto py-2 text-lg">
        <div className="flex space-x-1">
          <div className="flex-none mr-2 text-gray-900">{name}</div>
          <div className="flex-1 text-gray-500 font-light">{age} anos</div>
        </div>

        <div className="flex pt-2 space-x-1 text-sm">
          <div className="flex-none w-24 text-gray-500 font-normal">
            Avaliações
          </div>
          <div className="flex-1 text-gray-900 font-semibold">{evaluation}</div>
        </div>

        <div className="flex space-x-1 text-sm">
          <div className="flex-none w-24 text-gray-500 font-normal">
            Mais recente
          </div>
          <div className="flex-1 text-purple-900 font-semibold">
            {dtEvaluation.toLocaleDateString()}
          </div>
        </div>
      </div>

      <div className="w-4 my-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { user: {} } };
  }

  const userId = session ? (session.user as any)?.id : null;
  const user = await getUser(userId);

  const patients = await getPatientsByUserId(userId);

  return {
    props: { user, patients },
  };
};
