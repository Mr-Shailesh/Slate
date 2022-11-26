import React, { useEffect, useState } from "react";
import "./DragNdrop.css";
import { MdAddBox } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addInputActions } from "../store/addInput-slice";

const DragNdrop = () => {
  const data = useSelector((state) => state.addInput);
  const { inputArr } = data;

  const dispatch = useDispatch();

  const id = Math.floor(Math.random() * 100000);

  const addBox = () => {
    dispatch(
      addInputActions.add({
        type: "text",
        value: "",
        id,
        column: "Not_started",
      })
    );
  };

  const [arr, setArr] = useState(inputArr);

  useEffect(() => {
    setArr(inputArr);
  }, [inputArr]);

  const handleChange = (e) => {
    e.preventDefault();
    const index = e.target.id;

    let dem = [...arr];
    dem[index] = { ...dem[index], value: e.target.value };
    setArr(dem);
  };

  const blur = () => {
    dispatch(addInputActions.value(arr));
  };

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, cat) => {
    let id = e.dataTransfer.getData("id");
    const newArray = [...arr];
    let tasks = newArray.map((task) => {
      const objCopy = { ...task };
      if (task.id === +id) {
        objCopy.column = cat;
      }

      return objCopy;
    });
    dispatch(addInputActions.value(tasks));
  };

  var tasks = {
    Not_started: [" "],
    In_progress: [" "],
    Review: [" "],
    Completed: [" "],
    Deployed: [],
  };

  arr.forEach((d, i) => {
    tasks[d.column].push(
      <div
        key={i}
        onDragStart={(e) => onDragStart(e, d.id)}
        draggable
        className="draggable"
      >
        <input
          style={{
            cursor: "grabbing",
          }}
          onBlur={blur}
          type="text"
          id={i}
          value={d.value}
          className="form-control"
          placeholder="Type here"
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
    );
  });

  return (
    <div>
      <div className="Header-Icon">
        <MdAddBox onClick={addBox} />
      </div>

      <div className="main">
        <div className="col1">
          <h5>Not Started</h5>

          <div
            className="input"
            onDragOver={(e) => onDragOver(e)}
            draggable
            onDrop={(e) => {
              onDrop(e, "Not_started");
            }}
          >
            {tasks.Not_started}
          </div>
        </div>

        <div className="col2">
          <h5>In progress</h5>

          <div
            className="input"
            onDragOver={(e) => onDragOver(e)}
            draggable
            onDrop={(e) => {
              onDrop(e, "In_progress");
            }}
          >
            {tasks.In_progress}
          </div>
        </div>

        <div className="col3">
          <h5>Review</h5>
          <div
            className="input"
            onDragOver={(e) => onDragOver(e)}
            draggable
            onDrop={(e) => {
              onDrop(e, "Review");
            }}
          >
            {tasks.Review}
          </div>
        </div>

        <div className="col4">
          <h5>Completed</h5>
          <div
            className="input"
            onDragOver={(e) => onDragOver(e)}
            draggable
            onDrop={(e) => {
              onDrop(e, "Completed");
            }}
          >
            {tasks.Completed}
          </div>
        </div>

        <div className="col5">
          <h5>Deployed</h5>

          <div
            className="input"
            onDragOver={(e) => onDragOver(e)}
            draggable
            onDrop={(e) => {
              onDrop(e, "Deployed");
            }}
          >
            {tasks.Deployed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragNdrop;
