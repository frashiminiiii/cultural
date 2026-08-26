import { useRef, useState } from 'react'
import { PahinaControls } from './Kaalaman'
import pinilian from '../assets/pinilian.png'
import kalinga from '../assets/Kalinga.png'
import pina from '../assets/Piña.png'
import hablon from '../assets/Hablon.png'
import bagobo from '../assets/Bagobo.png'
import dagmay from '../assets/Dagmay.png'
import tnalak from "../assets/T'nalak.png"
import mabal from '../assets/Mabal.png'
import saputangan from '../assets/Saputangan.png'

const mgaTela = [
  ['Pinilian', 'Ilocos', 'Bulak', 'Ang mga geometrikong disenyo ay nagpapakita ng pagkamalikhain at tradisyon ng mga Ilokano.', 'Ginagamit sa paggawa ng tradisyonal na kasuotan, kumot, at iba pang tela.', pinilian],
  ['Kalinga', 'Kalinga, Cordillera', 'Bulak', 'Ang mga guhit at geometrikong disenyo ay nagpapakita ng pagkakakilanlan at kultura ng mga Kalinga.', 'Ginagamit sa tradisyonal na kasuotan at palamuti.', kalinga],
  ['Piña', 'Aklan, Panay', 'Hibla ng dahon ng pinya', 'Kilala sa pino at masalimuot na paghahabi, na nagpapakita ng mataas na kasanayan ng mga manghahabi.', 'Ginagamit sa Barong Tagalog, saya, panuelo, at iba pang pormal na kasuotan.', pina],
  ['Hablon', 'Panay, lalo na sa Iloilo', 'Bulak, abaka, at iba pang hibla', 'Ang mga guhit at parisukat na disenyo ay nagpapakita ng tradisyunal na sining at pagkakakilanlan ng mga taga-Panay.', 'Ginagamit sa patadyong, panuelo, damit, at iba pang kasuotan.', hablon],
  ['Bagobo Inabal', 'Davao del Sur, Mindanao', 'Hibla ng abaka', 'Ang mga disenyo ay sumasalamin sa kultura, kalikasan, at paniniwala ng mga Bagobo.', 'Ginagamit sa tradisyonal na kasuotan at seremonyal na tela.', bagobo],
  ['Dagmay', 'Silangang Mindanao; mga Mandaya', 'Hibla ng abaka at natural na tina', 'Ang mga disenyo ay hango sa kalikasan, hayop, at mga paniniwala ng mga Mandaya.', 'Ginagamit sa tradisyonal na kasuotan, palamuti, at iba pang gamit.', dagmay],
  ["T'nalak", "South Cotabato; mga T'boli", 'Hibla ng abaka at natural na tina', 'Ang mga disenyo ay may kaugnayan sa kalikasan, paniniwala, at kultura ng mga Tboli.', 'Ginagamit bilang tradisyonal na tela, kasuotan, at seremonyal na gamit.', tnalak],
  ['Mabal Tabih', 'Sarangani at South Cotabato; mga Blaan', 'Hibla na ginagamit sa paghahabi ng tradisyunal na tela', 'Ang paghahabi ay mahalagang bahagi ng kultura ng Blaan at iniuugnay sa kanilang paniniwala at espirituwalidad.', 'Tabih, ang tradisyunal na palda o telang pantubo ng mga Blaan.', mabal],
  ['Saputangan', 'Basilan; mga Yakan', 'Mga hibla na hinahabi gamit ang iba\'t ibang teknik', 'Kilala sa masalimuot at makukulay na disenyo na nagbibigay ng lalim at ilusyon sa pattern.', 'Isang parisukat na tradisyunal na tela na ginagamit sa iba\'t ibang kasuotang Yakan.', saputangan],
]

function TelaRow({ tela, index }) {
  const [uri, pinagmulan, materyales, kahulugan, gamit, larawan] = tela
  return (
    <article className={`tela-row${index % 2 ? ' reverse' : ''}`}>
      <img src={larawan} alt={`Telang ${uri}`} loading="lazy" decoding="async" />
      <div>
        <p className="tela-origin">{pinagmulan}</p>
        <h3>{uri}</h3>
        <p><strong>Materyales:</strong> {materyales}</p>
        <p><strong>Kahulugan ng disenyo:</strong> {kahulugan}</p>
        <p><strong>Gamit:</strong> {gamit}</p>
      </div>
    </article>
  )
}

export default function MgaHabi() {
  const [pahina, setPahina] = useState(0)
  const seksiyonRef = useRef(null)
  const nakikita = mgaTela.slice(pahina * 4, pahina * 4 + 4)

  const palitPahina = (bagongPahina) => {
    setPahina(bagongPahina)
    requestAnimationFrame(() => seksiyonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  return (
    <section className="habi-section" id="habi" ref={seksiyonRef}>
      <div className="habi-intro">
        <p className="eyebrow">TRADISYONG PILIPINO</p>
        <h2>HABI NG <span>PILIPINAS</span></h2>
        <h3>Kayamanang Kultural ng Ating mga Ninuno</h3>
        <p>
          Ang paghahabi ay isang mahalagang tradisyon ng mga Pilipino na ipinasa mula sa isang henerasyon patungo sa susunod.
          Bawat pamayanan ay may sariling paraan ng paghahabi, disenyo, materyales, at kahulugang nagpapakita ng kanilang kultura,
          paniniwala, at pagkakakilanlan.
        </p>
      </div>

      <div className="tela-list">
        <h2 className="tela-list-title">ILANG KATUTUBONG <span>TELA</span></h2>
        {nakikita.map((tela, index) => <TelaRow tela={tela} index={index} key={tela[0]} />)}
        <PahinaControls
          pahina={pahina}
          maySusunod={(pahina + 1) * 4 < mgaTela.length}
          susunod={() => palitPahina(pahina + 1)}
          bumalik={() => palitPahina(pahina - 1)}
        />
      </div>

      <div className="habi-wakas">
        <h3>HABI NG PAGKAKAKILANLAN</h3>
        <p>
          Ang bawat hibla, kulay, at disenyo ay may kuwentong nag-uugnay sa atin sa ating mga ninuno.
          Ang paghahabi ay hindi lamang paggawa ng tela ito ay pagpapanatili ng kultura at pagkakakilanlan ng mga Pilipino.
        </p>
        <blockquote>Sa bawat hibla, may kuwento. Sa bawat habi, may kulturang Pilipino.</blockquote>
      </div>
    </section>
  )
}
