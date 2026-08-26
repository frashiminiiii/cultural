import { larawan } from './data'

export default function Hero() {
  return <section className="hero-container" id="home"><div className="hero"><div className="hero-text">
    <h1>TUKLASIN ANG <span>PAMANANG PILIPINO</span></h1>
    <p>Tuklasin ang pambihirang ganda at kuwento ng ating tradisyunal na kasuotan — mula sa Barong Tagalog hanggang sa Katutubong Habi ng Mindanao.</p>
  </div><div className="hero-img-box"><img src={larawan.kultura} alt="Mga taong nakasuot ng katutubong kasuotan" /></div></div>
    <div className="wave-divider" aria-hidden="true"><svg viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" /></svg></div>
  </section>
}
