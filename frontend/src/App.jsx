import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  async function getServerData() {
    try{
      setLoader(true);
    // alert("hiii");
   const serverData = await fetch("http://localhost:4002/data")
    const jsonData = await serverData.json();
    setData(jsonData);
    }
    catch(err){
      console.log(err);
    }
    finally{
      setLoader(false);
    }
  }

  return (
    <>
    
      <h2>Fetching using node sserver</h2>
      
      <button onClick={getServerData}>fetchdata</button>
      {loader?(<h2>Loading...</h2>):<h2>No data loaded</h2>}
      {JSON.stringify(data)}
    </>
      
  )
}

export default App
