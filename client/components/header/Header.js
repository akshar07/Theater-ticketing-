import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">AMC</a>
            </div>
            <ul class="nav navbar-nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shows'>Showtimes</Link></li>
            </ul>
            </div>
        </nav>
    </header>
  )
  
  export default Header