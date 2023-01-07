import React from 'react'
import { Link } from 'react-router-dom'
function Nav({search ,setSearch}) {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={e => e.preventDefault()}>
        <label htmlFor="search">Search Post</label>

        <input
          id="search"
          type="text"
          placeholder="Search Post"
          value={search}
          onChange={e => setSearch(e.target.value)}
        /> 
      </form>
     
      <ul>
        <li>
          <Link to="/">Home </Link>
          <Link to="/post">Post </Link>
          <Link to="/about">About </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav
