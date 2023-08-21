"use client"
import 'normalize.css'
import '@/styles/constants.css'
import '@/styles/global.css'

import { MontRegular, MontSemiBold } from "@/styles/fonts"
import RootWrapper from "@/components/RootWrapper"

import classNames from '@/plugins/classNames'

import { ApolloProvider } from '@apollo/client'
import client from '@/apollo/client'

import { useAppStore } from '@/store/appStore'
import { useEffect } from 'react'

import server from "@/server/server";


export default function RootLayout({ children }) {
  const popup = useAppStore(state => state.popup)
  const blockScroll = useAppStore(state => state.blockScroll)
  const setCountries = useAppStore(state => state.setCountries);

  useEffect(() => {
    server.getCountry().then(c => setCountries(c))
  }, [])
  
  return (
      <html lang="en">
        <head>
          <title>Толпи</title>
          <meta 
            name="viewport" 
            content="width=device-width,initial-scale=1,shrink-to-fit=no, user-scalable=no, minimum-scale=1.0, maximum-scale = 1.0"
          />
        </head>
        <body 
          className={classNames(MontRegular.variable, MontSemiBold.variable)}
        >
          <ApolloProvider client={client}>
              <RootWrapper 
                style={
                  {overflowY: (popup || blockScroll) ? "hidden" : "auto"}
                }
              >
                { children }
              </RootWrapper>
          </ApolloProvider>
        </body>
      </html>
  )
}