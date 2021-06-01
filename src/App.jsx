import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodos } from "./components/InCompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [inCompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const [inputTodo, setInputTodo] = useState("");
  const onChangeInputTodo = (event) => setInputTodo(event.target.value);
  const onClickInputTodo = () => {
    if (inputTodo === "") return;
    const newTodos = [...inCompleteTodos, inputTodo];
    setIncompleteTodos(newTodos);
    setInputTodo("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...inCompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newInCompleteTodos = [...inCompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputTodo
        inputTodo={inputTodo}
        onChange={onChangeInputTodo}
        onClick={onClickInputTodo}
        disabled={inCompleteTodos.length === 5 && true}
      />
      {inCompleteTodos.length === 5 && (
        <p style={{ color: "red" }}>登録できるTODOは５個までです！</p>
      )}
      <InCompleteTodos
        todos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
