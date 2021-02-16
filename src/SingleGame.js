import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import ModalContent from './ModalContent'

const SingleGame = ({id, gameDetails}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState('')

  useEffect(() => {
    fetchGameData(id)
  }, [])
  
  const fetchGameData = (id) => {
    fetch(`https://api.rawg.io/api/games/${id}`)
      .then(res => res.json())
      .then(res => setData(res))
  }
  
  return (
    <>
    {console.log(data)}
    <div className="card" onClick={() => setIsOpen(true)}>
      <img src={gameDetails.background_image} alt={''} className="card-image"/>
      <div className="card-details">
        <div className="card-title">
          <div className="platform-container">
          <div className="platform">
              {gameDetails.parent_platforms.map(platform => {
                if(platform.platform.name === 'PC'){
                  return (
                    <i className="fab fa-windows"></i>
                  )
                }
              })}
            </div>
            <div className="platform">
              {gameDetails.parent_platforms.map(platform => {
                if(platform.platform.name === 'Xbox'){
                  return (
                    <i className="fab fa-xbox"></i>
                  )
                }
              })}
            </div>
            <div className="platform">
              {gameDetails.parent_platforms.map(platform => {
                if(platform.platform.name === 'PlayStation'){
                  return (
                    <i className="fab fa-playstation"></i>
                  )
                }
              })}
            </div>
            <div className="platform">
              {gameDetails.parent_platforms.map(platform => {
                if(platform.platform.name === 'Nintendo'){
                  return (
                    <i className="fas fa-gamepad"></i>
                  )
                }
              })}
            </div>
          </div>
          <div>
            {`${gameDetails.rating}/5`}
          </div>
        </div>
        <div className="card-subtitle">
          {gameDetails.name}
        </div>
      </div>
    </div>
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <ModalContent game={data} onClose={() => setIsOpen(false)} description={data.description_raw} />
    </Modal>
    </>
  )
}

export default SingleGame
