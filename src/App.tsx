import { Avatar } from './components/Avatar'
import { Buttons } from './components/Buttons'
import { SocialMedias } from './components/SocialMedias'
import './styles/global.css'
import './styles/font.css'

import Bg_principal from '/bg-primary.png'


function App() {


  return (
      <div
        className="App w-screen h-screen flex  flex-col justify-center items-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${Bg_principal})` }}
      >

        <Avatar />
        
        <div className='flex flex-col w-1/3'>
          <Buttons url='#' content='Inscreva-se no NLW' />
          <Buttons url='#' content='Baixe meu e-book' />
          <Buttons url='#' content='Veja meu portifólio' />
          <Buttons url='#' content='Conheça o Explorer' />
        </div>

        <SocialMedias />

     
      </div>
   
  )
}

export default App
