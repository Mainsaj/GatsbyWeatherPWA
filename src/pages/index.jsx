import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
// import "/home/cabox/workspace/gatsby-hello-world/src/styles/global.css"

export default () => (
  <div /*style={{ color: `purple` }} */>
    <Header headerText="Hello Weather!" />
    <h2><Link to="/">Home</Link></h2>
    <h2><Link to="/darkabout/">DarkSky Home</Link></h2>
    <h2><Link to="/openabout/">OpenWeather Home</Link></h2>
    </div>
)