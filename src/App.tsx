import MainContainer from './components/Containers/MainContainer'
import Page from './pages/vehicles'
import { ThemeProvider } from './components/providers/theme-provider'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainContainer>
        <Page/>
      </MainContainer>
   </ThemeProvider>
  )
}

export default App
