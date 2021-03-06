module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`,
  /*  pathPrefix: '/static-gatsby-weather',*/
  },
  plugins: [
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: 'fa2e15da160ed781e63bc33b0a4bfbab',
        location: 'Chicago',
        units: 'imperial',
        type: 'weather'
      },
    },
  
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '2c49a1c47dc8750da1cb93a420530614',
        latitude: '43.03',
        longitude: '-87.74',
        exclude: ['minutely']
      },
    }, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Weather PWA`,
        short_name: `GatsbyWeather`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ]
}