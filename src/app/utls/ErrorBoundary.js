"use client"

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or report it to an error monitoring service here
    console.log('Error:', error);
    console.log('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI when an error occurs
      return <div className="text-center text-red-400 text-2xl">Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;