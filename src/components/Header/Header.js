import React from 'react';
import './Header.css';
const Header = ()=> {
    return (
        <div className="heading">
        <h1><span>Edu</span>Online</h1>
        <nav className="navbar bg-dark justify-content-between">
        <div>
            <a href="/latestcourses">latest courses</a>
            <a href="/reviews">reviews</a>
            <a href="/bestcourses">best courses</a>
        </div>
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>
        </div>
    )
}
export default Header;