import Page from './pages/vehicles'
import { GlobalProviders } from './components/providers/globalProvider'

function App() {

  return (
      <GlobalProviders>
        <Page/>
      </GlobalProviders>
  )
}

export default App
