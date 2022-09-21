import * as React from "react";
import { FC } from "react";
import classes from "../../styles/snapIv/UiSnapIvScore.module.css";

export interface IUiSnapIvScoreProps {
  selectedScore: number | null;
}

const UiSnapIvScore: FC<IUiSnapIvScoreProps> = ({ selectedScore }) => {
  const scores = getScores();
  return (
    <div className={classes.container}>
      {scores?.map((score, key) => (
        <div
          key={key}
          className={`${classes.score} ${
            isDivision(score) ? classes.division : null
          } ${score === selectedScore ? classes.selected : null}`}
        >
          {score}
        </div>
      ))}
    </div>
  );
};

export default UiSnapIvScore;

const getScores = (
  minScore: number = 0,
  maxScore: number = 40
): number[] | null => {
  try {
    const scores = [];
    for (let i = minScore; i <= maxScore; i++) {
      scores.push(i);
    }
    return scores;
  } catch (error) {
    console.log("getScores", error.message);
  }
  return null;
};

const isDivision = (score: number): boolean => {
  try {
    return [7, 15].includes(score);
  } catch (error) {
    console.log("isDivision", error.message);
  }
  return false;
};
