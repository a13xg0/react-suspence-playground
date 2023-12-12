import { Suspense } from 'react'
import ClassicLoad from './components/ClassicLoad/ClassicLoad.component.tsx'

import SuspenseLoad from './components/SuspenseLoad/SuspenseLoad.component.tsx'
import styles from './App.module.css'
import Loading from './components/Loading/Loading.component.tsx'

function App() {
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
    </div>
  )
}

export default App
