import './App.css'
import './mobile.css'
import './pattern.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Kaalaman from './components/Kaalaman'
import MgaHabi from './components/MgaHabi'
import PamanangTala from './components/PamanangTala'

function App() {
  return <>
    <Header />
    <main><Hero /><Kaalaman /><PamanangTala /><MgaHabi /></main>
    <footer>
      <p>© 2026 Pagtatanghal ng Kasuotang Pilipino | Inihanda para sa Araw ng Wika</p>
      <p><small>Ipinagmamalaki nating ibahagi ang ating maikling koleksyon ng ating kultura at tradisyon.</small></p>
    </footer>
  </>
}

export default App
