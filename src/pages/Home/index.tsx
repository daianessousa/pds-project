import { useAuth } from '../../hooks/useAuth';

import googleIconImg  from '../../images/google-icon.svg'
import './styles.scss'

export function Home() {

    const {user, signInWithGoogle} = useAuth()

    return (
        <section className="homeApresentation">
            <div className="initialImage">

            </div>
            <div className="homeAcess">
                <div className="container">
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
                    <button onClick={signInWithGoogle} className="button-google">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Faça login com o Google
                    </button>
                </div>
            </div>
        </section>
    );
}