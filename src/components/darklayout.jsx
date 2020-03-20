import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

//import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
  weatherData{
    latitude
    longitude
    timezone
    currently {
      time
      summary
      icon
      nearestStormDistance
      precipIntensity
      precipProbability
      temperature
      apparentTemperature
      dewPoint
      humidity
      pressure
      windSpeed
      windGust
      windBearing
      cloudCover
      uvIndex
      visibility
      ozone
    }
  
  }
  
}  `
}
    render={data => (
  <div>
    <Link to="/" style={{ float: `left`}}>
      Home
    </Link>
    {children}
{/*    <Link to="/">Home </Link> */}
      <h2>Location (Lat, Long): ({data.weatherData.latitude},{data.weatherData.longitude})</h2>
      <h2>Currently Summary: {data.weatherData.currently.summary}</h2>
      <h2>Temperature: {data.weatherData.currently.temperature}</h2>
      <h2>Humidity: {data.weatherData.currently.humidity}</h2>
  </div>
    )}
  />
    )