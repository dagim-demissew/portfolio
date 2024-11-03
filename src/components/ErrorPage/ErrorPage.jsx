import React from "react";
import "./errorPage.css";

const ErrorPage = () => {
  return (
    <div>
      <div className="error-container">
        <h1 className="error-title">404 NOT FOUND</h1>
        <p className="error-detail">
          Oops! The resource you requested cannot be found.
        </p>
        <a className="error-link" href="/">Go Back Home?</a>
      </div>
    </div>
  );
};

export default ErrorPage;
