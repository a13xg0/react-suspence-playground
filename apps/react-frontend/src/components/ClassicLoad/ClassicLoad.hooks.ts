import { useQuery } from '@apollo/client'

import GET_ITEMS from '../../graphql/GetItems.graphql.ts'

export function useGraphqlItemsLoad() {
  const { loading, error, data } = useQuery(GET_ITEMS)

  return { loading, error, data }
}
