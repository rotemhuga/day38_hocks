import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ClicksCounter from './component/ClickCounter';


function App() {
//     const initialState = 0;
//     const [count, setCount] = useState(initialState);

//     return (
//       <div>
//         count: {count}
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>Click me</button>
//       </div>
//  );
// };

return <ClicksCounter />;
};


export default App;
