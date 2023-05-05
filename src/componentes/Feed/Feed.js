import './Feed.css';
import './componentes/Post/Post';
import'./componentes/Post/componentes/Post_inferior'
import Post from './componentes/Post/Post';
//perfil
import imgP1 from './img/guts2.jpg'
import imgP2 from './img/spider.jpg'
import imgP3 from './img/trunks.jpg';
import imgP4 from './img/narrador2.jpg';
import imgP5 from './img/arthur.jpg';
//conteudo
import img1 from './img/spider2.jpg'
import img2 from './img/guts.jpg';
import img3 from './img/trunks2.jpg';
import img4 from './img/narrador.jpg';
import img5 from './img/arthur2.jpg';




export default function Feed(props) {
    return (
        <div className="Feed"> 
            <Post NomePerfil="espadachim_negro" ImagemPost={img2} ImagemPerfil={imgP1} horas="2h"  Curtida="caska_355" NumerosComents='371' Legenda=" gostaria que tudo não tivesse sido em vão..."/>
            <Post NomePerfil="amigaoDaVizinhaca" ImagemPost={img1} ImagemPerfil={imgP2} horas="8h" Curtida="mj_watson" Legenda="queria que o mundo não precisasse de mim as vezes" NumerosComents='23'/>
            <Post NomePerfil="trunks"  ImagemPost={img3} ImagemPerfil={imgP3} horas="12h" Curtida="bulma" Legenda="acabar com a ameaça dos androids" NumerosComents='17'/>
            <Post NomePerfil="narrador_tyler"ImagemPost={imgP4} ImagemPerfil={ img4} horas="1d" Curtida="angel_face" Legenda="dormir/destruir o sistema social e econômico (alienadores)" NumerosComents='29'/>
            <Post NomePerfil="arthur_morgan"ImagemPost={imgP5} ImagemPerfil={ img5} horas="1d" Curtida="marston_john" Legenda="encontrar um sentido e propósito em minha vida " NumerosComents='80'/>
        </div>
    )
}