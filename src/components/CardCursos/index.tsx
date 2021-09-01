import { BiHeart, BiChevronsRight } from "react-icons/bi"
import './styles.scss'

interface CardCursosProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export function CardCursos(props: CardCursosProps) {
  return (
    <div className="content-curso">
      <div className="image">
        <img src={props.image} alt="Imagem"/> 
      </div>
         
      <div className="content">
        <div className="content-tittle">
          <h3>{props.title}</h3>
        </div>

        <span>Atualização em 19/07/2021</span>
        <div className="tipo">
          Gratuito
        </div>
        <p>{props.description}</p>
        <div className="more-info">
          <a href={props.link}>Saiba mais <BiChevronsRight /></a>
        </div>
      </div>
    </div>
  )
}