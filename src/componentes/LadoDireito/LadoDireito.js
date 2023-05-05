import './LadoDireito.css'
import s1 from './componentes/img/dean.jpg';
import s2 from './componentes/img/joker.jpg';
import s3 from './componentes/img/mandalor.jpg';
import s4 from './componentes/img/taxi.jpg';
import s5 from './componentes/img/willzin.jpg';

import imgPerfil from '../LadoEsquerdo/img/perfil.jpg'
import Sugestao from './componentes/Sugestoes';
export default function LadoDireito() {
    return (
        <div className='LadoDireito'>
            <div className='MeuPerfil'>

                <img src={imgPerfil} />
                <div className='textPerfil'>
                    <p>gguilherme_pimenta</p>
                    <p>𝕻𝕴𝕸𝕰𝕹𝕿𝕬</p>
                </div>
                <span>Mudar</span>

            </div>
            <div className='suges'>
                <p>Sugestões para você</p>
                <span>Ver tudo</span>

            </div>
            
            <Sugestao imgSuges={s1} nomeSuges="winchester2005"/>
            <Sugestao imgSuges={s2} nomeSuges="joker_"/>
            <Sugestao imgSuges={s3} nomeSuges="mandalorian"/>
            <Sugestao imgSuges={s4} nomeSuges="taxi_travis"/>
        
            

            <div className='parteInferiorD'>
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •</p> <p>Termos • Localizações • Idioma •  Meta • Verified</p>
                <p>© 2023 INSTAGRAM FROM META</p>
            </div>




        </div>


    )
}