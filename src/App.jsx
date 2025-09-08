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
      <div class="max-w-full mx-auto text-white py-10 mt-10 text-center">
      
        <h2 class="font-sans text-2xl text-shadow-md text-shadow-pink-700">Your Movie Choice Is:</h2>
        <h3 class="mt-5 font-amandine text-4xl">✨<span class=" text-white text-shadow-lg text-shadow-pink-500">{yourChoice}</span>✨</h3>
      <button class="bg-pink-600 text-white rounded-full py-2 px-4 border-b-4 border-b-white cursor-pointer mt-5" onClick={() => chooseMovie(movies)}>
      
          Choose New Movie
        </button>


      </div>

     </> 

  )



  }


export default App
