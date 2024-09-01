import {useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

const URL = "http://localhost:3005/";

function App() {

  const [ran, setRan] = useState('');

 const getRandomQuote= async ()=>{

const data = await axios.get(`${URL}comment`);
const comments = data.data;


 const randomIndex = Math.floor(Math.random() * comments.length);
 const randomComment =  JSON.stringify(comments[randomIndex].text).replace(/['"]/g, '');


  setRan(randomComment);

 

 }



  return (
    <>
  <div className='commentClass'>{ran}</div>
  <div>
    <button onClick={getRandomQuote}>New Comment</button>
  </div>
    </>
  )
}

export default App
