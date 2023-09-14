import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar } from "./components";
import { Detail, Form, Home, Landing } from "./views";
import { useState } from "react";

function App() {
  const location = useLocation();

  const [page, setPage] = useState(1);

  return (
    <div className="App">
      {/* <h1>Henry Videogames</h1> */}
      {location.pathname !== "/" && <NavBar setPage={setPage} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home page={page} setPage={setPage} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
