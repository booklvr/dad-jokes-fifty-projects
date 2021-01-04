import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DadJokes = () => {
  const [joke, setJoke] = useState('')

  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const fetchData = async () => {
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()

    setJoke(data.joke)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='container'>
      <h3>Don't Laugh Challenge</h3>
      <div className='joke' id='joke'>
        {joke}
      </div>
      <button id='jokeBtn' className='btn' onClick={() => fetchData()}>
        Get Another Joke
      </button>
    </div>
  )
}

export default DadJokes
