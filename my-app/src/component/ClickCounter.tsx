import { useEffect, useState } from "react";
import React from "react";

const ClicksCounter: React.FC = () => {
    const initialState = 0;
    const [count, setCount] = useState<number>(initialState);
    const [stop, setStop] = useState<boolean>(true);

    
  useEffect(() => {
    console.log(`Count updated to ${count}`);
  }, [count]);
  
  useEffect(() => {
      console.log(`stop is ${stop}`);
    }, [stop]);

    const handleClick = () => {
      if (!stop) {
        setCount(count + 1);
      }
    };
  
    return (
      
      <div className="App-header">
        count: {count}
        <p>You clicked {count} times</p>
        <button onClick={handleClick}>Add 1</button>
        {/* <button onClick={() => setCount(count + 2)}>Add 2</button> */}
        <button onClick={() => setStop(!stop)}>Stop Counting</button>
        <button onClick={() => setCount(initialState)}>Reset</button>
      </div>
 );
};

export default ClicksCounter;