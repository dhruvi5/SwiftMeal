import React from "react";
import ReactDOM from "react-dom/client";//The react-dom/client APIs let you render React components on the client (in the browser)
// const heading = React.createElement("h1",{ id : "head" },"HEY Rajput!!!");
const heading = React.createElement("div",{ id : "head" },
[ React.createElement("h1",{},"My name is Dhruvi Rajput"),
React.createElement("h2",{},"I am in BTECH")]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
