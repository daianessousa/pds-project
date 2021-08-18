import { useAuth } from '../../hooks/useAuth'
import userPicture from '../../images/userPicture.svg'
import './styles.scss'

export function Sidebar(){

    const {user} =useAuth()
    return(
        <nav className="sidebar">
            <div className="user-info">
                <img src={user?.avatar} alt="Foto do Usuário"/>
                <p>{user?.name}</p>
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