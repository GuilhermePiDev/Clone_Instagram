import './Post.css';

export default function Post (props) {
    return(
        <div className='Post'>
            <div className="BarraSuperior">
                <div className="ImagemPerfilAutor"><img className="ImagemPerfilAutor"src={props.ImagemPerfil} /></div>
                <div className="NomePerfilAutor">{props.NomePerfil}</div>
                <div className="MenuBarraSuperior">...</div>
            </div>
            <div className="ConteudoPost"><img src={props.ImagemPost} /></div>
        </div>

    )
}