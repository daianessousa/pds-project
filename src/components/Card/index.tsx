import { BiHeart, BiChevronsRight } from "react-icons/bi"
import './styles.scss'

interface CardNewsProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export function Card(props: CardNewsProps){
    return(
        <div className="content-news">
            <img className="image" src={props.image} alt="Imagem" />
            <div className="content">
              <div className="content-tittle">
                <h3>{props.title}</h3>
              </div>
              
              <span>Atualização em 19/07/2021</span>
              <p>{props.description}</p>
              <div className="more-info">
                <a href={props.link}>Saiba mais <BiChevronsRight /></a>
              </div>
            </div>
          </div>
    )
}