import React, { useState, useEffect } from 'react'
import SingleGame from './SingleGame'

const SingleCategory = ({id, games, name}) => {
  const [errors, setErrors] = useState(false)
  const [gameDetails, setGameDetails] = useState([])
  
  useEffect(() => getGameDetails(), [])
  
  const getGameDetails = () => {
      fetch(`https://api.rawg.io/api/games?dates=2020-11-16%2C2021-02-16&genres=${name}&ordering=-rating&parent_platforms=1,2,3&page_size=5`)
      .then(res => res.json())
      .then(res => setGameDetails(res.results))
      .catch(() => setErrors(true))
  }
  
  return (
    <>
      <div className="category-container">
        <div className="category-title">
          {name}
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
