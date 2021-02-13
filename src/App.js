import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  let [number,setNumber]=useState(0)
  let[value,setValue]=useState(0)
useEffect(() =>{
  alert("we clecked now")
},[number])
//e give empty array [] but whenever render runs then useffect hook automatically runs so we sometime
//  we need to give value in empty array when ever this specific button runs then useeffect hook call 
return(
  <div>
   <button onClick={() => setNumber(++number)}>Number{number}</button>
   <br/>
   <button onClick={() => setValue(++value)}>Number{value}</button>
  </div>
)


  
// useEffect(() => {
//    fetch("https://api.github.com/users/AbdulMoiz8994/repos")  
//    .then((response) => response.json())
//    .then((result) => {
//      console.log(result)
//      setrepos(result)
//    })
// },[])
//    let [repos,setrepos]=useState([])
//   return(
//     <div>
//      <h1>GitHub Repositories</h1>
//      <ul>
//        {repos.map((list,ind) => {
//          return(
//            <li key={ind}>{list.name}</li>
//          )
//        })}
//      </ul>
//     </div>
//   )


// useEffect(() =>{


// async function asynsc() {
//   try{
//     const data= await fetch("https://api.github.com/users/AbdulMoiz8994/repos") 
//     const jsons=await data.json()
//     console.log(jsons) 
//     setRepos(jsons)
//   }catch(error){
//      return error
//   }
// }
// asynsc()

// },[])
// let [repos,setRepos]=useState([{}])
// return(
//   <div>
//     <h1>This s all git Repositories of asynsc await</h1>
//     <ul>
//       {repos.map((listrepos,ind) =>{
//         return(
//         <li key={ind}>
//            {listrepos.name}
//         </li>
//         )
//       })}
//     </ul>
//   </div>
// )











  // useEffect(() => {
  //   fetch("https://api.github.com/users/AbdulMoiz8994/repos")
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result)
  //       setrepos(result)
  //     })

  // },[])


  // useEffect(() =>{
  //   async function getapi(){
  //     const data= await fetch("https://api.github.com/users/AbdulMoiz8994/repos")
  //     const jsons= await data.json()
  //     console.log(jsons)
  //     setrepos(jsons)
  //   }

// getapi()

//   },[])
//   let [repos, setrepos] = useState([{}])
  // return (
  //   <div>
  //     <h1>hello world</h1>
  //     <ul>
  //       {repos.map((response,ind) => {
  //         return (
  //           <li key={ind}>
  //     {response.name}
  //           </li>
  //         )
  //       })}

  //     </ul>
  //   </div>
  // );
}

export default App;
