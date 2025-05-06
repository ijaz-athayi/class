import React from "react"
import './App.css'
import Todo from './components/app'

function App(){
  return(
<div className="App">
   <Todo />
</div>
  );
};

export default App;













// import React, { useState } from "react";
// const Todo = () => {
//   const [addValue, setAddValue] = useState("");
//   const [data, setData] = useState([]);

//   const handleAdd = () => {
//     setData([...data, addValue]);
//     setAddValue("");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="enter any word"
//         onChange={(e) => setAddValue(e.target.value)}
//         value={addValue}
//       />
//       <button onClick={handleAdd}>add</button>
//       <ul>
//         {data.map((currItem, index) => (
//           <li key={index}>{currItem}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Todo;