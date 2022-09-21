import { cities } from "./cities";
import { professionalTypes } from "./professionalTypes";
import { states } from "./states";

export const snapIvFields = [
  { name: "userId", type: "hidden", placeholder: "userId" },
  // { name: "patientName", type: "text", placeholder: "Nome do Paciente" },
  // { name: "motherName", type: "text", placeholder: "Nome da Mãe" },
  // { name: "birthdate", type: "date", placeholder: "Data de Nascimento" },
  // { name: "age", type: "number", placeholder: "Idade" },
  {
    name: "professionalType",
    type: "autocomplete",
    placeholder: "Questionário preenchido por:",
    dataSource: professionalTypes,
  },
  // {
  //   name: "referenceDoctor",
  //   type: "text",
  //   placeholder: "Médico de Referência",
  // },
  // {
  //   name: "healthInsurance",
  //   type: "autocomplete",
  //   placeholder: "Plano de Saúde",
  //   dataSource: healthInsurance,
  // },
  // { name: "companyId", type: "select", placeholder: "Escola/Clínica/Instituição" },
  { name: "companyName", type: "text", placeholder: "Escola/Clínica/Instituição" },
  { name: "state", type: "select", placeholder: "Estado", dataSource: states },
  {
    name: "city",
    type: "autocomplete",
    placeholder: "Cidade",
    dataSource: cities,
  },

  // score                     Float
  {
    name: "title1",
    type: "title",
    placeholder: "Responda as questões abaixo conforme seu melhor conhecimento e observações comportamentais do(a) aluno(a).",
  },
  {
    name: "turnWaitingId",
    type: "intensity",
    placeholder: "Tem dificuldade de esperar a vez dele(a):",
  },
  // {
  //   name: "turnWaitingId",
  //   type: "intensity",
  //   placeholder: "Tem dificuldade de esperar sua vez:",
  // },
  {
    name: "rushToAnswerId",
    type: "intensity",
    placeholder:
      "Responde às perguntas de forma precipitada, ou seja, antes de terem sido concluídas:",
  },
  {
    name: "nonStoppableId",
    type: "intensity",
    placeholder: 'Não pára ou frequentemente está a "mil por hora":',
  },
  {
    name: "inquietudeId",
    type: "intensity",
    placeholder:
      "Tem dificuldade para brincar ou se envolver calmamente em atividades de lazer:",
  },
  {
    name: "runningId",
    type: "intensity",
    placeholder:
      "Corre de um lado para outro ou \"sobe nas coisas\", em situações em que isto é inapropriado:",
  },
  {
    name: "classroomLeavesId",
    type: "intensity",
    placeholder:
      "Sai do lugar na sala de aula ou em outras situações em que se espera que fique sentado(a):",
  },
  {
    name: "feetHandsMovementId",
    type: "intensity",
    placeholder: "Mexe com as mãos ou os pés ou se remexe na cadeira:",
  },
  {
    name: "workMemoryDeficitId",
    type: "intensity",
    placeholder: "É esquecido(a) em atividades do dia-a-dia:",
  },
  {
    name: "distractionOnStimuliId",
    type: "intensity",
    placeholder: "Distrai-se com estímulos externos:",
  },
  {
    name: "toolsLostId",
    type: "intensity",
    placeholder:
      "Perde coisas necessárias para as atividades (Ex: brinquedos, deveres da escola, lápis ou livros):",
  },
  {
    name: "difficultOnMentalEffortId",
    type: "intensity",
    placeholder:
      "Evita, não gosta ou se envolve contra a vontade em tarefas que exigem esforço mental prolongado:",
  },
  {
    name: "difficultOnOrganizingId",
    type: "intensity",
    placeholder: "Tem dificuldade para organizar tarefas e atividades:",
  },
  {
    name: "followInstructionsId",
    type: "intensity",
    placeholder:
      "Não segue instruções até o fim e não termina os deveres de escola, tarefas ou obrigações:",
  },
  {
    name: "attentionOnListeningId",
    type: "intensity",
    placeholder: "Parece não estar ouvindo quando se fala diretamente com ele(a):",
  },
  {
    name: "attentionOnLeisureId",
    type: "intensity",
    placeholder:
      "Tem dificuldades para manter a atenção em deveres ou atividades de lazer:",
  },
  {
    name: "attentionToDetailsId",
    type: "intensity",
    placeholder:
      "Não consegue prestar muita atenção a detalhes ou comete erros por descuido nos trabalhos da escola ou tarefas:",
  },
  {
    name: "notes",
    type: "text",
    placeholder: "Observações",
  },
];
