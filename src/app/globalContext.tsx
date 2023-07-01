'use client'

import {FC, ReactNode} from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {QueryClient} from '@tanstack/query-core'
import {QueryClientProvider} from '@tanstack/react-query'
import {OperationsContextType, OperationsProvider} from '@/data/operationsContext'
import {FakeSnippetOperations} from '@/data/fake/fakeSnippetOperations'
import {UserProvider} from "@auth0/nextjs-auth0/client";

type GlobalContextType = {
  children: ReactNode
}

const defaultTheme = createTheme()
const queryClient = new QueryClient()
const operations: OperationsContextType = {
  snippetOperations: new FakeSnippetOperations()
}

export const GlobalContext: FC<GlobalContextType> = ({children}) => {
  return (
      <UserProvider>
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <OperationsProvider value={operations}>
          {children}
        </OperationsProvider>
      </QueryClientProvider>
    </ThemeProvider>
      </UserProvider>

  )
}