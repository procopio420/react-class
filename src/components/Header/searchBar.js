import React from 'react'

function SearchBar(props) {
  return (
    <form className = 'search-form'>
      <input type="text" className = 'search-input' onChange = {props.handleInputSearch} value = {props.searchInput}/>
      <button onClick = {props.handleSearchURL}> pesquisar </button>
    </form>
  );
}

export default SearchBar