import {useAuth} from '../../hooks/useAuth'
import { database } from '../../services/firebase.ts'
import { useHistory } from 'react-router-dom'

import './styles.scss'


export function Rooms({room}){
    const{user} = useAuth()
    const history = useHistory()
    
    async function handleEndRoom() {
        if (window.confirm('Tem certeza que deseja excluir esta sala?')) {
            const roomRef = await database.ref('rooms').child(room.id)
            roomRef.remove()     
        }
        
    }

    async function handleJoinRoom(){
        
        history.push(`/admin/rooms/${room.id}`)
    }

    return(
        <div className="room-list">
              <div className="content">
                <div className="footer-buttons">
                    <p>{room.title}</p>
                    <div className="buttons">
                        {user.id === room.authorId ? <div>{
                        <button onClick={handleJoinRoom}>Editar Sala</button>    
                        }</div> : ''}

                        <a href={`/rooms/${room.id}`}>
                            <button>Entrar na sala</button>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
    
}

