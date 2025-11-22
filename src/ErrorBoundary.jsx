import { Component } from "react";
import { Link } from "@tanstack/react-router";

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // send to TrackJS or Sentry
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh Oh!</h2>
          <p>
            There was an error with this page. <Link to="/">Click here</Link> to
            go back to the home page
          </p>
          {/* <p>{error}</p>
          <p>{info}</p> */}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
