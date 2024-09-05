import { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
 
  const [currentWeather, setCurrentWeather] = useState({
    weather: [],
  });
  const [city, setCity] = useState("karachi");

  useEffect(() => {
    console.log("Use effect ka function call hogya");
    getWeather();
  }, [city]);

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=107f0a4900fe176149bf71880f2351a2`
    )
      .then((res) => res.json())
      .then((res) => {
       setCurrentWeather(res);
      });
  };

  const temp = Math.round(currentWeather?.main?.temp - 273.15);
  const feelsLike = Math.round(currentWeather?.main?.feels_like - 273.15);
  const weatherCondtion = currentWeather?.weather[0]?.main;

  return (
    <div>
      <div className="main">
        <form  onSubmit={(e) => setCity(e.target.value)}>
          <div className="search-box">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <input type="text" placeholder="Type Your City" required />
            <button  type="submit">
              <img src="https://img.icons8.com/?size=50&id=7695&format=png" alt="" />
            </button>
          </div>
        </form>

        <div className="shadow p-2 my-3">
        <div className="flex justify-between">
          <h1>Temperature</h1>
          <h1>{temp} C</h1>
        </div>
        <div className="flex justify-between">
          <h1>Feels Like</h1>
          <h1>{feelsLike} C</h1>
        </div>
        <div className="flex justify-between">
          <h1>Weather</h1>
          <h1>{weatherCondtion}</h1>
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;
