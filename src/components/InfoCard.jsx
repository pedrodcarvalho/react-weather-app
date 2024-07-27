import React from 'react';

import { FaTemperatureArrowUp } from 'react-icons/fa6';
import { FaTemperatureArrowDown } from 'react-icons/fa6';

const InfoCard = ({ payload }) => {
  const { data, loading, error } = payload;

  const getAirQualityBadge = (airQuality) => {
    switch (airQuality) {
      case 1:
        return <div className="badge badge-sm badge-success gap-2">Good</div>;
      case 2:
        return <div className="badge badge-sm badge-info gap-2">Fair</div>;
      case 3:
        return <div className="badge badge-sm badge-warning gap-2">Moderate</div>;
      case 4:
        return <div className="badge badge-sm badge-error gap-2">Poor</div>;
      case 5:
        return <div className="badge badge-sm badge-error gap-2">Very Poor</div>;
      default:
        return <div className="badge badge-sm badge-error gap-2">Unknown</div>;
    }
  };

  return (
    <>
      {!loading && !error && (
        <div className="stats shadow-2xl drop-shadow-xl max-675px:grid-cols-1 max-675px:grid-rows-3 max-675px:gap-4">
          <div className="stat max-675px:border-none">
            <div className="stat-figure text-primary">
              <img
                src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt=""
              />
            </div>
            <div className="stat-title font-semibold">Temperature Now</div>
            <div className="stat-value text-primary">{Math.round(data.main.temp)} °C</div>
            <div className="stat-desc">
              {data.weather[0].main}, {data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}
            </div>
          </div>
          <div className="stat max-675px:border-none">
            <div className="stat-figure text-secondary">
              {Math.round(data.main.feels_like) > 25 ? (
                <span className="flex items-center gap-1 text-red-500 font-bold">
                  <FaTemperatureArrowUp />
                  Hot
                </span>
              ) : (
                <span className="flex items-center gap-1 text-blue-500 font-bold">
                  <FaTemperatureArrowDown />
                  Cold
                </span>
              )}
            </div>
            <div className="stat-title font-semibold">Feels Like</div>
            <div className="stat-value text-primary">{Math.round(data.main.feels_like)} °C</div>
            <div className="flex flex-row space-x-5">
              <div className="stat-desc">Max: {Math.round(data.main.temp_max)} °C</div>
              <div className="stat-desc">Min: {Math.round(data.main.temp_min)} °C</div>
            </div>
          </div>
          <div className="stat max-675px:border-none">
            <div className=" text-primary">
              <div className="stat-desc font-semibold">Wind</div>
              <div className="stat-title text-primary font-mono">{data.wind.speed} km/h</div>
              <div className="stat-desc font-semibold">Humidity</div>
              <div className="stat-title text-primary font-mono">
                {data.main.humidity}% {data.airQuality && getAirQualityBadge(data.airQuality)}
              </div>
              <div className="stat-desc font-semibold">Pressure</div>
              <div className="stat-title text-primary font-mono">{data.main.pressure} hPa</div>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center h-20">
          <p className="text-gray-500 font-semibold">Search for a city...</p>
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center h-20">
          <p className="text-red-500 font-semibold">City not found!</p>
        </div>
      )}
    </>
  );
};

export default InfoCard;
