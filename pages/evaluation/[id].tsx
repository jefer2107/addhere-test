import * as React from "react";
import SelectButton from "../../components/SelectButton";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
import TopBar from "../../components/Topbar";

export interface IEvaluationProps {
  title: string;
  score: number;
}
export interface IQuestion {
  question: number;
  score: number;
}

const initData = {
  labels: ["#E2F0F4", "#004767"],
  datasets: [
    {
      label: "Completo",
      data: [1, 0],
      backgroundColor: ["#E2F0F4", "#004767"],
    },
  ],
};

const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "none",
    },
    title: {
      display: false,
      text: "Chart.js Doughnut Chart",
    },
  },
};

const EvaluationPage: React.FC<IEvaluationProps> = ({ title, score }) => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [data, setData] = useState(initData);
  // TODO: Modificar conforme o array de questões carregado
  const numOfQuestions = 5;
  const [missing, setMissing] = useState(numOfQuestions);

  const handleClick = (e, question: number, score: number) => {
    e.preventDefault();
    const find = questions.find((f) => f.question === question);
    if (find) {
      find.score = score;
      setQuestions(questions);
    } else {
      setQuestions([...questions, { question, score }]);
      const d2 = questions.length + 1;
      const d1 = numOfQuestions - d2;
      setData({ ...data, datasets: [{ ...data.datasets[0], data: [d1, d2] }] });
      setMissing(numOfQuestions - (questions.length + 1));
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
  };

  const finished = missing === 0;
  return (
    <div className="flex-row w-full h-full p-1 ">
      <TopBar title="Avaliação" onClick={handleBack} />
      <div className="grid grid-cols-3 grid-rows-3 h-40 w-full p-4">
        <div className="col-span-2 row-span-2 items-center justify-start my-auto">
          <Doughnut data={data} options={options} width={50} height={50} />
        </div>
        <div className="col-span-1 rounded-xl m-auto  row-span-3 ">
          <img
            className="inline object-cover w-24 h-24 mr-2 rounded-full"
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Profile image"
          />
        </div>
        <div className="col-span-2 inline-flex items-center h-full">
          {!finished && (
            <>
              <div className="font-extrabold ml-2 mr-1">{missing}</div>
              <div className="text-gray-500">questões restantes</div>
            </>
          )}
          { finished &&
            <div className="text-red-400 text-base font-bold">Questionário finalizado!</div>
          }
        </div>
      </div>

      <div className="max-w-7xl h-full  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex-col lg:items-center lg:justify-between space-y-4">
        {[
          {
            title: "Atenção aos Detalhes",
            detail:
              "Frequentemente falha em prestar atenção nos detalhes ou comete erros de desatenção nas atividades escolares ou tarefas.",
          },
          {
            title: "Mantutenção de Foco",
            detail:
              "Frequentemente possui dificuldade em manter a atenção nas tarefas ou brincadeiras.",
          },
          {
            title: "Capacidade de Ouvir",
            detail:
              "Frequentemente aparenta não estar prestando atenção quando lhe falam diretamente.",
          },
          {
            title: "Cumprimento de Tarefas",
            detail:
              "Frequentemente tem dificuldades para seguir instruções e falha em completar tarefas escolares ou compromissos",
          },
          {
            title: "Organização",
            detail:
              "Frequentemente tem dificuldade em organizar tarefas e atividades",
          },
        ].map(({ title, detail }, i, arr) => (
          <SelectButton
            key={`select-btn-${i}`}
            title={title}
            detail={detail}
            score={0}
            question={i + 1}
            numOfQuestions={arr.length}
            onClick={handleClick}
          />
        ))}
      </div>

      {finished && <button className="w-full z-50 fixed bottom-4 h-12 m-auto rounded-md border-2 border-gray-400 text-gray-900 font-bold bg-purple-400 hover:bg-purple-500">CONFIRMAR</button> }
    </div>
  );
};

export default EvaluationPage;
