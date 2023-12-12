import { useSuspenseQuery } from '@apollo/client'
import GET_ITEMS from '../../graphql/GetItems.graphql.ts'
import styles from '../ClassicLoad/ClassicLoad.module.css'
import { Suspense } from 'react'

function SuspenseLoad() {
  const { data, error } = useSuspenseQuery(GET_ITEMS)

  if (error) return <p>Error : {error.message}</p>

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ul className={styles.container}>
        {data.items.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <span className={`${styles.itemField} ${styles.idField}`}>
              {item.id}
            </span>
            <span className={styles.itemField}>{item.title}</span>
          </li>
        ))}
      </ul>
    </Suspense>
  )
}

export default SuspenseLoad
