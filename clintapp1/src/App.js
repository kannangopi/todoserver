import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  
  const [dolist,setDolist]=useState("");
  const [dispDoList,setDispDoList]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:3011/api/disp").then((responce)=>{
      setDispDoList(responce.data);
      console.log(responce.data);
      
  });
},[]);
console.log(dispDoList);
  
  const deleteDo=(index)=>{
    axios.post("http://localhost:3011/api/del",{id:index});
  }

   const addtodo=()=>{
     console.log(dolist);
      axios.post("http://localhost:3011/api/insert",{dolist: dolist}).then(()=>{
        alert("successfully inserted")
      })
   }
  return (
    <div className="App">
    <h1>Hello</h1>
    <input type="text" onChange={(e)=>setDolist(e.target.value)}/>
    <button onClick={addtodo}>submit</button>
    <div>
      <table>
      {dispDoList.map((value,index)=>{
          return(
            <tr>
              <td>
                {value.task}
              </td>
              <td><button onClick={()=>deleteDo(value.id)}>delete</button></td>
            </tr>
          );
        })}
      </table>
      {/* <ul>
        {dispDoList.map((value,index)=>{
          return(<li value='index'>{value.task}</li>);
        })}
      </ul> */}
    </div>
    </div>
  );
}

export default App;
