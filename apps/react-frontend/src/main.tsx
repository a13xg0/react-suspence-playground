import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App.tsx'
import './index.css'
import GET_ITEMS from './graphql/GetItems.graphql.ts'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

client.writeQuery({
  query: GET_ITEMS,
  variables: { skip: 10, take: 5 },
  data: {
    items: [
      {
        id: '10',
        title: 'Cached data for item 10',
      },
    ],
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
