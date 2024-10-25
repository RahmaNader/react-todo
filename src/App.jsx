// import { useState } from 'react'
import "./App.css";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoLList } from "./components/TodoList";

function App() {
  return (
    <>
      <Header />
      <Tabs />
      <TodoLList />
      <TodoInput />
    </>
  );
}

export default App;
