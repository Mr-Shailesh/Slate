import React, { Component, useState } from "react";
import "./Demo.css";

const Demo = () => {
  const [data, setData] = useState({
    tasks: [
      { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
      { name: "React", category: "wip", bgcolor: "pink" },
      { name: "Vue", category: "complete", bgcolor: "skyblue" },
      { name: "Next", category: "wip", bgcolor: "green" },
    ],
  });

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, cat) => {
    let id = e.dataTransfer.getData("id");

    let tasks = data.tasks.filter((task) => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });

    setData({
      ...data,
      tasks,
    });
  };

  var tasks = {
    wip: [],
    complete: [],
  };

  data.tasks.forEach((t) => {
    tasks[t.category].push(
      <div
        key={t.name}
        onDragStart={(e) => onDragStart(e, t.name)}
        draggable
        className="draggable"
        style={{ backgroundColor: t.bgcolor }}
      >
        {t.name}
      </div>
    );
  });

  return (
    <div className="container-drag">
      <h2 className="header">DRAG & DROP DEMO</h2>
      <div
        className="wip"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "wip");
        }}
      >
        <span className="task-header">WIP</span>
        {tasks.wip}
      </div>
      <div
        className="droppable"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "complete")}
      >
        <span className="task-header">COMPLETED</span>
        {tasks.complete}
      </div>
    </div>
  );
};

export default Demo;
