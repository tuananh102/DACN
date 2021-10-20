import React from 'react'
import { Link,BrowserRouter as Router } from 'react-router-dom'
import NavMenu from '../features/NavMenu'

function Product() {
  return (
    <div>
      <NavMenu/>
      <Router>
      <ul>
        <li> <Link to="/">1</Link></li>
        <li> <Link to="/hello">2</Link></li>
        <li> <Link to="/3">3</Link></li>
        <li> <Link to="/4">4</Link></li>
        <li> <Link to="/5">5</Link></li>
      </ul>
      </Router>

    </div>
  )
}

export default Product
