import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [dolist, setDolist] = useState("");
  const [dispDoList, setDispDoList] = useState([]);
  const [deletetrue, setDeletetrue] = useState(true);
  const [inserttrue, setInserttrue] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3011/api/disp").then((responce) => {
      setDispDoList(responce.data);
      console.log(responce.data);
    });
  }, [deletetrue, inserttrue]);
  // console.log(dispDoList);

  const deleteDo = (index) => {
    axios.post("http://localhost:3011/api/del", { id: index }).then((res) => {
      setDeletetrue(res);
    });
  };

  const addtodo = () => {
    // console.log(dolist);
    axios
      .post("http://localhost:3011/api/insert", { dolist: dolist })
      .then((res) => {
        alert("successfully inserted");
        setInserttrue(res);
      });
  };
  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" onChange={(e) => setDolist(e.target.value)} />
      <button onClick={addtodo}>submit</button>
      <div>
        <table>
          <tbody>
            {dispDoList.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.do}</td>
                  <td>
                    <button onClick={() => deleteDo(value.id)}>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
