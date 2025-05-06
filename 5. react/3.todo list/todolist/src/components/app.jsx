import React, { useState } from "react";
import './app.css'

const Todo = () => {
  const [addValue, setAddValue] = useState("");
  const [data, setData] = useState([]);

  const handleAdd = () => {
    setData([...data, addValue]);
    setAddValue("");
  };

  return (<div id="wrapper">
    <div className="body">
      <section>
      <input
        type="text"
        placeholder="enter any word"
        onChange={(e) => setAddValue(e.target.value)}
        value={addValue}
      />
      <button onClick={handleAdd} id="adding">add</button>
      
      </section>

      <div id="lists">
      <ul>
        {data.map((currItem, index) => (
          <li key={index}>{currItem}</li>
        ))}
      </ul>
        </div>
    </div>
    </div>
  );
};

export default Todo;







































// import './app.css';
// import Todoitems from './Todoitems';
// function Todo() {
//   return (
//     <div id='tododiv'>
//         <div className="first">
//              <h1>Todo</h1>
//         </div>

//         <div className="second">
//             <input type="text"  />
//             <button>add +</button>
//         </div>

//         <div className="third">
//           <div className='thirdchild'>
//             <Todoitems />
//           </div>
//         </div>
//     </div>
//   );
// }

// export default Todo;
