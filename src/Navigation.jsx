import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      style={{
        padding: "1rem",
        color: "white",

      }}
    >
      <Link
        to="/Dogs"
        style={{
          color: "white",
          padding : "1rem",
          textDecoration: "none",
        }}
      >
        Dogs
      </Link>
      <Link
        to="/Fox"
        style={{
          color: "white",
          padding : "1rem",
          textDecoration: "none",
        }}
      >
        Fox
      </Link>
      <Link
        to="/Rice"
        style={{
          color: "white",
          padding : "1rem",
          textDecoration: "none",
        }}
      >
        Rice
      </Link>
      <Link
        to="/List"
        style={{
          color: "red",
          padding : "1rem",
          textDecoration: "none",
        }}
      >
        List
      </Link>
      <Link
        to="/Contactus"
        style={{
          color: "red",
          padding : "1rem",
          textDecoration: "none",
        }}
      >
        ContactUS
      </Link>
    </nav>
  );
};

export default Navigation;
