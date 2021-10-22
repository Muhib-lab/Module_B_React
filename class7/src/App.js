import { useState } from 'react';
import './App.css';
import { Button,LoginButton } from './button'
import Cards from './card';


function App() {
  // const [inpValue, setInpValue] = useState('')
  // const [list ,setList] = useState([])

  // const addItem = () => {
  //   let updatearr = [...list]
  //   updatearr.push(inpValue)

  //   list.push(inpValue)
  //   setList(updatearr)
  //   console.log('Function Called')
  // }


const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [user,setUser] = useState({})




let sbmt =() =>{
  let obj={
    name,
    email
  }
  setUser(obj)
  console.log(user)
}
console.log(user)
let cssObj ={color:'white',backgroundColor:'black',padding:'6px',borderRadius:'5px'}

  return (
    
    <div className="App">
      {/* <h3>{inpValue}</h3>
      <input value={} onChange={(e)=>setInpValue(e.target.value)} placeholder='Enter Value' />
      <button onClick={addItem}>Add</button> */}

      <h1>Sign up</h1>
      <input className='nameInp' onChange={(e)=> setName(e.target.value)} placeholder='Name' />
      <input className='nameInp' onChange={(e)=> setEmail(e.target.value)} placeholder='Email' />
      <button style={cssObj} onClick={sbmt}> Submit</button>
      
      
      <Button />
      <LoginButton buttonText='world' />
      <LoginButton buttonText='hello' />

      <h2>{name}{email}</h2>

      <Cards head='Mobile' para='Nokia is a muktinational compan and its branches are accross the worldwide' update='3mint ago' />
      <Cards head='SAmsung' para='Nokia is a muktinational compan and its branches are accross the worldwide' update='10mint ago' />
      <Cards head='Motorolla' para='Nokia is a muktinational compan and its branches are accross the worldwide' update='5mint ago' />
      <Cards head='Lenovo' para='Nokia is a muktinational compan and its branches are accross the worldwide' update='15mint ago' />
      <Cards head='moo' para='Nokia is a muktinational compan and its branches are accross the worldwide' update='40mint ago' />

  
    </div>
  );
}



export default App;
