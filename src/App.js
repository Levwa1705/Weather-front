import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageHome from "./components/PageHome";
import PageWeather from "./components/PageWeather";

export const btnDefaultStyle = {
  padding: "16px 32px",
  cursor: "pointer",
  fontSize: 16,
  color: "white",
  border: "none",
  borderRadius: "40px",
  outline: "none",
  width: 300,
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/weather" element={<PageWeather />} />
      </Routes>
    </div>
  );
}

export default App;
