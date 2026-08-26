import {useState} from 'react';

function App() {

  const [isOn, setIsOn] = useState(true);

  const toggleButton = ()=> {
    setIsOn(!isOn)
  }

  return(
    <>
      <p>The button is {isOn ? 'OFF' : 'ON'}</p>
      <button onClick={toggleButton}>Turn {isOn ? 'ON' : 'OFF'}</button>
    </>
  )
}

export default App;