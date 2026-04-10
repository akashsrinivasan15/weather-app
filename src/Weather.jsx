import { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async (e) => {
    e.preventDefault();
    if (!city) return;
    setLoading(true); // start loading
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API}&units=metric`;
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      alert("City not found!");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div
      className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-10 shadow-lg w-fit text-black
    "
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Weather App 🌤️</h2>
      <form onSubmit={getWeather} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter city"
          className="p-2 outline-none text-black"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white hover:bg-blue-600 transition p-2 rounded-lg"
        >
          Search
        </button>
      </form>
      <div className="mt-6 text-center">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : data ? (
          <>
            <h3 className="text-xl font-semibold">{data.name}</h3>
            <p>🌡️ Temperature: {data.main.temp}°C</p>
            <p>🌥️ Weather: {data.weather[0].main}</p>
            <p>💧 Humidity: {data.main.humidity}%</p>
          </>
        ) : (
          <p className="text-sm opacity-70 mt-4">
            Enter a city to see the weather
          </p>
        )}
      </div>
    </div>
  );
}

export default Weather;
