import './Feed.css';

import Post from './componentes/Post/Post';
import img1 from './img/shrek.jpg';
import img2 from './img/guts.jpg';
import img3 from './img/trunks.jpg';
import img4 from './img/kratos.jpg';

import imgPerfil from './img/defante.jpg'
export default function Feed() {
    return (
        <div className="Feed">
            <Post NomePerfil="GuizinDaZO" ImagemPost={img1} ImagemPerfil={imgPerfil}/>
            <Post NomePerfil="PimentaCabra" ImagemPost={img2}/>
            <Post NomePerfil="GGZIN" ImagemPost={img3}/>
            <Post NomePerfil="GiovanniCasa"ImagemPost={img4}/>
            <Post NomePerfil="LucasBombado"/>
        </div>
    )
}