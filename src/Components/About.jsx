// this is about page for react router dom purpose


import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/About"}>
        <button>About</button>
      </Link>
      <h3>This is About Page</h3>
    </div>
  )
}
