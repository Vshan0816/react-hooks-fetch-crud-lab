import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem"



function QuestionList({ questions, handleDeletedQuestion }) {
 
  const questionsMap = questions.map((question)=>{
    return <QuestionItem
      key={question.id}
      question={question}
      handleDeletedQuestion={handleDeletedQuestion}/>
   })
 
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsMap}

      </ul>
    </section>
  );
}

export default QuestionList;
