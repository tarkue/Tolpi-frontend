"use client"
import { getVKLink } from '@/service/service';
import { ApolloClient , createHttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { API_URL } from '@/config/config';

const wsLink = new GraphQLWsLink(
  createClient({
    url: `wss://${API_URL}/query?${getVKLink()}`, 
    retryWait: 1000
}),
);


const httpLink = createHttpLink({
  uri: `https://${API_URL}/query?${getVKLink()}`,
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  credentials: "include"
});


export default client