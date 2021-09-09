import { BiRightArrowAlt } from "react-icons/bi"
import './styles.scss'

interface CardNewsProps {
  title: string;
  description: string;
  link: string;
  image: string;
  data: string;
}

export function Card(props: CardNewsProps){
    return(
        <div className="content-card-news">
            <img className="image-news" src={props.image} alt="Imagem" />
            <div className="content-news">
              <div className="content-tittle">
                <h3>{props.title}</h3>
              </div>
              
              <span>Atualização em {props.data}</span>
              <p>{props.description}</p>
              <div className="more-info">
                <button><a href={props.link} target="_blank">Saiba mais</a><BiRightArrowAlt /></button>
              </div>
            </div>
          </div>
    )
}