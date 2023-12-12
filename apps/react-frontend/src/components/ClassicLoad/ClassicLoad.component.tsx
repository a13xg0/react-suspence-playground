import { useGraphqlItemsLoad } from './ClassicLoad.hooks.ts'
import styles from './ClassicLoad.module.css'

function ClassicLoad() {
  const { loading, error, data } = useGraphqlItemsLoad()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <ul className={styles.container}>
      {data.items.map((item: any) => (
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
