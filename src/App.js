import React, { useState, useEffect } from 'react'
import './App.css';

const App = () => {
  const [allArticles, setAllArticles] = useState([])
  const [section, setSection] = useState("home")
  const [error, setError] = useState(false)
  
  const fetchData = async () => {
    const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=aZbmpGuGlAjI4Bm8GXzuUjgm75QdNlob`
    
    try {
      const response = await fetch(url)
      if (response.statusText !== "OK") {
        throw Error(response.statusText)
      } else {
        const data = await response.json()
        setAllArticles(data.results)
      }
    } catch(error) {
      setError(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [section])

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  )
}

export default App;
