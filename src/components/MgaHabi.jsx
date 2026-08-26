import { useRef, useState } from 'react'
import { PahinaControls } from './Kaalaman'

const mgaTela = [
  ['Pinilian', 'Ilocos', 'Ang mga geometrikong disenyo ay nagpapakita ng pagkamalikhain at tradisyon ng mga Ilokano.', 'Ginagamit sa paggawa ng tradisyonal na kasuotan, kumot, at iba pang tela.', 'https://images.unsplash.com/photo-1528459105426-b9548367069b?q=80&w=700'],
  ['Kalinga', 'Kalinga, Cordillera', 'Ang mga guhit at geometrikong disenyo ay nagpapakita ng pagkakakilanlan at kultura ng mga Kalinga.', 'Ginagamit sa tradisyonal na kasuotan at palamuti.', 'https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=700'],
  ['Piña', 'Aklan, Panay', 'Kilala sa pino at masalimuot na paghahabi, na nagpapakita ng mataas na kasanayan ng mga manghahabi.', 'Ginagamit sa Barong Tagalog, saya, panuelo, at iba pang pormal na kasuotan.', 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=700'],
  ['Hablon', 'Panay, lalo na sa Iloilo', 'Ang mga guhit at parisukat na disenyo ay nagpapakita ng tradisyunal na sining at pagkakakilanlan ng mga taga-Panay.', 'Ginagamit sa patadyong, panuelo, damit, at iba pang kasuotan.', 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=700'],
  ['Bagobo Inabal', 'Davao del Sur, Mindanao', 'Ang mga disenyo ay sumasalamin sa kultura, kalikasan, at paniniwala ng mga Bagobo.', 'Ginagamit sa tradisyonal na kasuotan at seremonyal na tela.', 'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?q=80&w=700'],
  ['Dagmay', 'Silangang Mindanao; mga Mandaya', 'Ang mga disenyo ay hango sa kalikasan, hayop, at mga paniniwala ng mga Mandaya.', 'Ginagamit sa tradisyonal na kasuotan, palamuti, at iba pang gamit.', 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=700'],
  ["T'nalak", "South Cotabato; mga T'boli", 'Ang mga disenyo ay may kaugnayan sa kalikasan, paniniwala, at kultura ng mga T’boli.', 'Ginagamit bilang tradisyonal na tela, kasuotan, at seremonyal na gamit.', 'https://images.unsplash.com/photo-1602523961358-f9f03dd557db?q=80&w=700'],
  ['Mabal Tabih', 'Sarangani at South Cotabato; mga Blaan', 'Ang paghahabi ay mahalagang bahagi ng kultura ng Blaan at iniuugnay sa kanilang paniniwala at espirituwalidad.', 'Tabih, ang tradisyunal na palda o telang pantubo ng mga Blaan.', 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=700'],
  ['Saputangan', 'Basilan; mga Yakan', 'Kilala sa masalimuot at makukulay na disenyo na nagbibigay ng lalim at ilusyon sa pattern.', 'Isang parisukat na tradisyunal na tela na ginagamit sa iba’t ibang kasuotang Yakan.', 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=700'],
]

function TelaRow({ tela, index }) {
  const [uri, pinagmulan, kahulugan, gamit, larawan] = tela
  return <article className={`tela-row${index % 2 ? ' reverse' : ''}`}>
    <img src={larawan} alt={`Telang ${uri}`} loading="lazy" decoding="async" />
    <div><p className="tela-origin">{pinagmulan}</p><h3>{uri}</h3><p><strong>Kahulugan ng disenyo:</strong> {kahulugan}</p><p><strong>Gamit:</strong> {gamit}</p></div>
  </article>
}

export default function MgaHabi() {
  const [pahina, setPahina] = useState(0)
  const seksiyonRef = useRef(null)
  const nakikita = mgaTela.slice(pahina * 4, pahina * 4 + 4)
  const palitPahina = (bagongPahina) => {
    setPahina(bagongPahina)
    requestAnimationFrame(() => seksiyonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
  return <section className="habi-section" id="habi" ref={seksiyonRef}><div className="habi-intro"><p className="eyebrow">TRADISYONG PILIPINO</p><h2>HABI NG <span>PILIPINAS</span></h2><h3>Kayamanang Kultural ng Ating mga Ninuno</h3><p>Ang paghahabi ay isang mahalagang tradisyon ng mga Pilipino na ipinasa mula sa isang henerasyon patungo sa susunod. Bawat pamayanan ay may sariling paraan ng paghahabi, disenyo, materyales, at kahulugang nagpapakita ng kanilang kultura, paniniwala, at pagkakakilanlan.</p></div><div className="tela-list"><h2 className="tela-list-title">ILANG KATUTUBONG <span>TELA</span></h2>{nakikita.map((tela, index) => <TelaRow tela={tela} index={index} key={tela[0]} />)}<PahinaControls pahina={pahina} maySusunod={(pahina + 1) * 4 < mgaTela.length} susunod={() => palitPahina(pahina + 1)} bumalik={() => palitPahina(pahina - 1)} /></div><div className="habi-wakas"><h3>HABI NG PAGKAKAKILANLAN</h3><p>Ang bawat hibla, kulay, at disenyo ay may kuwentong nag-uugnay sa atin sa ating mga ninuno. Ang paghahabi ay hindi lamang paggawa ng tela—ito ay pagpapanatili ng kultura at pagkakakilanlan ng mga Pilipino.</p><blockquote>“Sa bawat hibla, may kuwento. Sa bawat habi, may kulturang Pilipino.”</blockquote></div></section>
}
