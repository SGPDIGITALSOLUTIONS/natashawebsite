'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const LandingPageContext = createContext<string | null>(null)

export function useLandingPage() {
  return useContext(LandingPageContext)
}

export default function LeadAttribution({ children }: { children: React.ReactNode }) {
  const [landingPage, setLandingPage] = useState<string | null>(null)
  useEffect(() => { setLandingPage(window.location.pathname) }, [])
  // Keep only the initial path in memory across client navigation; no storage or identifiers.
  return <LandingPageContext.Provider value={landingPage}>{children}</LandingPageContext.Provider>
}
