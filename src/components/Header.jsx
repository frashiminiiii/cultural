import { useEffect, useRef, useState } from 'react'

const mgaLink = [
  ['home', 'TAMPILAN'],
  ['kaalaman', 'KASUOTAN'],
  ['habi', 'MGA HABI'],
]

export default function Header() {
  const [aktibo, setAktibo] = useState('home')
  const pinipilingSeksiyon = useRef(null)

  useEffect(() => {
    const mgaSeksiyon = mgaLink.map(([id]) => document.getElementById(id)).filter(Boolean)
    const ayusinAktibongSeksiyon = () => {
      if (pinipilingSeksiyon.current) {
        const target = document.getElementById(pinipilingSeksiyon.current)
        const layoSaTarget = target?.getBoundingClientRect().top ?? 0
        if (target && (layoSaTarget < -40 || layoSaTarget > 40)) return
        pinipilingSeksiyon.current = null
      }

      const punto = window.scrollY + window.innerHeight * 0.35
      const kasalukuyan = mgaSeksiyon.reduce((pinakamalapit, seksiyon) => {
        if (seksiyon.offsetTop <= punto) return seksiyon
        return pinakamalapit
      }, mgaSeksiyon[0])

      if (kasalukuyan) setAktibo(kasalukuyan.id)
    }

    ayusinAktibongSeksiyon()
    window.addEventListener('scroll', ayusinAktibongSeksiyon, { passive: true })
    window.addEventListener('resize', ayusinAktibongSeksiyon)
    return () => {
      window.removeEventListener('scroll', ayusinAktibongSeksiyon)
      window.removeEventListener('resize', ayusinAktibongSeksiyon)
    }
  }, [])

  return (
    <>
      <div className="rainbow-top-bar" />
      <div className="top-bar"><span>📍 Mini Cultural Exhibit</span></div>
      <div className="traditional-pattern" aria-hidden="true" />
      <header className="navbar">
        <a className="logo" href="#home">HABI</a>
        <nav>
          {mgaLink.map(([id, pangalan]) => (
            <a
              className={aktibo === id ? 'active' : ''}
              href={`#${id}`}
              onClick={(event) => {
                event.preventDefault()
                pinipilingSeksiyon.current = id
                setAktibo(id)
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              key={id}
            >
              {pangalan}
            </a>
          ))}
        </nav>
      </header>
    </>
  )
}
