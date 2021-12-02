import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionItem from "./QuestionItem";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(resp=>resp.json())
    .then(data =>setQuestions(data))
  }, [])

  const addNewQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }

  const handleDeletedQuestion = (deletedQuestion) => {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
  }

  const handleUpdateQuestion = (updatedQuestion) => {
    const updatedQuestions = questions.map((question)=>{
      if (question.id === updatedQuestion.id) {
        return updatedQuestion
      } else {
        return question
      }
    })
    setQuestions(updatedQuestions)
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm addNewQuestion={addNewQuestion}/> :
      <QuestionList
       questions={questions}
       handleDeletedQuestion={handleDeletedQuestion}
       handleUpdateQuestion={handleUpdateQuestion}/>}
    </main>
  );
}

export default App;
