import { BiHeart, BiChevronsRight } from "react-icons/bi"
import './styles.scss'

export function CardCursos(){
    return(
        <div className="content-curso">
            {/* <img src="" alt="" /> */}
            <div className="image">

            </div>
            <div className="content">
              <div className="content-tittle">
                <h3>Título em dev</h3>
                <a href=""><BiHeart/></a>
              </div>
              
              <span>Atualização em 19/07/2021</span>
              <div className="tipo">
                Gratuito
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
              <div className="more-info">
                <a>Saiba mais <BiChevronsRight /></a>
              </div>
            </div>
          </div>
    )
}