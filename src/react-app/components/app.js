import React from "react";
import Icon from "@mdi/react";
import Card from "@app/components/card";
import ModalRouter from "@app/components/modalRouter";
import TasksManager from "@app/components/tasksManager";

function App() {
  return (
    <div className="app">
      <TasksManager />
      <div className="panel graph-view"></div>
      {/* <div className="panel panel--side panel--right" /> */}
      <ModalRouter />
    </div>
  );
}

export default App;
