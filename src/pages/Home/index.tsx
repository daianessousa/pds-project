import { ButtonGoogle } from '../../components/ButtonGoogle'
import logoHelpJr from "../../images/computador.png"
import './styles.scss'

export function Home() {
   return (
      <section className="home">
         <div className="initialImage">
         </div>
         <div className="homeAcess">
            <div className="container">
               <div className="logo-title">
                  <img src={logoHelpJr} alt="logo" />
                  <h1 className="logo">HelpJr</h1>
               </div>
               <h1 className="texto">Iniciando como Dev? Temos as melhores dicas aqui</h1>
               <p className="separator"></p>
               <ButtonGoogle />
            </div>
         </div>
      </section>
   );
}