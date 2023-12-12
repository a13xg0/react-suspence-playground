import { Component, ErrorInfo } from 'react'
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from './ErrorBoundary.types.ts'

import styles from './ErrorBoundary.module.css'

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: undefined,
      errorInfo: undefined,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <h1>Something went wrong.</h1>
          <div>
            <b>Message</b> {this.state.error?.message}
          </div>
          <div>
            <b>Info</b> {this.state.errorInfo?.digest}
          </div>
          <div>
            <b>Component stack</b> {this.state.errorInfo?.componentStack}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
