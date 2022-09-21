import { IVulnerability } from "../../interfaces/ivulnerability";

export const vulnerabilities = [
  {
    title: "BAIXA",
    description: "Vulnerabilidade Clínico-Funcional",
    minScore: 0,
    maxScore: 6,
    css: "baixa",
  } as IVulnerability,
  {
    title: "MODERADA",
    description: "Vulnerabilidade Clínico-Funcional",
    minScore: 7,
    maxScore: 14,
    css: "moderada",
  } as IVulnerability,
  {
    title: "ALTA",
    description: "Vulnerabilidade Clínico-Funcional",
    minScore: 15,
    maxScore: null,
    css: "alta",
  } as IVulnerability,
];
