// Login.js
import React, { useContext, useState } from "react";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../util/UserContext";

const SECRET_KEY = "CJlbWFpbCI6ImF0dW55MEB";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn, setLoggedIn } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    fetchLogin();
  };

  const fetchLogin = async () => {
    const data = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "atuny0",
        password: "9uQFF1Lh",
        // expiresInMins: 60, // optional
      }),
    });
    const json = await data.json();

    /* stroing in cookie here api not returing set-cookie that's why its not working */

    // document.cookie = `authToken=${json.token}; expires=${new Date(
    //   new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    // ).toUTCString()}; path=/; HttpOnly; Secure; SameSite=None`;
    // console.log(document.cookie);

    const encryptedToken = CryptoJS.AES.encrypt(
      json.token,
      SECRET_KEY
    ).toString();

    sessionStorage.setItem("token", encryptedToken);
    setLoggedIn(true);
    navigate("/home");

    // const decryptedBytes = CryptoJS.AES.decrypt(
    //   encryptedToken,
    //   "CJlbWFpbCI6ImF0dW55MEB"
    // );
    // const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);
    // console.log(decryptedToken, "decryptedToken");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
