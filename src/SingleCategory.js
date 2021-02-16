import React, { useState, useEffect } from 'react'
import SingleGame from './SingleGame'
import utils from './utils'

const SingleCategory = ({categoryName}) => {
  const [errors, setErrors] = useState(false)
  const [gameDetails, setGameDetails] = useState([])
  
  useEffect(() => getGameDetails(categoryName, new Date()), [])
  
  const getGameDetails = (categoryName, date) => {
    const dates = utils.getDates(date)
      fetch(`https://api.rawg.io/api/games?dates=${dates}&genres=${categoryName}&ordering=-rating&parent_platforms=1,2,3&page_size=5`)
      .then(res => res.json())
      .then(res => setGameDetails(res.results))
      .catch(() => setErrors(true))
  }
  
  return (
    <>
      <div className="category-container">
        <div className="category-title">
          {categoryName}
        </div>
        <div className="category-games">
          {gameDetails.map(game => {
            return (
              <div className="single-game">
                <SingleGame key={game.id} id={game.id} gameDetails={game}/>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SingleCategory
