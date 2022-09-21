import * as React from "react";
import { SnapIv } from "@prisma/client";
import { FC } from "react";
import { EnSnapIvDisability } from "../../enum/en-snapiv-disability.enum";
import { IDisability } from "../../interfaces/idisability";
import UiSnapIvCarePlan from "./UiSnapIvCarePlan";
import UiSnapIvHeader from "./UiISnapIvHeader";
import UiSnapIvIndicator from "./UiSnapIvIndicator";
import { vulnerabilities } from "../../utils/data/vulnerabilities";
import Loading from "../shared/Loading";
import UiSnapIvScore from "./UiSnapIvScore";
// import classes from "../../styles/snapIv20/UiSnapIvRpt.module.css";

export interface IUiSnapIvRptProps {
  snapIv: SnapIv | undefined;
}

const UiSnapIvRpt: FC<IUiSnapIvRptProps> = ({ snapIv }) => {
  if (!snapIv) {
    return <Loading text="Dados inválidos!" />;
  }
  const score = calculateScore(snapIv);
  const disabilitiesChecks = calculateDisabilitiesChecks(snapIv);
  const handleClick = (e: any) => window.print();
  return (
    <>
      <div className="pt-12 w-full min-w-full overflow-x-scroll sm:overflow-x-scroll md:overflow-x-scroll">
        <UiSnapIvHeader snapIv={snapIv}></UiSnapIvHeader>

        <UiSnapIvScore selectedScore={score}></UiSnapIvScore>

        <UiSnapIvIndicator
          score={score}
          disabilitiesChecks={disabilitiesChecks}
          vulnerabilities={vulnerabilities}
        ></UiSnapIvIndicator>

        <UiSnapIvCarePlan
          score={score}
          disabilitiesChecks={disabilitiesChecks}
          vulnerabilities={vulnerabilities}
        ></UiSnapIvCarePlan>
      </div>

      <button
        className="no-print fixed bottom-4 left-0 w-full h-12 bg-blue-700 text-white text-center font-semibold hover:bg-blue-400 hover:text-black"
        onClick={handleClick}
      >
        IMPRIMIR
      </button>
    </>
  );
};

export default UiSnapIvRpt;

const calculateScore = (snapIv: SnapIv): number | null => {
  try {
    return Number(pontuacaoFinalSnapIv(snapIv));
  } catch (error) {
    console.log("calculateScore", error.message);
  }
  return null;
};

const calculateDisabilitiesChecks = (snapIv: SnapIv): IDisability[] | null => {
  try {
    return [
      {
        enSnapIvDisability: EnSnapIvDisability.idade,
        checked: pontuacaoIdade_V2368_e_V2369(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.percepcao,
        checked: pontuacaoAutoPercepcao(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.avdi,
        checked: pontuacaoAVDInstrumental_V_2380V_2381V_2383(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.avdb,
        checked: pontuacaoAVDBasica_V_2419(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.cognicao,
        checked: pontuacaoCognicao(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.humor,
        checked: pontuacaoHumor(snapIv) > 0,
      } as IDisability,

      // GRUPO MOBILIDADE
      {
        enSnapIvDisability: EnSnapIvDisability.mobilidade,
        checked:
          pontuacaoMembrosSuperiores(snapIv) > 0 ||
          pontuacaoSarcopenia(snapIv) > 0 ||
          pontuacaoMarcha(snapIv) > 0 ||
          pontuacaoContinencia(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.mmss,
        checked: pontuacaoMembrosSuperiores(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.sarcopenia,
        checked: pontuacaoSarcopenia(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.marcha,
        checked: pontuacaoMarcha(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.continencia,
        checked: pontuacaoContinencia(snapIv) > 0,
      } as IDisability,

      // GRUPO COMUNICACAO
      {
        enSnapIvDisability: EnSnapIvDisability.comunicacao,
        checked: pontuacaoAudicao(snapIv) > 0 || pontuacaoVisao(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.visao,
        checked: pontuacaoVisao(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.audicao,
        checked: pontuacaoAudicao(snapIv) > 0,
      } as IDisability,

      // GRUPO COMORBIDADE
      {
        enSnapIvDisability: EnSnapIvDisability.comorbidade,
        checked: pontuacaoComorbidade(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.polifarmacia,
        checked: pontuacaoPolifarmacia(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.internacao,
        checked: pontuacaoInternacao(snapIv) > 0,
      } as IDisability,
      {
        enSnapIvDisability: EnSnapIvDisability.polipatologia,
        checked: pontuacaoPolipatologia(snapIv) > 0,
      } as IDisability,
    ];
  } catch (error) {
    console.log("calculateDisabilitiesChecks", error.message);
  }
  return null;
};

export const calculateAge = (birthday: Date | null): number => {
  if (!birthday) {
    return 0;
  }
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  return age <= 125 ? age : 0;
};

const pontuacaoIdade_V2368_e_V2369 = (snapIv: SnapIv): number => {
  const dt = new Date(
    (snapIv.attentionOnLeisureId || "1950-01-01")?.toString()
  );
  const age = calculateAge(dt);
  if (age <= 74) {
    return 0;
  } else if (age >= 75 && age <= 84) {
    return 1;
  } else {
    return 3;
  }
};

const pontuacaoAutoPercepcao = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 1 : 0;
  return pt1;
};

const pontuacaoAVDInstrumental_V_2380V_2381V_2383 = (
  snapIv: SnapIv
): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 4 : 0;
  const pt2 = snapIv.attentionOnLeisureId ? 4 : 0;
  const pt3 = snapIv.attentionOnLeisureId ? 4 : 0;
  return Math.max(pt1, pt2, pt3);
};

const pontuacaoAVDBasica_V_2419 = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 6 : 0;
  return pt1;
};

const pontuacaoCognicao = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 1 : 0;
  const pt2 = snapIv.attentionOnLeisureId ? 1 : 0;
  const pt3 = snapIv.attentionOnLeisureId ? 2 : 0;
  return pt1 + pt2 + pt3;
};

const pontuacaoHumor = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 2 : 0;
  const pt2 = snapIv.attentionOnLeisureId ? 2 : 0;
  return pt1 + pt2;
};

const pontuacaoMembrosSuperiores = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 1 : 0;
  const pt2 = snapIv.attentionOnLeisureId ? 1 : 0;
  return pt1 + pt2;
};

const pontuacaoSarcopenia = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 2 : 0;
  const pt2 = snapIv.attentionOnLeisureId ? 2 : 0;
  const pt3 = snapIv.attentionOnLeisureId ? 2 : 0;
  const pt4 = snapIv.attentionOnLeisureId ? 2 : 0;
  return Math.max(pt1, pt2, pt3, pt4);
};

const pontuacaoMarcha = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 2 : 0;
  const pt2 = snapIv.attentionOnLeisureId ? 2 : 0;
  return pt1 + pt2;
};

const pontuacaoContinencia = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 2 : 0;
  return pt1;
};

const pontuacaoVisao = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 2 : 0;
  return pt1;
};

const pontuacaoAudicao = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 2 : 0;
  return pt1;
};

const pontuacaoComorbidade = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 4 : 0;
  const pt2 = snapIv.attentionOnLeisureId ? 4 : 0;
  const pt3 = snapIv.attentionOnLeisureId ? 4 : 0;
  return Math.max(pt1, pt2, pt3);
};

const pontuacaoPolipatologia = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 4 : 0;
  return pt1;
};
const pontuacaoInternacao = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 4 : 0;
  return pt1;
};
const pontuacaoPolifarmacia = (snapIv: SnapIv): number => {
  const pt1 = snapIv.attentionOnLeisureId ? 4 : 0;
  return pt1;
};

const pontuacaoFinalSnapIv = (snapIv: SnapIv): number => {
  return [
    pontuacaoComorbidade,
    pontuacaoVisao,
    pontuacaoAudicao,
    pontuacaoContinencia,
    pontuacaoMarcha,
    pontuacaoSarcopenia,
    pontuacaoMembrosSuperiores,
    pontuacaoHumor,
    pontuacaoCognicao,
    pontuacaoAVDBasica_V_2419,
    pontuacaoAVDInstrumental_V_2380V_2381V_2383,
    pontuacaoAutoPercepcao,
    pontuacaoIdade_V2368_e_V2369,
  ].reduce((total, func) => total + func(snapIv), 0);
};
