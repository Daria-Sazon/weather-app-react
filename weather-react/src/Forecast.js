import React from "react";
import Col from "react-bootstrap/Col";

export default function Forecast(props) {
  return (
    <Col className="forecast-boxes">
      <div className="next-days">
        <h4>{props.day}</h4>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt=""
          width="75"
        />
        <div>
          <strong className="high-temp"> 25°</strong>
          <span className="low-temp"> 19°</span>
        </div>
      </div>
    </Col>
  );
}
