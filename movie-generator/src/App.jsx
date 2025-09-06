import { useState, useEffect } from 'react'
import './App.css'
import movies from './Movies.jsx'

function App() {
  const [yourChoice, setYourChoice] = useState("")
  const chooseMovie = () => {
    const randomIndex = Math.floor(Math.random() * movies.length)
    setYourChoice(movies[randomIndex])
  }
  useEffect(() => {
    chooseMovie()
  }, [])
  return (
    <>
      <div>
        
      <h1 class="text-center text-lg text-white">Your Movie Choice Is:</h1>
      <h2 class="text-center text-md text-white">{yourChoice}</h2>
      <button onClick={() => chooseMovie(movies)}>
          Choose New Movie
        </button>


      </div>

     </> 

  )



  }


export default App
