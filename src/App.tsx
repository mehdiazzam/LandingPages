import { useState } from 'react'
import Hub from './components/Hub'
import FintechPage from './pages/FintechPage'
import RestaurantPage from './pages/RestaurantPage'
import MusicPage from './pages/MusicPage'

type Page = 'hub' | 'fintech' | 'restaurant' | 'music'

function App() {
  const [page, setPage] = useState<Page>('hub')

  const goBack = () => setPage('hub')

  if (page === 'fintech') return <FintechPage onBack={goBack} />
  if (page === 'restaurant') return <RestaurantPage onBack={goBack} />
  if (page === 'music') return <MusicPage onBack={goBack} />

  return <Hub onSelect={(p) => setPage(p)} />
}

export default App
