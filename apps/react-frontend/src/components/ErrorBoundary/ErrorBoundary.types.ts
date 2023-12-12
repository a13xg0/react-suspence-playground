import { ErrorInfo } from 'react'

export interface ErrorBoundaryProps {
  children: React.ReactNode
}

export interface ErrorBoundaryState {
  hasError: boolean
  errorInfo?: ErrorInfo
  error?: Error
}
