import { useState, useEffect } from 'react'
import Pictures from './components/pictures'
import './App.css'

async function getCats(){
const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=bA0ZycF9jl0hWyTJMvyZffbhWb4moeJx&q=cats&limit=6', { mode: 'cors' });
 const catData = await response.json();
 console.log('data:',catData.data);
 return catData.data;
}

function App() {
  const [url, setUrl] = useState([]);

  useEffect(()=>{
    async function getUrl(){
      const data = await getCats();
      setUrl(data);
    }
    getUrl();
  },[]);
        
  return (
    <>
      <p>Memory Card</p>
      <Pictures data={url} />
    </>
  )
}

export default App
