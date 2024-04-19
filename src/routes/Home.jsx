import React, {useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import first_array from "./routes/Array_1.json";
import second_array from "./routes/Array_2.json";
import List from "./List";


export const Home = () => {
  const { state, setState } = useContext(AppContext)

  const [combinedArray, setCombinedArray] = useState([]);

  const combineArrays = () => {
    setCombinedArray([...first_array, ...second_array]);
  }
 

  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='list'>{state}</Link>
        <button onClick={combineArrays}>Combine two arrays</button>
        <div>
          {
            JSON.parse(combinedArray).map((item, index) => {
              return (
              <List 
               key={item.id.toString()} 
               itemName={item.name} 
               itemBody={item.body}/>
              )
            })
          }
        </div>
      </header>
    </div>
  )
}
