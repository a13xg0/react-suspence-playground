import { useSuspenseQuery } from '@apollo/client'
import GET_ITEMS from '../../graphql/GetItems.graphql.ts'
import styles from './SuspenseLoad.module.css'
import { SuspendLoadProps } from './SuspenseLoad.types.ts'

function SuspenseLoad({ skip = 0, take = 5 }: SuspendLoadProps) {
  const { data, error } = useSuspenseQuery(GET_ITEMS, {
    variables: {
      skip,
      take,
    },
    returnPartialData: true,
  })

  if (error) return <p>Error : {error.message}</p>

  return (
    <ul className={styles.container}>
      {data?.items?.map((item) => (
        <li className={styles.listItem} key={item?.id}>
          <span className={`${styles.itemField} ${styles.idField}`}>
            {item?.id}
          </span>
          <span className={styles.itemField}>{item?.title}</span>
        </li>
      ))}
    </ul>
  )
}

export default SuspenseLoad
