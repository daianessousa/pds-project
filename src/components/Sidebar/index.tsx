import { useAuth } from '../../hooks/useAuth'
import { BiNews,BiBook ,BiMessageRounded } from "react-icons/bi"
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
                <button className="button"><a href="/news"><BiNews />Novidades</a></button>
                <button className="button"><a href="/cursos"><BiBook/>Cursos</a></button>
                <button className="button"><a href="/forum"><BiMessageRounded />Fórum</a></button>
            </div>
            <p>© HelpJr</p>
        </nav>
    )
}