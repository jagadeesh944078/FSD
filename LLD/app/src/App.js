import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./components/Team";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import { UserContext } from "./util/UserContext";
import Header from "./components/Header";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [lang, setLang] = useState("en");
  return (
    <UserContext.Provider value={{ isLoggedIn, setLoggedIn, lang, setLang }}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/about" element={<About lang={lang} />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/home" element={<Body />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
