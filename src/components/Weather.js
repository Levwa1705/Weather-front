import React from "react";
import { useNavigate } from "react-router-dom";
import { btnDefaultStyle } from "../App";

const Weather = ({ name, main }) => {
  const navigate = useNavigate();
  const time = new Date();
  return (
    <div className="weather_data">
      <button
        class="weather_button"
        onClick={() => navigate(-1)}
        style={{
          ...btnDefaultStyle,
          backgroundColor: "#7abcff",
        }}
      >
        go back
      </button>
      <div class="wrapper">
        <div class="weather">
          <div class="city">
            <h1>{name}</h1>
          </div>
          <div class="clearfix"></div>

          <div class="cont">
            <div class="icon">
              <i class="fa fa-sun-o spin glow"></i>
              <i class="fa fa-cloud wind"></i>
              <i class="fa fa-cloud two"></i>
            </div>
            <div class="temp">
              <div class="current">{main?.temp.toFixed(0) - 273}&deg;</div>
              <div class="high">
                High: {main?.temp_max.toFixed(0) - 273}&deg;
              </div>
              <div class="low">Low: {main?.temp_min.toFixed(0) - 273}&deg;</div>
            </div>
            <div class="clearfix"></div>
            <div class="date">
              <p>
                {(time.getMonth() > 8
                  ? time.getMonth() + 1
                  : "0" + (time.getMonth() + 1)) +
                  "/" +
                  (time.getDate() > 9 ? time.getDate() : "0" + time.getDate()) +
                  "/" +
                  time.getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
