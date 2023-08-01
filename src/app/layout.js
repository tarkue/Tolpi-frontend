"use client"
import 'normalize.css'
import '@/styles/constants.css'
import '@/styles/global.css'

import { MontRegular, MontSemiBold } from "@/styles/fonts"
import RootWrapper from "@/components/RootWrapper"

import classNames from '@/plugins/classNames'


export default function RootLayout({ children }) {
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
        <RootWrapper>
          { children }
        </RootWrapper>
      </body>
    </html>
  )
}