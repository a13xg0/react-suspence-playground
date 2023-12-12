import { gql, TypedDocumentNode } from '@apollo/client'
interface Data {
  items: [
    {
      id: string
      title: string
      description: string
      completed: boolean
    },
  ]
}

interface Variables {
  id: string
}

export default gql`
  query GetItems {
    items {
      id
      title
      description
      completed
    }
  }
` as TypedDocumentNode<Data, Variables>
