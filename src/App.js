import './App.css';
import Feed from './componentes/Feed/Feed';
import Stories from './componentes/Stories/Stories'
import LadoEsquerdo from './componentes/LadoEsquerdo/LadoEsquerdo'
import Logo from './componentes/LadoEsquerdo/img/logo_insta.png'
function App() {
  return (
    <div className="App">
      <div className='LadoEsquerdo'>
       <LadoEsquerdo logo={Logo}/>
      </div>

      <div className='Centro'>
        <Stories/>
        <Feed />
        <div className='Feed'>Feed</div>
      </div>

      <div className='LadoDireito'>
        Lado Direito
      </div>
    </div>
  );
}

export default App;
