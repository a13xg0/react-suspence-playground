import { gql, TypedDocumentNode } from '@apollo/client'
interface Data {
  items: [
    {
      id: string
      title: string
      description?: string
      completed?: boolean
    },
  ]
}

export interface Variables {
  skip?: number
  take?: number
}

export default gql`
  query GetItems($skip: Int = 0, $take: Int = 5) {
    items(skip: $skip, take: $take) {
      id
      title
      description
      completed
    }
  }
` as TypedDocumentNode<Data, Variables>
