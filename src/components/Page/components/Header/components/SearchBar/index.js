import React from 'react';

import './style.css';

function SearchBar(props) {
  return (
    <form className='search-form'>
      <div className='input-group'>
        <input
          type='text'
          placeholder='Buscar produtos, marcas e muito mais...'
          className='search-input form-control'
          onChange={props.handleInputSearch}
          value={props.searchInput}
        />
        <button className='btn btn-primary btn-border' onClick={props.handleSearchURL}>
          Pesquisar
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
