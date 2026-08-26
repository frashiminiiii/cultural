import { larawan } from './data'

const mgaGrupo = [
  {
    pangalan: 'Luzon',
    paliwanag: 'Mga kasuotan at telang nagmula sa Hilagang Luzon, Cordillera, Ilocos, at Bicol.',
    mgaAytem: [
      ['Camisa Fuera', 'Pambansang kasuotan na dating ipinilit noong panahon ng Espanya, ngunit kalaunan ay binago bilang simbolo ng dangal, pagmamalaki, at pagkakakilanlang Pilipino.', larawan.kultura],
      ['Barong Tagalog', 'Tradisyonal at pormal na kasuotang panlalaki na may mahahabang manggas, burda, at maluwag na disenyo. Ginagawa ito mula sa piña at abaka.', larawan.barong],
      ['Inabel', 'Tela mula sa Ilocos Norte at Sur na hinahabi mula sa bulak. Ang binakul, kinurkurus, at banderados ay kumakatawan sa buhay at katatagan ng mga Ilokano.', 'https://images.unsplash.com/photo-1528459105426-b9548367069b?q=80&w=700'],
      ['Ikat', 'Tela mula sa Cordillera na gumagamit ng bulak at abaka. Ang diyamante at guhit ay nagmamarka ng antas sa lipunan at pagkakakilanlan ng tribo.', 'https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=700'],
      ['Kasuotan ng Kalinga', 'Makukulay na heometrikong habi na may bulak, kuwintas, at kabibe. Sagisag ito ng tapang, pamayanan, at pamana ng mandirigma.', 'https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=700'],
      ['Sinamay', 'Manipis na tela mula sa hibla ng abaka sa Albay. Ginagamit sa sombrero at palamuti, at sagisag ng pagiging mapamaraan.', 'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?q=80&w=700'],
    ],
  },
  {
    pangalan: 'Visayas',
    paliwanag: 'Mga telang kilala sa pino, makulay, at masining na paghahabi ng mga pamayanan sa Visayas.',
    mgaAytem: [
      ['Piña', 'Telang mula sa hibla ng pinya sa Aklan. Manipis at malinaw ito, kadalasang may burda, at ginagamit sa Barong Tagalog at Baro’t Saya.', 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=700'],
      ['Hablon', 'Tela mula sa Panay, lalo na sa Iloilo, na may makukulay na linya. Ginagamit sa patadyong, panuelo, damit, at aksesorya.', 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=700'],
    ],
  },
  {
    pangalan: 'Mindanao',
    paliwanag: 'Mga telang nagpapakita ng malalim na espiritwalidad, paniniwala, at sining ng mga pamayanang Mindanaoan.',
    mgaAytem: [
      ['Inaul', 'Telang mula sa Maguindanao na gawa sa bulak at seda. Ang matitinding heometrikong disenyo nito ay sagisag ng dangal at pagmamalaking kultural.', 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=700'],
      ['T’nalak', 'Banal na tela ng mga T’boli sa South Cotabato na gawa sa hibla ng abaka. Ang disenyo ay hango sa panaginip at kalikasan.', 'https://images.unsplash.com/photo-1602523961358-f9f03dd557db?q=80&w=700'],
      ['Malong', 'Telang Maranao na gawa sa bulak o seda at may guhit o bulaklak. Marami itong gamit bilang damit, kumot, at seremonyal na kasuotan.', 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=700'],
    ],
  },
]

function Grupo({ grupo }) {
  return <section className="rehiyon-group"><div className="rehiyon-heading"><p className="eyebrow">REHIYON</p><h2>{grupo.pangalan}</h2><p>{grupo.paliwanag}</p></div><div className="rehiyon-list">
    {grupo.mgaAytem.map(([pamagat, teksto, larawanUrl], index) => <article className={`knowledge-row${index % 2 ? ' reverse' : ''}`} key={pamagat}><img src={larawanUrl} alt={`Larawan ng ${pamagat}`} loading="lazy" decoding="async" /><div><h3>{pamagat}</h3><p>{teksto}</p></div></article>)}
  </div></section>
}

export function PahinaControls({ pahina, maySusunod, susunod, bumalik }) {
  return <div className="page-controls"><button onClick={bumalik} disabled={pahina === 0}>‹ Bumalik</button><span>Pahina {pahina + 1}</span><button onClick={susunod} disabled={!maySusunod}>Susunod ›</button></div>
}

export default function Kaalaman() {
  return <section className="knowledge-section" id="kaalaman"><div className="knowledge-intro"><p className="eyebrow">KASUOTAN AT KULTURA</p><h1>HABI NG <span>PILIPINAS</span></h1><h3>Kayamanang Kultural ng Ating mga Ninuno</h3><p>Ang katutubong kasuotan sa Pilipinas ay sumasalamin sa kapaligiran ng bawat rehiyon, mga materyales na makukuha, at pagkakakilanlang kultural. Ang bawat tela ay sagisag ng espiritwalidad, antas sa lipunan, at katatagan.</p></div>{mgaGrupo.map((grupo) => <Grupo grupo={grupo} key={grupo.pangalan} />)}</section>
}
