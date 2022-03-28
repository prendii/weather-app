import './App.css';
import React, { useState } from 'react'
// Prendi Bobo | 101187580

function App() {

  // storing API key
  const apiKey = '9fc456f67573ea900c158c8390bc94c0'

  // storing weather info, from api
  const [weatherInfo, setWeatherInfo] = useState([{}])
  // storing city entered by user
  const [city, setCity] = useState("")

  // getting infomation from api for our app to use
  const calcWeather = (event) => {
    if (event.key == "Enter") {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setWeatherInfo(data)

      })
    }
  }

  // by default user does not enter value, so we provide instructions at start
  // checking if user enter a city, if not display instructions. if they do, provide the following info from api
  // error checking, if user does not enter valid city, tell them to try again, if they do, leave it empty.
  return (
    <div className="container">
      <p className="title1">Weather App</p>
      <p className="title2">Prendi Bobo | 101187580</p>
      <input className = "textbox" placeholder="Please enter a city..." onChange={e => setCity(e.target.value)} value={city} onKeyPress={calcWeather} />

        {typeof weatherInfo.main === 'undefined' ? (
          <div>
            <p>Please enter a city above and press enter to see current weather </p>
          </div>
        ): (
          <div>
            <p className="city">{weatherInfo.name}</p>
            <p className="temperature">{Math.round(weatherInfo.main.temp)}°C</p>
            <p className="weather">{weatherInfo.weather[0].main}</p>
          </div>  
        )}

        {weatherInfo.cod === "404" ? (
          <p>Incorrect city... Please try again...</p>
        ) : (
          <>
          </>
        )}  

    </div>
  );
}

export default App;
