import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Library</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto" style={{listStyleType: 'none'}}>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Library System</Link>
          </li>
          <div>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Enter book</Link>
          </li>
          </div>
          <div>
          <li className="navbar-item">
          <Link to="/stats" className="nav-link">Map Reduce</Link>
          </li>
          </div>
          <li className="navbar-item">
          <Link to="/author" className="nav-link">Add Author</Link>
          </li>
          <li className="navbar-item">
          <Link to="/search" className="nav-link">Search Author</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}