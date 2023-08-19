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


export default function RootLayout({ children }) {
  const popup = useAppStore(state => state.popup)
  
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
              <RootWrapper style={{overflowY: popup ? "hidden" : "auto"}}>
                { children }
              </RootWrapper>
          </ApolloProvider>
        </body>
      </html>
  )
}