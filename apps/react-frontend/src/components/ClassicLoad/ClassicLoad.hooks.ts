import { useQuery, gql } from '@apollo/client'

const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      title
      description
      completed
    }
  }
`

export function useGraphqlItemsLoad() {
  const { loading, error, data } = useQuery(GET_ITEMS)

  return { loading, error, data }
}
