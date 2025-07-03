import { useEffect, useRef } from 'react'
import { embedDashboard } from '@superset-ui/embedded-sdk'
import { fetchGuestToken } from './api/tokens'
import { SUPERSET_DOMAIN } from './constants'
import './App.css'

function App() {
  const dashboardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const embed = async () => {
      if (dashboardRef.current) {
        await embedDashboard({
          id: '11db5515-9b83-4bd7-b4a3-9ee1bbdb9365',
          supersetDomain: SUPERSET_DOMAIN,
          mountPoint: dashboardRef.current,
          fetchGuestToken: () => fetchGuestToken(),
        })
      }
    }

    embed()
  }, [])

  return (
    <>
      <h1>🔥 Super Hot Superset Dashboard 🔥</h1>
      <div id="dashboard" className="dashboard" ref={dashboardRef} />
    </>
  )
}

export default App
