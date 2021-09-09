import { BiRightArrowAlt } from "react-icons/bi"
import './styles.scss'

interface CardCursosProps {
  title: string;
  description: string;
  link: string;
  image: string;
  data: string;
}

export function CardCursos(props: CardCursosProps) {
  return (
    <div className="content-card-curso">
      <div className="image-curso">
        <img src={props.image} alt="Imagem"/> 
      </div>
         
      <div className="content-curso">
        <div className="content-tittle">
          <h3>{props.title}</h3>
        </div>

        <span>Atualização em {props.data}</span>
        <div className="tipo">
          Gratuito
        </div>
        <p>{props.description}</p>
        <div className="more-info">
          <button><a href={props.link} target="_blank">Saiba mais </a><BiRightArrowAlt /></button>
        </div>
      </div>
    </div>
  )
}