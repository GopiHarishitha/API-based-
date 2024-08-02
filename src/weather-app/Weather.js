import "./Weather.css";
import { useState } from "react";

function Weather() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});
  const submit = () => {
    const baseUrl = process.env.REACT_APP_BASE;
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`${baseUrl}weather?q=${search}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => setError(err));
    console.log(weather);
    if (weather.message !== "undefined") {
      setError(weather.message);
    } else {
      setError("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };
  const kelvinToCelsius = (kelvin) => {
    const celsius = kelvin - 273.15;
    return Math.round(celsius * 100) / 100;
  };
  return (
    <div className="weather">
      <div className="search">
        <input
          type="text"
          placeholder="Enter City"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {/* <button onClick={submit}>Search</button> */}
      </div>
      <div>
        {typeof weather.main !== "undefined" && (
          <div className="container">
            <p>{weather.name}</p>
            <p className="temp">{kelvinToCelsius(weather.main.temp)} C</p>
            <p>{weather.weather[0].main}</p>
            <div className="flex-box">
              <div>
                <p className="value">{weather.main.feels_like}</p>
                <p className="key">feels like</p>
              </div>
              <div>
                <p className="value">{weather.main.humidity}</p>
                <p className="key">humidity</p>
              </div>
              <div>
                <p className="value">{weather.main.pressure}</p>
                <p className="key">pressure</p>
              </div>
            </div>
          </div>
        )}
        {error !== "" && <div className="err">{error}</div>}
      </div>
    </div>
  );
}

export default Weather;
