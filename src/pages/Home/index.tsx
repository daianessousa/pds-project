import './styles.scss'

export function Home() {
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
                </div>
            </div>
        </section>
    );
}