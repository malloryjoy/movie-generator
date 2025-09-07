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
      <div class="max-w-full mx-auto text-white py-10 text-center">
        
        <h1 class="font-display text-4xl">Your Movie Choice Is:</h1>
        <h2 class="text-2xl text-white">{yourChoice}</h2>
      <button class="bg-white text-black px-4 py-2 w-52 mx-2" onClick={() => chooseMovie(movies)}>
          Choose New Movie
        </button>


      </div>

     </> 

  )



  }


export default App
