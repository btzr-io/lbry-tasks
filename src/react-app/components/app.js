import React from "react";
import Icon from "@mdi/react";
import Card from "@app/components/card";
import ModalRouter from "@app/components/modalRouter";
import TasksManager from "@app/components/tasksManager";
import Editor from "@app/components/editor";

function App() {
  return (
    <div className="app">
      <TasksManager />
      <Editor />
      <ModalRouter />
    </div>
  );
}

export default App;
