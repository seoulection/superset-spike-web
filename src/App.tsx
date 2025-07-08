import { useEffect, useRef } from 'react'
import { embedDashboard } from '@superset-ui/embedded-sdk'
import { fetchGuestToken } from './api/tokens'
import { DASHBOARD_ID, SUPERSET_DOMAIN } from './constants'
import './App.css'

function App() {
  const dashboardRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const embed = async () => {
  //     if (dashboardRef.current) {
  //       await embedDashboard({
  //         id: DASHBOARD_ID,
  //         supersetDomain: SUPERSET_DOMAIN,
  //         mountPoint: dashboardRef.current,
  //         fetchGuestToken: () => fetchGuestToken(DASHBOARD_ID),
  //         dashboardUiConfig: {
  //           filters: {
  //             expanded: false,
  //           },
  //           urlParams: {
  //             gender,
  //           },
  //         },
  //       })
  //     }
  //   }
  //
  //   embed()
  // }, [])

  return (
    <div className="wrapper">
      <h1>Superset Dashboard</h1>
      <div id="dashboard" className="dashboard" ref={dashboardRef} />

      {/* iframe embed code goes here */}
    </div>
  )
}

export default App
