import React from "react";
import close from "./close-icon.png";
import { getLatestNotification } from "./utils";
import "./Notifications.css";

export default function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          background: "transparent",
          position: "absolute",
          border: "none",
          right: "20px",
          top: "40px",
        }}
        aria-label="Close"
        onClick={() => {
          console.log("Close button has been clicked");
        }}
      >
        <img src={close} alt="close-button" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li
          style={{ color: "blue" }}
          data-priority="default"
          className="default"
        >
          New course available
        </li>
        <li style={{ color: "red" }} data-priority="urgent">
          New resume available
        </li>
        <li
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          data-priority="urgent"
        ></li>
      </ul>
    </div>
  );
}
