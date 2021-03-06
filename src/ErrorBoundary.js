import React, { Component } from "react";
import { Link } from "@reach/router";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          {" "}
          There was an error with this listing. <Link to="/">
            Click Here
          </Link>{" "}
          to go back to the home page.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
