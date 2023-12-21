import React, { useState } from "react"; 
import Menu from "./component/Menu";
import Navbar from './component/Navbar';
import './App.css';

function App() 
{
const[query,setQuery]=useState('indian');

function handleSearch(searchTerm){
  setQuery(searchTerm);
};


  return (
    <div >
    <Navbar onSearch={handleSearch} />
     <Menu query={query}/>
    </div>
  );

}
export default App;
