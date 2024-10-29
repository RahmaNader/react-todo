// import { useState } from 'react'
import "./App.css";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoLList } from "./components/TodoList";

function App() {

 const todos = [
  {input:'Hello! Add your first todo!', complete:true},
  {input:'Get the groceries', complete:false},
  {input:'Go to the gym', complete:false},
  {input:'learn react', complete:false},
 ]

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoLList todos={todos} />
      <TodoInput />
    </>
  );
}

export default App;
