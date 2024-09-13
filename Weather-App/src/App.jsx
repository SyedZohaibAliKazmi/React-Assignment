// import React, { useState, useEffect } from 'react';
// import './App.css';
// import loading from "./assets/loading.gif"

// function App() {
//   const [city, setCity] = useState(null); // Default city
//   const [weatherData, setWeatherData] = useState(null); // Weather data state
//   const [loadingImg ,setloadingImg] = useState(""); 

//   const [error, setError] = useState(null); // Error state

//   const apiKey = '107f0a4900fe176149bf71880f2351a2'; // Replace with your OpenWeatherMap API key

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//         );
       
//         if (!response.ok) {
//           throw new Error('City not found');
//         }
        
//         const data = await response.json();
//          setloadingImg(true); // Show loading image
//         setWeatherData(data);
//         setError(null); // Clear any previous errors
//         setloadingImg(false);
        
//       } catch (err) {
//         setError(err.message);
//         setWeatherData(null); // Clear previous data
//         // setloadingImg(false); // Hide loading image if fetch fails or city is not found  // Clear previous data and error message if fetch fails or city is not found  // Hide loading image if fetch fails or city is not found  // Clear previous data and error message if fetch fails or city is not found  // Hide loading image if fetch fails or city is not found  // Clear previous data and error message if fetch fails or city is not found  // Hide loading image if fetch fails
//       }
//     };

//     fetchWeatherData();
//   }, [city, apiKey]);

//   const handleInputChange = (e) => {
//     setCity(e.target.value);
//   };

//   return (
//     <div className="App">
//       <h1>Weather App</h1>
//       <input
//         type="text"
//         placeholder="Enter city name"
//         value={setCity.value}
//         // onChange={}
//       />
//       <button onClick={handleInputChange}>Submit</button>
//      {loadingImg && <img src={loading} alt="loading..." />}  {/* If loadingImg is true, show loading image */}
//       {error && <p className="error">{error}</p>}
//       {weatherData && (
//         <div className="weather-info">
//           <h2>{weatherData.name}</h2>
//           <p>Temperature: {weatherData.main.temp} °C</p>
//           <p>Feels Like: {weatherData.main.feels_like} °C</p>
//           <p>Weather: {weatherData.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



// ====================================================================================================================

// import React, { useState } from 'react';

// const api = {
//   key: "107f0a4900fe176149bf71880f2351a2", 
//   base: "https://api.openweathermap.org/data/2.5/",
// };

// function App() {
//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState({});

//   // Search function
//   const search = async () => {
//     if (query !== "") {
//       await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then((res) => res.json())
//         .then((result) => {
//           setWeather(result);
//           setQuery("");
//         });
//     }
//   };

//   const dateBuilder = (d) => {
//     let months = [
//       "January", "February", "March", "April", "May", "June", "July",
//       "August", "September", "October", "November", "December",
//     ];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`;
//   };

//   return (
//     <div className={(typeof weather.main !== "undefined") ? ((weather.main.temp > 16) ? "app warm" : "app") : "app"}>
//       <main>
//         <div className="search-box">
//           <input
//             type="text"
//             className="search-bar"
//             placeholder="Search..."
//             onChange={(e) => setQuery(e.target.value)}
//             value={query}
//           />
//           <button onClick={search}>Get Weather</button>
//         </div>
//         {(typeof weather.main !== "undefined") ? (
//           <div>
//             <div className="location-box">
//               <div className="location">{weather.name}, {weather.sys.country}</div>
//               <div className="date">{dateBuilder(new Date())}</div>
//             </div>
//             <div className="weather-box">
//               <div className="temp">{Math.round(weather.main.temp)}°C</div>
//               <div className="feels-like">Feels Like: {Math.round(weather.main.feels_like)}°C</div>
//               <div className="weather">{weather.weather[0].description}</div>
//             </div>
//           </div>
//         ) : ('')}
//       </main>
//     </div>
//   );
// }

// export default App;