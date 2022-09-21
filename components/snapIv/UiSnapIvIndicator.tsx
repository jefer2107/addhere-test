import * as React from "react";
import { IDisability } from "../../interfaces/idisability";
import { IVulnerability } from "../../interfaces/ivulnerability";
import { disabilities } from "../../utils/data/disabilities";
import classes from "../../styles/snapIv/UiSnapIvIndicator.module.css";

interface IUiSnapIvIndicatorProps {
  score: any;
  disabilitiesChecks: IDisability[] | null;
  vulnerabilities: any[];
}

const UiSnapIvIndicator: React.FunctionComponent<IUiSnapIvIndicatorProps> = ({
  score,
  disabilitiesChecks,
  vulnerabilities,
}) => {
  checkDisabilities(disabilitiesChecks, disabilities);
  return (
    <>
      <div className={`${classes.base} ${classes.container}`}>
        {vulnerabilities.map((vulnerability, key) => (
          <div
            key={key}
            className={`${classes.base} ${classes[vulnerability?.css]} ${
              isVulnerabilityChecked(vulnerability, score)
                ? classes.checked
                : null
            }`}
          >
            <span className={classes.title}>{vulnerability?.title}</span>
            <span className={classes.txt}>{vulnerability?.description}</span>
            {vulnerability?.maxScore && (
              <span className={classes.txt}>
                ({vulnerability?.minScore} a {vulnerability?.maxScore} pontos)
              </span>
            )}
            {!vulnerability?.maxScore && (
              <span className={classes.txt}>
                (≥ {vulnerability?.minScore} pontos)
              </span>
            )}
          </div>
        ))}
      </div>

      <div className={`${classes.base} ${classes.container2}`}>
        {disabilitiesChecks?.map((disability, key) => (
          <div
            key={key}
            className={`${classes.base} ${classes.disability} ${
              classes[disability?.css]
            } ${disability?.checked ? classes.checked : null}`}
          >
            {disability?.enSnapIvDisability}
          </div>
        ))}
      </div>
    </>
  );
};

export default UiSnapIvIndicator;

// private _disabilitiesChecks: IDisability[];
// public get disabilitiesChecks(): IDisability[] {
//   return this._disabilitiesChecks;
// }
// @Input()
// public set disabilitiesChecks(v: IDisability[]) {
//   this._disabilitiesChecks = v;
//   this.checkDisabilities(v);
// }

const checkDisabilities = (
  disabilitiesCheck: IDisability[] | null,
  disabilities: IDisability[]
): void => {
  try {
    disabilitiesCheck?.forEach((e) => {
      const item = disabilities.find(
        (i) => i.enSnapIvDisability === e.enSnapIvDisability
      );
      if (item) {
        item.checked = e.checked;
      }
      e.css = item.css || null;
    });
  } catch (error) {
    console.log("checkDisabilities", error.message);
  }
};

const isVulnerabilityChecked = (
  vulnerability: IVulnerability,
  score: number
): boolean => {
  try {
    if (!vulnerability) {
      return false;
    }
    return (
      ((vulnerability?.minScore || 0) <= score &&
        (vulnerability?.maxScore || 40) >= score) ||
      (vulnerability?.maxScore === null &&
        score >= (vulnerability?.minScore || 0))
    );
  } catch (error) {
    console.log("isVulnerabilityChecked", error.message);
  }
  return false;
};
