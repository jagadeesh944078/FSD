import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./components/Team";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <header className="text-2xl font-bold bg-black p-4 mb-2 text-white flex">
        Memes Page
        <nav className="justify-between ml-10">
          <a href="/">Home</a>
          <a href="/about" className="ml-5 mr-5">
            About
          </a>
          <a href="/team">Team</a>
          <a href="/login" className="ml-5">
            Login
          </a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />}></Route>
            <Route path="/team" element={<Team />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
