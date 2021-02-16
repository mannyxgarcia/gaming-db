import React, { useState, useEffect } from 'react'
import SingleGame from './SingleGame'
import utils from './utils'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const SingleCategory = ({categoryName}) => {
  const [errors, setErrors] = useState(false)
  const [gameDetails, setGameDetails] = useState([])
  
  useEffect(() => getGameDetails(categoryName, new Date()), [])
  
  const getGameDetails = (categoryName, date) => {
    const dates = utils.getDates(date)
      fetch(`https://api.rawg.io/api/games?dates=${dates}&genres=${categoryName}&ordering=-rating&parent_platforms=1,2,3&page_size=10`)
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
        <div className="container-carousel">
        <CarouselProvider
          naturalSlideWidth={10}
          naturalSlideHeight={5}
          totalSlides={5}
          visibleSlides={2}>
          <Slider>
            <div className="category-games">
              {gameDetails.map((game, index) => {
                return (
                  <Slide index={index}>
                    <div className="single-game">
                      <SingleGame key={game.id} id={game.id} gameDetails={game}/>
                    </div>
                  </Slide>
                )
              })}
            </div>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
        </div>
      </div>
    </>
  )
}

export default SingleCategory
