import userPicture from '../../images/userPicture.svg'
import './styles.scss'

export function Sidebar(){
    return(
        <nav className="sidebar">
            <div>
                <img src={userPicture} alt="Foto do Usuário"/>
                <p>Username</p>
            </div>
            <div className="sidebar__buttons">
                <button>Novidades</button>
                <button>Cursos</button>
                <button>Fórum</button>
            </div>
            <p>© HelpJr</p>
        </nav>
    )
}