import { Suspense } from 'react'
import ClassicLoad from './components/ClassicLoad/ClassicLoad.component.tsx'

import SuspenseLoad from './components/SuspenseLoad/SuspenseLoad.component.tsx'
import styles from './App.module.css'
import Loading from './components/Loading/Loading.component.tsx'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.loadContainer}>
        <ClassicLoad />
        <Suspense fallback={<Loading />}>
          <SuspenseLoad />
        </Suspense>
      </div>
    </div>
  )
}

export default App
