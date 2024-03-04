import React, { useState } from "react";

import QuestionData from "../Components/FAQ/QuestionData";
import SingleQuestion from "../Components/FAQ/SingleQuestion";

import "./FAQPage.css";

const FAQPage = () => {
  const [questions, setQuestions] = useState(QuestionData);
  return (
    <>
      <div className="MainDiv">
        <main>
          <div className="container">
            <h3>Frequently Asked Questions. (FAQ)</h3>
            <section className="info">
              {questions.map((question) => {
                return (
                  <SingleQuestion
                    key={question.id}
                    {...question}
                  ></SingleQuestion>
                );
              })}
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default FAQPage;
