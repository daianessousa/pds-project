import { ButtonGoogle } from '../../components/buttonGoogle'
import './styles.scss'



export function Register() {
  return (
    <>
      <section className="register">
        <div className="registerImage">
          <h1> Tudo que você precisa para iniciar sua carreira como Dev. </h1>
        </div>
        <div className="registerAcess">
          <div className="container">
            <h1 className="logo">HelpJr</h1>
            <p className="title">Cadastre-se</p>
            <form>
              <label>Usuário</label>
              <input type="text" />
              <label> Senha </label>
              <input type="text" />
              <p>
                <input type="submit" value="Cadastrar" className="submit" />
                Já possui Conta? <a href="/">Login</a>
              </p>
            </form>
            <p className="separator">Ou</p>
            <ButtonGoogle />
          </div>
        </div>
      </section>
    </>
  )
}