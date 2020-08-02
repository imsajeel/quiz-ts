import React, { useState } from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNum: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestion,
}) => {
  const [selection, setSelection] = useState("");

  if (question) {
    return (
      <div className=".container bg-gray-100 rounded-lg py-10 my-10 mx-auto shadow-lg">
        <p className="text-center text-gray-600">
          Quistion : {questionNum} / {totalQuestion}
        </p>
        <p
          className="font-semibold text-lg m-5"
          dangerouslySetInnerHTML={{ __html: "Q. &ensp;" + question }}
        />
        <div>
          {answers?.map((answer, index) => (
            <div
              key={index}
              className="w-full text-center m-5"
              onClick={() => setSelection(answer)}
            >
              <button
                className={`inline-block w-11/12 text-left ${
                  answer === selection
                    ? "bg-blue-500 text-white"
                    : "bg-transparent text-blue-700"
                } hover:bg-blue-500 focus:outline-none font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full`}
                disabled={userAnswer}
                value={answer}
                onClick={callback}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: index + 1 + ". &emsp; " + answer,
                  }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container bg-gray-100 rounded-lg py-10 my-10 mx-auto shadow-lg">
        No quistions available in this section. Please try another!
        <div className="py-10">
          <button
            className={` bg-blue-500 active:bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded`}
            onClick={() => (window.location.href = "/reload")}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }
};

export default QuestionCard;
