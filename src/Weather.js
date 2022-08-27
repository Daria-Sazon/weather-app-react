import React from "react";
import "./Weather.css";
import Forecast from "./Forecast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    day: "Saturday",
    time: "15:00",
    temperature: 27,
    condition: "Clear",
    windSpeed: 2
  };

  return (
    <div className="Weather">
      <div className="body-box">
        <header>
          <form>
            <Row className="row">
              <Col xs={7}>
                <input
                  type="search"
                  placeholder="Enter a city"
                  autoComplete="off"
                  className="form-control"
                />
              </Col>
              <Col xs={3}>
                <button className="search-button current-location-button">
                  Current location
                </button>
              </Col>
            </Row>
          </form>
        </header>

        <div className="city-result">
          <div className="date-time">
            Last updated on {weatherData.day} at {weatherData.time}
          </div>
          <h1>{weatherData.city}</h1>
          <Row className="row">
            <Row className="row">
              <Col xs={3} className="weather-icon">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.condition}
                  width="110"
                />
              </Col>
              <Col xs={9} className="temp-wind">
                <Row className="row">
                  <span className="current-temperature">
                    <span className="temp">{weatherData.temperature}</span>
                    °C
                  </span>
                </Row>
              </Col>
              <div className="condition-and-wind">
                <Row className="row current-condition">
                  <strong> {weatherData.condition} </strong>
                </Row>
                <Row className="row current-wind">
                  Wind speed: {weatherData.windSpeed} m/s
                </Row>
              </div>
            </Row>
          </Row>
          <Row className="forecast">
            <Forecast day="Sun" />
            <Forecast day="Mon" />
            <Forecast day="Tue" />
            <Forecast day="Wed" />
            <Forecast day="Thu" />
          </Row>
        </div>
      </div>
    </div>
  );
}
