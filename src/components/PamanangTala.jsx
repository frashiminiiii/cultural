const mgaTala = [
  ['01', 'Hibla', 'Bawat hibla ay pinipili at inihahanda nang may tiyaga.'],
  ['02', 'Disenyo', 'Bawat guhit ay may kahulugang nagmumula sa pamayanan.'],
  ['03', 'Pamana', 'Bawat tela ay nag-uugnay sa kasaysayan at sa kasalukuyan.'],
]

export default function PamanangTala() {
  return <section className="tala-section" aria-label="Mahahalagang tala tungkol sa paghahabi">
    <div className="tala-heading"><p className="eyebrow">HABI NG BUHAY</p><h2>SA BAWAT HIBLA, MAY <span>KUWENTO</span></h2></div>
    <div className="tala-list">{mgaTala.map(([numero, pamagat, teksto]) => <article className="tala-item" key={numero}><strong>{numero}</strong><div><h3>{pamagat}</h3><p>{teksto}</p></div></article>)}</div>
  </section>
}
