import { useEffect, useState } from 'react'

const mgaLink = [
  ['home', 'TAMPILAN'],
  ['kaalaman', 'KASUOTAN'],
  ['habi', 'MGA HABI'],
]

export default function Header() {
  const [aktibo, setAktibo] = useState('home')

  useEffect(() => {
    const mgaSeksiyon = mgaLink.map(([id]) => document.getElementById(id)).filter(Boolean)
    const tagamasid = new IntersectionObserver((mgaEntry) => {
      const nakikita = mgaEntry.find((entry) => entry.isIntersecting)
      if (nakikita) setAktibo(nakikita.target.id)
    }, { rootMargin: '-25% 0px -60% 0px' })
    mgaSeksiyon.forEach((seksiyon) => tagamasid.observe(seksiyon))
    return () => tagamasid.disconnect()
  }, [])

  return <>
    <div className="rainbow-top-bar" />
    <div className="top-bar"><span>📍 Mini Cultural Exhibit</span></div>
    <div className="traditional-pattern" aria-hidden="true" />
    <header className="navbar"><a className="logo" href="#home">HABI</a><nav>
      {mgaLink.map(([id, pangalan]) => <a className={aktibo === id ? 'active' : ''} href={`#${id}`} onClick={() => setAktibo(id)} key={id}>{pangalan}</a>)}
    </nav></header>
  </>
}
