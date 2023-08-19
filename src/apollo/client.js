"use client"
import { getVKLink } from '@/service/service';
import { ApolloClient , createHttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: `wss://xn--h1afifm.xn--p1ai/query?${getVKLink()}`, 
    retryWait: 1000
}),
);


const httpLink = createHttpLink({
  uri: `https://xn--h1afifm.xn--p1ai/query?${getVKLink()}`,
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