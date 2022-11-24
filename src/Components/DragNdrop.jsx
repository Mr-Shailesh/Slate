import React, { useEffect, useState } from "react";
import "./DragNdrop.css";
import Draggable from "react-draggable";
import { MdAddBox } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addInputActions } from "../store/addInput-slice";

const DragNdrop = () => {
  const data = useSelector((state) => state.addInput);
  const { inputArr } = data;
  console.log("data", data);
  const dispatch = useDispatch();

  console.log("inputArr", inputArr);

  const addBox = () => {
    dispatch(
      addInputActions.add({
        type: "text",

        value: "",
      })
    );
    console.log("New Box Added");
  };

  const [arr, setArr] = useState(inputArr);

  useEffect(() => {
    setArr(inputArr);
  }, [inputArr]);

  const handleChange = (e) => {
    console.log("e.target", e.target);
    e.preventDefault();
    const index = e.target.id;
    const { id, value } = e.target;
    console.log("id, value", id, value);

    let dem = [...arr];
    dem[index] = { ...dem[index], value: e.target.value };
    setArr(dem);
  };

  const blur = () => {
    dispatch(addInputActions.value(arr));
  };

  return (
    <div>
      <div className="Header-Icon">
        <MdAddBox onClick={addBox} />
      </div>

      <div className="main">
        <div className="col">
          <h5>Not Started</h5>
          {arr.map((item, i) => {
            console.log("item.value", item.value);
            return (
              <Draggable key={i}>
                <div className="input">
                  <input
                    style={{
                      cursor: "grabbing",
                    }}
                    onBlur={blur}
                    type="text"
                    id={i}
                    value={item.value}
                    className="form-control"
                    placeholder="Type here"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
              </Draggable>
            );
          })}
        </div>
        <div className="col">
          <h5>In progress</h5>
        </div>
        <div className="col">
          <h5>Review</h5>
        </div>
        <div className="col">
          <h5>Completed</h5>
        </div>
        <div className="col">
          <h5>Deployed</h5>
        </div>
      </div>
    </div>
  );
};

export default DragNdrop;
