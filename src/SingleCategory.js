import React, { useState, useEffect } from 'react'
import SingleGame from './SingleGame'

const SingleCategory = ({id, games, name}) => {
  const [errors, setErrors] = useState(false)
  const [gameDetails, setGameDetails] = useState([])
  
  useEffect(() => {
    getGameDetails()
  }, [])
  
  const getGameDetails = () => {
    console.log('-----GAMES', games)
    games.forEach(game => {
      fetch(`https://api.rawg.io/api/games/${game.id}`)
      .then(res => res.json())
      .then(res => setGameDetails(prevGameDetails => {
        return [
          ...prevGameDetails, res
        ]
      }))
      .catch(() => setErrors(true))
    })
  }
  
  return (
    <>
    {console.log('---Details', name, gameDetails)}
      <div className="category-container">
        <div className="category-title">
          {name}
        </div>
        <div className="category-games">
          {gameDetails.map(game => {
            return (
              <div className="single-game">
                <SingleGame key={game.id} gameDetails={game}/>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SingleCategory
