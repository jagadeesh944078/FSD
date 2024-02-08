//import express using require
const express = require("express");

//create the app instance
const app = express();

//create the port
const PORT = 3010;

//create the middleware
//middleware is like anything which reaches to the next line goes thorugh this particular code
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" +
      "script-src 'self' 'unsafe-inline' 'nonce-randomkey' http://unsecure.com;"
  );
  //"next" job  is like my job is done i will pass to next line
  next();
});

//exposing public folder so that it can accesible
app.use(express.static("public"));

//if someone looking  / or root send some data
app.get("/", (req, res) => {
  //using response you can send back the data
  res.sendFile(__dirname + "/index.html");
});

// listen on the port
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
