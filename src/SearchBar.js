import React from 'react'

const SearchBar = () => {
  return (
    <>
      <div className='search-wrapper'>
        <i className="fas fa-search search-icon"></i>
        <input className='search-bar' type="text" placeholder="Search..." />
      </div> 
    </>
  )
}

export default SearchBar
