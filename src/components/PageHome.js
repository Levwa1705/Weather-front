import * as React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import api from "../api";

const PageHome = () => {
  const [date, setDate] = React.useState([]);
  let navigate = useNavigate();

  const onClick = (name) => {
    navigate(`weather?${name}`);
  };

  React.useEffect(() => {
    api.get("/city").then((response) => {
      setDate(response.data);
    });
  }, []);

  return (
    <div class="content">
      <h1>List of cities</h1>
      {date.map((item, idx) => (
        <Button
          id={item.cityId}
          name={item?.name}
          onClick={onClick}
          key={idx}
        />
      ))}
    </div>
  );
};

export default PageHome;
