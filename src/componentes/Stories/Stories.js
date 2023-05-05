import './Stories.css';
import{ useRef} from 'react'
import Story from './componentes/Story';
import Story1 from './img/balboa.jpg';
import Story2 from './img/django.jpg';
import Story3 from './img/ben10.jpg';
import Story4 from './img/bestboss.jpg';
import Story5 from './img/donCorleone.jpg';
import Story6 from './img/ellie.jpg';
import Story7 from './img/gohan_futuro.jpg';
import Story8 from './img/invencivel.jpg';
import Story9 from './img/jake.jpg';
import Story10 from './img/kratos.jpg';
import Story11 from './img/L.jpg';
import Story12 from './img/logan.jpg';
import Story13 from './img/mk.jpg';
import Story14 from './img/montana.jpg';
import Story15 from './img/myagi.jpg';
import Story16 from './img/patria.jpg';
import Story17 from './img/rock-lee.jpg';
import Story18 from './img/salsicha.jpg';
import Story19 from './img/sherek.jpg';
import Story20 from './img/superchoque.jpg';
import Story21 from './img/trevor.jpg';
import Story22 from './img/snow.jpg';
import Story23 from './img/ragnar.jpg';
import Story24 from './img/shelby.jpg';

import {AiOutlineLeftCircle} from 'react-icons/ai';

function Stories(props) {
    
    const carrossel = useRef(null);

    const Left = (e) =>{
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth
    }
    const Right = (e) =>{
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth
    }
    return (
        <>
        <div className='Stories' ref={carrossel}>
            <Story ImgPerfil={Story1} NomeDaConta="balboa1977"/>
            <Story ImgPerfil={Story2} NomeDaConta="djang0"/>
            <Story ImgPerfil={Story3} NomeDaConta="tennyson10"/>
            <Story ImgPerfil={Story4} NomeDaConta="world_best_boss"/>
            <Story ImgPerfil={Story5} NomeDaConta="don_corleone"/>
            <Story ImgPerfil={Story6} NomeDaConta="ellieWilliams"/>
            <Story ImgPerfil={Story7} NomeDaConta="thebest_gohan"/>
            <Story ImgPerfil={Story8} NomeDaConta="invencivel"/>
            <Story ImgPerfil={Story9} NomeDaConta="jake"/>
            <Story ImgPerfil={Story10} NomeDaConta="god_of_war"/>
            <Story ImgPerfil={Story11} NomeDaConta="L"/>
            <Story ImgPerfil={Story12} NomeDaConta="llogan-X"/>
            <Story ImgPerfil={Story13} NomeDaConta="skorpion_mKzin"/>
            <Story ImgPerfil={Story14} NomeDaConta="tony_montana"/>
            <Story ImgPerfil={Story15} NomeDaConta="sr_myagiGOAT"/>
            <Story ImgPerfil={Story16} NomeDaConta="cap_patria"/>
            <Story ImgPerfil={Story17} NomeDaConta="lee36"/>
            <Story ImgPerfil={Story18} NomeDaConta="_salsicha"/>
            <Story ImgPerfil={Story19} NomeDaConta="Shrek"/>
            <Story ImgPerfil={Story20} NomeDaConta="virgil_shock"/>
            <Story ImgPerfil={Story21} NomeDaConta="trevor_philips"/>
            <Story ImgPerfil={Story22} NomeDaConta="j_snow"/>
            <Story ImgPerfil={Story23} NomeDaConta="king-ragnar"/>
            <Story ImgPerfil={Story24} NomeDaConta="thomas_shelby"/>
            
            
            
            
        </div>
        <div className='buttons'>
                <button onClick={Left}><AiOutlineLeftCircle/></button>
                <button onClick={Right}><AiOutlineLeftCircle/></button>
            </div>
        </>
    )
}

export default Stories;