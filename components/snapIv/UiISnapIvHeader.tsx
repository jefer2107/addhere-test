import * as React from "react";
import classes from "../../styles/snapIv/UiSnapIvHeader.module.css";
import { calculateAge } from "./UiSnapIvRpt";

interface IUiSnapIvHeaderProps {
  snapIv: any;
}

const UiSnapIvHeader: React.FunctionComponent<IUiSnapIvHeaderProps> = ({
  snapIv,
}) => {
  return (
    <div className={classes.grid}>
      <div className={classes.clm}>
        <div className={classes.title}>Nome do Idoso:</div>
        <div className={classes.row}>{snapIv?.patientName || " "}</div>
        <div className={classes.title}>Médico de Referência:</div>
        <div className={classes.row}>{snapIv?.professionalName}</div>
        <div className={classes.title}>Questionário preenchido por:</div>
        <div className={classes.row}>{snapIv?.professionalType || " "}</div>
      </div>

      <div className={classes.clm}>
        <div className={classes.title}>Nome da Mãe:</div>
        <div className={classes.row}>{snapIv?.motherName || " "}</div>
        <div className={classes.title}>Sistema de Saúde:</div>
        <div className={classes.row}>{snapIv?.healthSystem || " "}</div>
        <div className={classes.title}>Plano de Saúde:</div>
        <div className={classes.row}>{snapIv?.healthInsurance || " "}</div>
      </div>

      <div className={classes.clm}>
        <div className={classes.title}>Data de Nascimento:</div>
        <div className={classes.row}>
          {new Date(snapIv?.birthbdate).toLocaleDateString()}
        </div>
        <div className={classes.title}>Idade:</div>
        <div className={classes.row}>
          {calculateAge(new Date(snapIv?.birthbdate || '1900-01-01')) || " "} anos
        </div>
        <div className={classes.title}>Data de Preenchimento:</div>
        <div className={classes.row}>
          {new Date(snapIv?.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default UiSnapIvHeader;
