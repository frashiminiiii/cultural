import inabel from '../assets/Inabel.png'
import ikat from '../assets/Ikat.png'
import kasuotan from '../assets/Kasuotan.png'
import sinamay from '../assets/Sinamay.png'
import pina from '../assets/Pina.png'
import hablon from '../assets/Hablonn.png'
import inaul from '../assets/Inaul.png'
import tnalak from '../assets/Tinalak.png'
import malong from '../assets/Malong.png'
import baroSaya from '../assets/Barotsaya.png'
import mariaClara from '../assets/Maria.png'
import terno from '../assets/Terno.png'


const mgaGrupo = [
  {
    pangalan: 'Hilagang Luzon',
    paliwanag: 'Mga kasuotan at telang mula sa Ilocos at Cordillera na nagpapakita ng tibay, identidad, at pang-araw-araw na pamumuhay.',
    mgaAytem: [
      {
        pamagat: 'Inabel',
        lokasyon: 'Ilocos Norte at Sur',
        materyal: 'Bulak na hinahabi',
        disenyo: 'Binakul o alon, kinurkurus, banderados o guhit.',
        kahalagahan: 'Kumakatawan sa pang-araw-araw na buhay, tanawin, at katatagan; ginagamit sa kasuotan, kumot, at tela sa bahay.',
        larawan: inabel,
      },
      {
        pamagat: 'Ikat',
        lokasyon: 'Rehiyong Cordillera',
        materyal: 'Bulak at abaka na kinukulayan',
        disenyo: 'Diyamante, guhit, at mga simbolikong porma.',
        kahalagahan: 'Nagmamarka ng antas sa lipunan, yugto ng buhay, at pagkakakilanlan ng tribo; ginagamit sa tapis, kumot, at tela sa libing.',
        larawan: ikat,
      },
      {
        pamagat: 'Kasuotan ng Kalinga',
        lokasyon: 'Kalinga, Cordillera',
        materyal: 'Bulak, kuwintas, at kabibe',
        disenyo: 'Makukulay na heometrikong habi.',
        kahalagahan: 'Sagisag ng tapang, ugnayan sa pamayanan, at pamana ng mandirigma.',
        larawan: kasuotan,
      },
    ],
  },
  {
    pangalan: 'Rehiyong Bicol',
    paliwanag: 'Mga telang mula sa Bicol na kilala sa pagiging manipis, magaan, at mapamaraan ang gamit.',
    mgaAytem: [
      {
        pamagat: 'Sinamay',
        lokasyon: 'Albay',
        materyal: 'Hibla ng abaka',
        disenyo: 'Manipis at may banayad na disenyo.',
        kahalagahan: 'Ginagamit sa sombrero at palamuti; sagisag ng pagiging mapamaraan at kakayahang umangkop.',
        larawan: sinamay,
      },
    ],
  },
  {
    pangalan: 'Visayas',
    paliwanag: 'Mga telang kilala sa pinong paghabi, makukulay na himaymay, at eleganteng anyo ng mga pamayanang Bisaya.',
    mgaAytem: [
      {
        pamagat: 'Piña',
        lokasyon: 'Aklan',
        materyal: 'Hibla ng pinya',
        disenyo: 'Manipis, malinaw, at kadalasang may burda.',
        kahalagahan: 'Ginagamit sa barong Tagalog at mga baro\'t saya; kumakatawan sa kariktan at pambansang dangal.',
        larawan: pina,
      },

      {
        pamagat: 'Hablon',
        lokasyon: 'Iloilo',
        materyal: 'Bulak na hinahabi',
        disenyo: 'Makukulay na linya.',
        kahalagahan: 'Tradisyonal na gamit sa patadyong; ngayo\'y ginagamit sa modernong damit at aksesorya.',
        larawan: hablon,
      },
    ],
  },
  {
    pangalan: 'Mindanao',
    paliwanag: 'Mga telang nagpapakita ng malalim na espiritwalidad, paniniwala, at sining ng mga pamayanang Mindanaoan.',
    mgaAytem: [
      {
        pamagat: 'Inaul',
        lokasyon: 'Maguindanao',
        materyal: 'Bulak at seda',
        disenyo: 'Matitinding heometrikong disenyo.',
        kahalagahan: 'Ginagamit sa seremonyal na kasuotan; sagisag ng dangal at pagmamalaking kultural.',
        larawan: inaul,
      },
      {
        pamagat: "T'nalak",
        lokasyon: "T'boli, South Cotabato",
        materyal: 'Hibla ng abaka na kinukulayan',
        disenyo: 'Hango sa panaginip, kadalasang heometriko o mula sa kalikasan.',
        kahalagahan: 'Banal na tela na sumasagisag sa espiritwal na ugnayan, siklo ng buhay, at pagkakakilanlang kultural.',
        larawan: tnalak,
      },
      {
        pamagat: 'Malong',
        lokasyon: 'Maranao',
        materyal: 'Bulak o seda',
        disenyo: 'Guhit o bulaklak.',
        kahalagahan: 'Maraming gamit bilang damit, kumot, at seremonyal na kasuotan; kumakatawan sa kakayahang umangkop at tradisyon.',
        larawan: malong,
      },
    ],
  },
]

function Grupo({ grupo }) {
  return (
    <section className="rehiyon-group">
      <div className="rehiyon-heading">
        <p className="eyebrow">REHIYON</p>
        <h2>{grupo.pangalan}</h2>
        <p>{grupo.paliwanag}</p>
      </div>
      <div className="rehiyon-list">
        {grupo.mgaAytem.map((aytem, index) => (
          <article className={`knowledge-row${index % 2 ? ' reverse' : ''}`} key={aytem.pamagat}>
            <img src={aytem.larawan} alt={`Larawan ng ${aytem.pamagat}`} loading="lazy" decoding="async" />
            <div>
              <h3>{aytem.pamagat}</h3>
              <p><strong>Lokasyon:</strong> {aytem.lokasyon}</p>
              <p><strong>Disenyo:</strong> {aytem.disenyo}</p>
              <p><strong>Kahalagahan:</strong> {aytem.kahalagahan}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function PahinaControls({ pahina, maySusunod, susunod, bumalik }) {
  return (
    <div className="page-controls">
      <button onClick={bumalik} disabled={pahina === 0}>‹ Bumalik</button>
      <span>Pahina {pahina + 1}</span>
      <button onClick={susunod} disabled={!maySusunod}>Susunod ›</button>
    </div>
  )
}

export default function Kaalaman() {
  return (
    <section className="knowledge-section" id="kaalaman">
      <div className="filipiniana-intro">
        <p className="eyebrow">KASUOTAN AT KULTURA</p>
        <h1>Ano ang <span>Filipiniana?</span></h1>
        <h3>Tradisyonal na kasuotan ng mga Pilipina</h3>
        <p>
          Ang Filipiniana ay tumutukoy sa tradisyonal na kasuotan ng mga Pilipina, na kadalasang may eleganteng hugis,
          manggas na parang pakpak ng paru-paro, at maselang burda. Nagsimula itong isuot noong panahon ng pananakop ng Espanyol,
          at kalaunan ay umunlad upang isama ang parehong tradisyonal at makabagong estilo habang pinapanatili ang kultural nitong ugat.
        </p>
        <p>
          Ang Filipiniana ay higit pa sa isang kasuotan; ito ay sagisag ng pagkakakilanlan, katatagan, at kagandahan,
          lalo na sa mga pormal na okasyon, pagdiriwang ng kultura, at pambansang pista gaya ng Buwan ng Wika o Araw ng Kalayaan.
        </p>
      </div>

      <div className="filipiniana-history">
        <h2 className="section-title">Ang Ebolusyon ng Kasuotang <span>Filipiniana</span></h2>
        <div className="filipiniana-grid">
          <article className="filipiniana-card">
            <strong>1</strong>
            <h3>Baro’t Saya</h3>
            <img src={baroSaya} alt="Baro’t Saya" loading="lazy" decoding="async" />
            <p>Ang Baro’t Saya ay kombinasyon ng blusa at palda na isa sa mga pinakaunang uri ng Filipiniana.</p>
            <p>Ang Baro ay maluwag at dumadaloy na blusa samantalang ang Saya ay mahabang palda.</p>
            <p>Isinuot ito ng mga kababaihan sa Pilipinas mula pa noong panahon bago dumating ang mga Kastila hanggang sa kolonyal na panahon, gamit ang telang piña o jusi.</p>
            <p>Ipinapakita nito ang kahinhinan ng mga Pilipina. Hanggang ngayon, ginagamit pa rin ito sa mga tradisyonal na sayaw at kultural na pagdiriwang sa mga paaralan.</p>
          </article>
          <article className="filipiniana-card">
            <strong>2</strong>
            <h3>Maria Clara</h3>
            <img src={mariaClara} alt="Maria Clara" loading="lazy" decoding="async" />
            <p>Tulad ng ipinangalan sa pangunahing tauhan sa nobelang Noli Me Tangere ni Rizal, ang kasuotan na ito ay hango rin sa impluwensyang Kastila at Baro’t Saya.</p>
            <p>Binubuo ang kasuotan ng vestido o buong palda, pañuelo na may burda, at patong na tapis.</p>
            <p>Ang Maria Clara ay kumakatawan sa isang mahinhin na dalagang Pilipina sa panahon ng Espanya, kaya’t madalas itong inilalarawan sa mga pagtatanghal sa teatro o tematikong pagdiriwang.</p>
          </article>
          <article className="filipiniana-card">
            <strong>3</strong>
            <h3>Terno</h3>
            <img src={terno} alt="Terno" loading="lazy" decoding="async" />
            <p>Noong unang bahagi ng 1900s, ang Terno ay naging pambansang simbolo ng moda dahil sa paru-parong manggas.</p>
            <p>Naging representasyon ito ng kulturang Pilipino matapos umunlad mula sa Maria Clara, na may mas masikip na hulma, mas malinis na linya, at makabagong silweta.</p>
            <p>Pinagsama ng mga taga-disenyo ang magkahiwalay na blusa at palda sa isang buo at walang putol na kasuotan; isang estilo na pinahusay ng tanyag na taga-disenyo na si Ramon Valera noong kalagitnaan ng ika-20 siglo.</p>
            <p>Si Imelda Marcos ay kilala sa pagsusuot ng mga istilong ito, at nananatili pa ring popular sa mga patimpalak at iba pang pormal na okasyon.</p>
            <p>Binago na rin ng mga modernong taga-disenyo ang Terno upang maging mas maraming gamit, habang pinapanatili ang alindog at kariktan na likas dito.</p>
          </article>
        </div>
      </div>

      <div className="filipiniana-summary">
        <h2 className="section-title">Buod ng <span>Ebolusyon</span></h2>
        <p>
          Mula sa simpleng Baro’t Saya, naging mas pormal at simboliko ang Maria Clara, hanggang sa naging mas makabago at
          pambansang anyo ang Terno. Ipinapakita ng tatlong ito ang pag-unlad ng Filipiniana habang nananatiling nakakabit sa
          kasaysayan at identidad ng mga Pilipina.
        </p>
      </div>

      <div className="trad-clothing-heading">
        <p className="eyebrow">TRADITIONAL CLOTHING</p>
        <h2>Mga Tradisyunal na <span>Kasuotan</span></h2>
        <p>
          Pagkatapos ng ebolusyon ng Filipiniana, narito ang iba pang katutubong kasuotan at telang Pilipino mula sa iba’t ibang rehiyon.
        </p>
      </div>

      {mgaGrupo.map((grupo) => <Grupo grupo={grupo} key={grupo.pangalan} />)}
    </section>
  )
}
