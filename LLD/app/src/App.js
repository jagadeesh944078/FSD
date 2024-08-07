import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Team from "./components/Team";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import { UserContext } from "./util/UserContext";
import Header from "./components/Header";
import Accordian from "./components/Accordian";
import Comments from "./components/comments/Comments";
import ImageSlider from "./components/image-slider/ImageSlider";
import Pagination from "./components/pagination/Pagination";
import SearchUi from "./components/search-ui/SearchUi";
import PrivateRoute from "./PrivateRoute";
import Unauthorized from "./components/Unauthorized";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [lang, setLang] = useState("en");
  return (
    <UserContext.Provider value={{ isLoggedIn, setLoggedIn, lang, setLang }}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="/login" />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/about" element={<About lang={lang} />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/home" element={<Body />}></Route>
              <Route element={<PrivateRoute roles={["admin"]} />}>
                <Route path="/accordian" element={<Accordian />}></Route>
              </Route>
              <Route path="/comments" element={<Comments />}></Route>
              <Route path="/image-slider" element={<ImageSlider />}></Route>
              <Route path="/pagination" element={<Pagination />}></Route>
              <Route path="/search-ui" element={<SearchUi />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
