import { render } from '@testing-library/react'
import './LadoEsquerdo.css'
import ItemMenu from './componetes/ItemMenu';
import { AiFillHome } from "react-icons/ai";
export default function LadoEsquerdo(props){
    return(
        <div className='LadoEsquerdo'>
            <div className='Logo'>
                <img src={props.logo}/>
            </div>
            <div className='menu-principal'>
                <ItemMenu icone={<AiFillHome />} texto='Home' />
                <ItemMenu icone='@' texto='Discovery' />
                <ItemMenu icone='%' texto='Reels' />
            </div>
        </div>
    )
}