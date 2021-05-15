import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {


  const [name, setName] = useState('');
  const inputEleRef = useRef("");
  const [randomNum, setRandomNum] = useState(0);


  const resetInput = () => {
    setName("");
  };

  const generateRandomNum = () => {
    const num = Math.random();
    setRandomNum(num);
  };

  useEffect(() => {
    inputEleRef.current = randomNum;
  }, [randomNum]);
  return (
    <div className="App">

      <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={resetInput}>Reset</button>
      <div>
        You entered: {name}
      </div>

      <div>
        <div>Random: {randomNum}</div>
        <button onClick={generateRandomNum}>Generate Random Number</button>
      </div>
      <div>Previous Number: {inputEleRef.current}</div>
    </div>
  );
}

export default App;
