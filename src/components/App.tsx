import React, {useState} from 'react';



const Food: React.FunctionComponent = () => {
  const [count, setCount] = useState(0)

  const onPlus = () => {
    setCount(count +1)
  }

  const onMinus = () => {
    setCount(count -1)
  }

  return <div>
    <h1>The number is {count}</h1>
    <button onClick = {onPlus}>Add</button>
    <button onClick = {onMinus}>Minus</button>
  </div>
}


function App() {
  return (
    <div >
      <Food ></Food>
    </div>
  );
}

export default App;
