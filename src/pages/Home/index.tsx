import { ButtonGoogle } from '../../components/ButtonGoogle'
import './styles.scss'

export function Home() {
   return (
      <section className="home">
         <div className="initialImage">
            <h1>Iniciando como Dev? Temos as melhores dicas aqui</h1>
         </div>
         <div className="homeAcess">
            <div className="container">
               <h1 className="logo">HelpJr</h1>
               <p className="title">Login</p>
               <form>
                  <label>Usuário</label>
                  <input type="text" />
                  <label> Senha </label>
                  <input type="text" />
                  <p>
                     <input type="submit" value="Enviar" className="submit" />
                     Não possui Conta? <a href="/register">Cadastre-se</a>
                  </p>
               </form>
               <p className="separator">Ou</p>
               <ButtonGoogle />
            </div>
         </div>
      </section>
   );
}