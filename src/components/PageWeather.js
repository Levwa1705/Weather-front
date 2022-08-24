import React from "react";
import Weather from "./Weather";
import { useLocation } from "react-router-dom";
import api from "../api";

const PageWeather = () => {
  let param = useLocation();
  const [date, setDate] = React.useState({});

  React.useEffect(() => {
    api.get(`/weather/city?q=${param.search.substr(1)}`).then((response) => {
      setDate(response.data);
    });
  }, [param]);

  return <Weather name={date.name} main={date.main} />;
};

export default PageWeather;
