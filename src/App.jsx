import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [inCompleteTodos, setIncompleteTodos] = useState([
    "未完了です1",
    "未完了です2"
  ]);

  const [completeTodos, setCompleteTodos] = useState([
    "完了です1",
    "完了です2"
  ]);

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

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={inputTodo}
          onChange={onChangeInputTodo}
        />
        <button onClick={onClickInputTodo}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
