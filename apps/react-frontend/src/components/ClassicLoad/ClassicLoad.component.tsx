import styles from './ClassicLoad.module.css'
import { useQuery } from '@apollo/client'
import GET_ITEMS from '../../graphql/GetItems.graphql.ts'
import Loading from '../Loading/Loading.component.tsx'
import { ClassicLoadProps } from './ClassicLoad.types.ts'

function ClassicLoad({ skip = 0, take = 5 }: ClassicLoadProps) {
  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: {
      skip,
      take,
    },
    returnPartialData: true,
  })

  if (loading) return <Loading />
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
