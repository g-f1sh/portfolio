import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/portfolio')
  }, [router])
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h1>Redirecting...</h1>
      <p>If you are not redirected automatically, <a href="/portfolio">click here</a></p>
    </div>
  )
} 