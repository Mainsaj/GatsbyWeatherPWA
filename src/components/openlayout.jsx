import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

// import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
    openWeather{
      coord{
        lon
        lat
      
      }
      weather {
        id
        main
        description
        icon
      }
      main {
        feels_like
        temp
        temp_max
        temp_min
      }
      dt
      wind {
        speed
        deg
      }
      name
    }
  }`
}
    render={data => (
  <div>
        <Link to="/" style={{ float: `left`}}>
      Home
    </Link>
    {children}
        {/* <Link to="/">Home    </Link>  */}
        <h2>City Name: {data.openWeather.name}</h2>
        <h2>Wind Speed: {data.openWeather.wind.speed} mph</h2>
        <h2>Temperature: {data.openWeather.main.temp} F</h2>
        <h2>Real Feel: {data.openWeather.main.feels_like} F</h2>
        <h2>High: {data.openWeather.main.temp_max} F</h2>
        <h2>Low: {data.openWeather.main.temp_min} F</h2>
        
	
  </div>
    )}
  />
    )