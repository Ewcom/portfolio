import './global.scss'
import './app.scss'
import { Navbar } from './components/navbar/Navbar'
import { Presentation } from './components/presentation/Presentation'
import { useState } from 'react'
import { Menu } from './components/menu/Menu'
import { Portfolio } from './components/portfolio/Portfolio'
import { Contact } from './components/contact/Contact'




function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
      <div className="app">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <div className="sections">
          <Presentation/>
          <Portfolio />
          <Contact/>


        </div>
      </div>
  )
}

export default App;
