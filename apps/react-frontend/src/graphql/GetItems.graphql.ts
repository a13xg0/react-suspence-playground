import { gql } from '@apollo/client'

export default gql`
  query GetItems {
    items {
      id
      title
      description
      completed
    }
  }
`
