import { Suspense } from 'react'
import ClassicLoad from './components/ClassicLoad/ClassicLoad.component.tsx'

import SuspenseLoad from './components/SuspenseLoad/SuspenseLoad.component.tsx'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.loadContainer}>
        <ClassicLoad />
        <Suspense fallback={<p>Loading...</p>}>
          <SuspenseLoad />
        </Suspense>
      </div>
    </div>
  )
}

export default App
