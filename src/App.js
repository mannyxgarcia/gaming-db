import React from 'react'
import SearchBar from './SearchBar'
import GameCategories from './GameCategories'

function App() {
  return (
    <>
      <div className='container'>
        <div>
          <SearchBar />
        </div>
        <div className='categories'>
          <GameCategories /> 
        </div>
      </div>
    </>
  );
}

export default App;
