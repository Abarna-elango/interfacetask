import "./App.css";
import FormValue from "./task/FormValue";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormValue  />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
