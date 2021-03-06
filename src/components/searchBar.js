import React from 'react'
import "../styles/searchBar.css"

function searchBar({setRegion,setSearch }) {

  const change = (value) =>{
    setRegion(value);
    
  }

  return (
    <div>
        <div className="" id="searchBar">
        <div className="" id="searchCountry">
  
          <form className="search d-flex">
          
            <i className="medium material-icons">search</i>
            
            <input
              className="form-control me-2"
              name="consulta"
              type="search"
              placeholder="Search for country..."
              aria-label="Search"
              onChange={(unit)=>setSearch(unit.target.value)}
            />
          </form>
        </div>
        <div className="" id="filterRegion">
          <div className="col-md-5" id="filter">
            <select
              name="consulta1"
              onChange={(several)=>change(several.target.value)}
              className="form-select"
              id="categoria"
              required
            >
              <option value="">Filter by Region...</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default searchBar