import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px", fontSize: "1.5rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for does not exist.</p>
      <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
