import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';  // eslint-disable-next-line

export default function Navbar({onSearch}) {
   
  const[searchTerm,setSearchTerm]=useState('');

   function handleInputChange(event){
    setSearchTerm(event.target.value);
   }

   function handleSearch(event){
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }   
   }

   function handleReset(event) {
    event.preventDefault();
    // Refresh the page to the homepage
    window.location.href = '/';
  }

  return (
   <>
<nav className="navbar navbar-expand-lg navbar-dark bg-secondary bg-gradient">
<div className="container-fluid">
    <a className="navbar-brand" href='/' onClick={handleReset}>MealMenu-EatYummy😊FeelYummy</a>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
     
      <form className="d-flex" role="search">
        <input 
        className="form-control me-2"
         type="search" 
         placeholder="indian,british,Polish..." 
         aria-label="Search" 
        value={searchTerm}
        onChange={handleInputChange}

         />
        <button className="btn" type="submit" onClick={handleSearch}>Search</button>
      </form>
    </div>
</div>
</nav>
   </>
  )
}
