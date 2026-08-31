import {useState, useEffect} from 'react';

const newTitle = ()=> {
  const [greetings, setGreetings] = useState("");
  const [name, setName] = useState("");

  useEffect(()=> {
    if(name === "") {
      document.title = "Welcome"
    } else {
      document.title = `${greetings} ${name}`
    }
  }, [name, greetings])

  return (
    <div>
      <h1>Enter Your Name:</h1>
      <input 
        type="text" 
        value={name}
        onChange={(e)=> setName(e.target.value)}
      />

      <h1>Choose a Greeting</h1>
      <input 
        type="text" 
        value={greetings}
        onChange={(e)=> setGreetings(e.target.value)}
      />
    </div>
  )

}

export default newTitle;