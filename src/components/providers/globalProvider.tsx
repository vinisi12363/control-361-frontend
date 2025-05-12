import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useState } from 'react'
import { Toaster } from 'sonner'
import MainContainer from '../Containers/MainContainer'
import { ThemeProvider } from './theme-provider'

export function GlobalProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <MainContainer>{children}</MainContainer>
          </ThemeProvider>
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  )
}
