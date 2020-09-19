import React from "react";
import "./Header.scss";
import backgroundImage from "./images/background.jpg";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: false,
        backgroundSize: "cover",
      }}
      className="Header"
    >
      <div
        className="HeaderText"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            minHeight: "4rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ textAlign: "center", color: "white", fontWeight: 500 }}>
            Cuay's Little Garden
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
