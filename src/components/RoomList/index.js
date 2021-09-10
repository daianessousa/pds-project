import { useEffect, useState } from 'react'
import {database} from '../../services/firebase'
import {Rooms} from '../Rooms'

import './styles.scss'
export function RoomList(){

    const [roomList, setRoomList] = useState('')

    useEffect(()=> {
        const roomRef =  database.ref('rooms')
        roomRef.on('value', (snapshot)=>{
            const rooms = snapshot.val()
            const roomList = []
            for (let id in rooms){
                roomList.push({id,...rooms[id]})
            }
            setRoomList(roomList)
        })
    },[])
    
    return(
      <div>
           {roomList 
                ? roomList.map((room,index) => <Rooms room={room} key={index}/>)
                : ''}
      </div>
    )
}
