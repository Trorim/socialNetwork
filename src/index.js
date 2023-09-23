import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const dialogsData = [
    { id: 1, userName: "Ivan" },
    { id: 2, userName: "John" },
    { id: 3, userName: "Max" },
];

const messageData = [
    { message: "Lorem ipsum dolor sit amet." },
    {
        message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolore, facere?",
    },
    { message: "Lorem, ipsum dolor." },
];

const postsData = [
    { message: "Hello, guys" },
    { message: 'It"s my first post' },
    { message: "WOW!!!" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App
        dialogsData={dialogsData}
        messageData={messageData}
        postsData={postsData}
    />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
