import {useState, useEffect} from 'react'

const screenSize = ()=> {
  const [horizontal, setHorizontal] = useState({x : 0});
  const [vertical, setVertical] = useState({y : 0});

  useEffect(()=> {
    const handleHorizontal = (e)=> setHorizontal({x: e.clientX});
    const handleVertical = (e)=> setVertical({y : e.clientY});

    window.addEventListener("mousemove", handleHorizontal);
    window.addEventListener("mousemove", handleVertical);

    return(()=> {
      window.removeEventListener("mousemove", handleHorizontal);
      window.removeEventListener("mousemove", handleVertical);
    });
  }, [])

  return (
    <div>
      <h2>Your Horizontal Value is: {horizontal.x}</h2>
      <h2>Your Vertical Value is: {vertical.y}</h2>
    </div>
  )
}

export default screenSize;