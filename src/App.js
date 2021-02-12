import React, { useEffect, useState } from 'react'
import './App.css';

function App() {

  // useEffect(() => {
  //   fetch("https://api.github.com/users/AbdulMoiz8994/repos")
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result)
  //       setrepos(result)
  //     })

  // },[])


  useEffect(() =>{
    async function getapi(){
      const data= await fetch("https://api.github.com/users/AbdulMoiz8994/repos")
      const jsons= await data.json()
      console.log(jsons)
      setrepos(jsons)
    }

getapi()

  },[])
  let [repos, setrepos] = useState([{}])
  return (
    <div>
      <h1>hello world</h1>
      <ul>
        {repos.map((response,ind) => {
          return (
            <li key={ind}>
      {response.name}
            </li>
          )
        })}

      </ul>
    </div>
  );
}

export default App;
