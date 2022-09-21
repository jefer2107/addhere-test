import React, { useEffect } from "react";

import { Formik, Form } from "formik";
import { IProps } from "../../interfaces/IProps";
import { ComponentField } from "../../components/shared/MultiFields";
import { makeStyles, useTheme } from "@material-ui/core";
import { useMutation } from "react-query";
import axios from "axios";
import Loading from "../../components/shared/Loading";
import AccessDenied from "../../components/shared/AccessDenied";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { snapIvFields } from "../../utils/data/snapIvFields";
import { SnapIv } from "@prisma/client";

import Button from "@material-tailwind/react/Button";

export interface ISnapIvProps extends IProps {
  hydratedSnapIvFields: {
    name: string;
    type: string;
    placeholder: string;
    dataSource?: { value: number; label: string }[];
    labelNo?: undefined;
    labelYes?: undefined;
  }[];
  patientId: number;
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
    height: "auto",
    background: theme.palette.grey[100],
    padding: 20,
  },
}));

const SnapIvPage: React.FC<ISnapIvProps> = ({
  hydratedSnapIvFields,
  title,
  setTitle,
  search,
  setShowMenu,
  setShowSearch,
  setIsMainLoading,
  setShowLogoBar,
  patientId,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  // Atenção: esse use session tem que ser o do next ou não terá completado os dado
  const [session, loading] = useSession();
  const router = useRouter();
  const userId = session ? (session.user as any)?.id : null;
  const professionalName = session ? (session.user as any)?.name : null;
  useEffect(() => {
    setIsMainLoading(false);
    setTitle("Questionário");
    setShowMenu(false);
    setShowSearch(false);
    setShowLogoBar(true);
  }, [setIsMainLoading, setTitle, setShowMenu, setShowSearch, setShowLogoBar]);

  const mutation = useMutation(
    (snapIv: SnapIv) => {
      snapIv.patientId = +patientId;
      snapIv.score = 0;
      return axios.put(`/api/snapiv/${userId}`, snapIv);
    },
    {
      onSuccess: (snapIv) =>
        router.push(`/adhd/rpt/predisposal/${snapIv?.data?.id || -1}`),
    }
  );

  if (loading) return <Loading />;

  if (!loading && !session) return <AccessDenied />;

  return (
    <div
      className={`${classes.container} max-w-6xl m-auto sm:px-0 md:px-5 lg:px-10`}
    >
      <div className="text-center text-2xl font-medium text-gray-900 my-6">
        Avaliação de Transtornos de Neurodesenvolvimento
      </div>
      {/* <Alert color="gray" className="p-4 m-3">
        Olá, preencha as questões para gerar o relatório. Você deve responder
        &apos;SIM&apos; somente para os aspectos que o comportamento foi
        observado. Isso significa que o indivíduo irá pontuar (e quanto mais
        pontos, maior a suspeição) para cada uma das intensidades.
      </Alert> */}
      <Formik
        initialValues={{
          userId,
          patientId,
          professionalName,
          professionalType: "",
          companyName: "",
          state: "",
          city: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          turnWaitingId: 1,
          rushToAnswerId: 1,
          nonStoppableId: 1,
          inquietudeId: 1,
          runningId: 1,
          classroomLeavesId: 1,
          feetHandsMovementId: 1,
          workMemoryDeficitId: 1,
          distractionOnStimuliId: 1,
          toolsLostId: 1,
          difficultOnMentalEffortId: 1,
          difficultOnOrganizingId: 1,
          followInstructionsId: 1,
          attentionOnListeningId: 1,
          attentionOnLeisureId: 1,
          attentionToDetailsId: 1,
          notes: "",
        }}
        validate={(values) => {
          const errors = {} as any;

          // if (!values.email) {
          //   errors.email = "Required";
          // } else if (
          //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          // ) {
          //   errors.email = "Invalid email address";
          // }

          return errors;
        }}
        onSubmit={(values: any, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setIsMainLoading(true);
            mutation.mutate(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <div className="w-full flex flex-col overflow-hidden">
              {hydratedSnapIvFields.map((m, key) => (
                <div
                  className={`${
                    m.type === "hidden" ? "hidden" : null
                  } m-4 pb-5 border-dashed border-opacity-30 border-2  border-green-400`}
                  key={key}
                >
                  <ComponentField
                    name={m.name}
                    type={m.type}
                    placeholder={m.placeholder}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    dataSource={m.dataSource || []}
                    labelYes={m.labelYes || "Sim"}
                    labelNo={m.labelNo || "Não"}
                  />
                </div>
              ))}
            </div>
            <Button
              className="z-50 inset-x-0 mx-auto text-center w-full max-w-5xl items-center"
              type="submit"
              onSubmit={handleSubmit}
              color="lightGreen"
              ripple="light"
              disabled={isSubmitting}
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SnapIvPage;

export async function getServerSideProps({ query }) {
  try {
    // const companies_res = await getCompanyAll();
    // const companies = companies_res.map((company) => ({
    //   label: company.name,
    //   value: company.id,
    // }));
    // const snapIv = snapIvFields.map((field) => {
    //   return field.name === "companyId"
    //     ? { ...field, dataSource: companies }
    //     : field;
    // });
    return {
      props: {
        hydratedSnapIvFields: snapIvFields,
        patientId: query.id,
      },
    };
  } catch (e) {
    console.log(e);
  }
  return {
    props: { hydratedSnapIvFields: [] },
  };
}
