import React from "react";
import "../App.css";
// import Checker from "./Checker";
// import Demo from "./Demo";
import DragNdrop from "./DragNdrop";
// import SlateDemo from "./SlateDemo";
// import SlateDemo1 from "./SlateDemo1";
// import SlateDemo2 from "./SlateDemo2";
// import SlateDemo3 from "./SlateDemo3";

const Body = () => {
  // const [data, setData] = useState([]);

  // console.log("data==========>>>", data);

  return (
    <div className="App-body">
      <DragNdrop />
      {/* <Demo /> */}
      {/* <SlateDemo /> */}
      {/* <SlateDemo1 data={data} />
      <Checker data={data} /> */}
      {/* <SlateDemo2 /> */}
      {/* <SlateDemo3 /> */}
    </div>
  );
};

export default Body;
