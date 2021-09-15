import { Sidebar } from '../../components/Sidebar'
import './styles.scss'
import { useHistory } from 'react-router-dom'
import { database } from '../../services/firebase'
import { useState, FormEvent } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../../components/Button'
import { RoomList } from '../../components/RoomList'




export function Forum() {

  const history = useHistory()
  const { user } = useAuth()
  const [roomCode, setRoomCode] = useState('')
  const [newRoom, setNewRoom] = useState('')

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()
    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Esta sala não existe!')
      return
    }

    if (roomRef.val().endedAt) {
      alert('Esta sala está fechada.')
      return
    }

    history.push(`rooms/${roomCode}`)
  }

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <section className="forum">
      <Sidebar />
      <div className="container-forum">
        <div className="tittle">
          <h1>Fórum</h1>
        </div>
        <div className="inputs">
          <div className="form1">
            <h2>Entre em uma sala</h2>
            <form onSubmit={handleJoinRoom}>
              <input type="text" placeholder="Digite o código da sala"
                onChange={event => setRoomCode(event.target.value)}
                value={roomCode}
              />
              <Button type="submit">
                Entrar na sala
              </Button>
            </form>
          </div>

          <div className="form2">
            <h2>Criar uma nova sala</h2>
            <form onSubmit={handleCreateRoom}>
              <input type="text" placeholder="Nome da sala"
                onChange={event => setNewRoom(event.target.value)}
                value={newRoom}
              />
              <Button type="submit">
                Criar Sala
              </Button>
            </form>
          </div>
        </div>
        
        <div className="room-title">
          <h2>Confira a lista de salas criadas:</h2>
        </div>

        <div className="room-list">

          <RoomList />
        </div>
      </div>

    </section>
  )
}