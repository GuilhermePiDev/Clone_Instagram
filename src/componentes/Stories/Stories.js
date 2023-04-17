import './Stories.css'
import Story from './componentes/Story'
import Story1 from '../Feed/img/defante.jpg'
function Stories() {
    return (
        <div className='Stories'>
            <Story ImgPerfil={Story1}/>
            <Story />
            <Story />
            <Story />
            <Story />
            
        </div>
    )
}

export default Stories;