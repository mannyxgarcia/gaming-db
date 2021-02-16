import React, { useState, useEffect } from 'react'
import moment from 'moment'

const ModalContent = ({ game, onClose, description }) => {
  const [shortDescription, setShortDescription] = useState(null)
  
  useEffect(() => shortenDescription(description), [])
  
  const shortenDescription = (description) => {
    let string = ' ...' 
    
    if(description.length > 200){
      description = description.slice(0, 200).concat(string)
    }

    setShortDescription(description)
  }
  
  return (
    <>
      <div className="modal">
        <img src={game.background_image} alt={''} className="card-image"/>
        <div className='modal-close'>
          <i className="fas fa-window-close close" onClick={() => onClose()}></i> 
        </div>
        <div className="card-details">
          <div className="card-title">
            <div className="platform-container">
            <div className="platform">
                {game.parent_platforms.map(platform => {
                  if(platform.platform.name === 'PC'){
                    return (
                      <i className="fab fa-windows"></i>
                    )
                  }
                })}
              </div>
              <div className="platform">
                {game.parent_platforms.map(platform => {
                  if(platform.platform.name === 'Xbox'){
                    return (
                      <i className="fab fa-xbox"></i>
                    )
                  }
                })}
              </div>
              <div className="platform">
                {game.parent_platforms.map(platform => {
                  if(platform.platform.name === 'PlayStation'){
                    return (
                      <i className="fab fa-playstation"></i>
                    )
                  }
                })}
              </div>
              <div className="platform">
                {game.parent_platforms.map(platform => {
                  if(platform.platform.name === 'Nintendo'){
                    return (
                      <i className="fas fa-gamepad"></i>
                    )
                  }
                })}
              </div>
            </div>
            <div>
              {`${game.rating}/5`}
            </div>
          </div>
          <div className="card-subtitle">
            <div className='modal-title'>
            <a href={`${game.website}`}>{game.name} <i className="fas fa-external-link-alt fa-xs"></i></a>
            </div>
            <div className="modal-details">
              <div className="modal-description">
              release date: {moment(game.released, "YYYY-MM-DD").format("MMMM Do YYYY")}
              </div>
              <div className="modal-description">
                {shortDescription}
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalContent
