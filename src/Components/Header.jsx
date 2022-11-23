import React from "react";
import "../App.css";
import { MdAddBox } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addInputActions } from "../store/addInput-slice";

const Header = () => {
  const addInput = useSelector((state) => state.addInput);
  console.log("addInput", addInput);

  const dispatch = useDispatch();

  const addBox = () => {
    dispatch(addInputActions.add());
    console.log("New Box Added");
  };
  return (
    <div>
      <header className="App-header">
        <div className="Header-Icon">
          <MdAddBox onClick={addBox} />
        </div>
      </header>
    </div>
  );
};

export default Header;
