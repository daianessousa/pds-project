import { useAuth } from '../../hooks/useAuth';

import googleIconImg  from '../../images/google-icon.svg'
import './styles.scss'

export function Home() {

    const {signInWithGoogle} = useAuth()

    return (
        <section className="homeApresentation">
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
                        Não possui Conta? <a href="http://">Cadastre-se</a> 
                        </p>
                    </form>
                    <p className="separator">Ou</p>
                    <button onClick={signInWithGoogle} className="button-google">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Faça login com o Google
                    </button>
                </div>
            </div>
        </section>
    );
}