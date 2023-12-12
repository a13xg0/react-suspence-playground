import styles from './ClassicLoad.module.css'
import { useQuery } from '@apollo/client'
import GET_ITEMS from '../../graphql/GetItems.graphql.ts'

function ClassicLoad() {
  const { loading, error, data } = useQuery(GET_ITEMS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <ul className={styles.container}>
      {data!.items.map((item) => (
        <li className={styles.listItem} key={item.id}>
          <span className={`${styles.itemField} ${styles.idField}`}>
            {item.id}
          </span>
          <span className={styles.itemField}>{item.title}</span>
        </li>
      ))}
    </ul>
  )
}

export default ClassicLoad
