import { Suspense, useState } from 'react'
import ClassicLoad from './components/ClassicLoad/ClassicLoad.component.tsx'

import SuspenseLoad from './components/SuspenseLoad/SuspenseLoad.component.tsx'
import styles from './App.module.css'
import Loading from './components/Loading/Loading.component.tsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.component.tsx'

function App() {
  const [enablePartialData, setEnablePartialData] = useState(false)
  const [throwError, setThrowError] = useState(false)
  return (
    <div className={styles.container}>
      <h2>Single component</h2>
      <div className={styles.loadContainer}>
        <ClassicLoad />
        <Suspense fallback={<Loading />}>
          <SuspenseLoad />
        </Suspense>
      </div>
      <h2>Stack of components</h2>
      <div className={styles.loadContainer}>
        <div className={styles.loadStack}>
          <ClassicLoad />
          <ClassicLoad skip={5} take={5} />
        </div>
        <Suspense fallback={<Loading />}>
          <div className={styles.loadStack}>
            <SuspenseLoad />
            <SuspenseLoad skip={5} take={5} />
          </div>
        </Suspense>
      </div>
      <h2>Partial data</h2>
      {enablePartialData && (
        <div className={styles.loadContainer}>
          <div className={styles.loadStack}>
            <ClassicLoad skip={10} take={5} />
          </div>
          <Suspense fallback={<Loading />}>
            <div className={styles.loadStack}>
              <SuspenseLoad skip={10} take={5} />
            </div>
          </Suspense>
        </div>
      )}
      {!enablePartialData && (
        <button onClick={() => setEnablePartialData(true)}>Load data</button>
      )}
      <h2>Error handling</h2>
      {throwError && (
        <div className={styles.loadContainer}>
          <div className={styles.loadStack}>
            <ClassicLoad skip={100500} take={5} />
          </div>
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <div className={styles.loadStack}>
                <SuspenseLoad skip={100500} take={5} />
              </div>
            </Suspense>
          </ErrorBoundary>
        </div>
      )}
      {!throwError && (
        <button onClick={() => setThrowError(true)}>Load data</button>
      )}
    </div>
  )
}

export default App
