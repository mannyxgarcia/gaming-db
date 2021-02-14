import React from 'react'

const SingleGame = ({gameDetails}) => {
  return (
    <>
    {console.log('game details', gameDetails)}
    <div className="card">
      <img src={gameDetails.background_image} alt={''} className="card-image"/>
      <div className="card-details">
        <div className="card-title">
          <div className="platform-container">
          <div className="platform">
              {gameDetails.parent_platforms.map(platform => {
                if(platform.platform.name === 'PC'){
                  return (
                    <i class="fab fa-windows"></i>
                  )
                }
              })}
            </div>
            <div className="platform">
              {gameDetails.parent_platforms.map(platform => {
                if(platform.platform.name === 'Xbox'){
                  return (
                    <i class="fab fa-xbox"></i>
                  )
                }
              })}
            </div>
            <div className="platform">
              {gameDetails.parent_platforms.map(platform => {
                if(platform.platform.name === 'PlayStation'){
                  return (
                    <i class="fab fa-playstation"></i>
                  )
                }
              })}
            </div>
          </div>
          <div>
            ***
          </div>
        </div>
        <div className="card-subtitle">
          {gameDetails.name}
        </div>
      </div>
    </div>
    </>
  )
}

export default SingleGame
