import React, { useState } from "react";

const Demo = ({ data, setData }) => {
  const [value, setValue] = useState("");
  // const [data, setData] = useState([]);

  console.log("data", data);

  const submitHandler = (e) => {
    e.preventDefault();
    setData([...data, value]);
    setValue("");
  };

  return (
    <div>
      Demo
      <hr />
      <form onSubmit={submitHandler}>
        <div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
        </div>
        <button type="submit">Send</button>
        <div>
          <ul>
            {data.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </form>
      <hr />
      {/* <Editor value={nValue} onChange={(opts) => setNValue(opts.nValue)} /> */}
    </div>
  );
};

export default Demo;
