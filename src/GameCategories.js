import React, { useState, useEffect } from 'react'
import SingleCategory from './SingleCategory'

const GameCategories = () => {
  const [data, setData] = useState([])
  const [hasError, setErrors] = useState(false)
  // const [categories, setCategories] = useState([])
  
  useEffect(() => {
    fetchCategories()
  }, [])
  
  // useEffect(() => {
  //   filterCategories(data)
  // }, [categories])
  
  const fetchCategories = () => {
    fetch('https://api.rawg.io/api/genres')
      .then(res => res.json())
      .then(res => setData(res.results))
      .catch(() => setErrors(true))
  }
  
  // const filterCategories = (data) => {
  //   let results = []
  //   results.push(data[1])
  //   results.push(data[3])
  //   results.push(data[5])
  //   results.push(data[7])
  //   results.push(data[13])
  //   results.push(data[14])
  //   setCategories(results)
  // }
  
  return (
    <>
    {data.map(category => {
      return (
      <SingleCategory key={category.id} id={category.id} games={category.games} name={category.slug} />
      )
    })}
    
    </>
  )
}

export default GameCategories
