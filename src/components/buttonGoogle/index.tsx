import './styles.scss'
import { useAuth } from '../../hooks/useAuth';
import googleIconImg from '../../images/google-icon.svg'
import { useHistory } from 'react-router-dom'

export function ButtonGoogle(){

    const history = useHistory()
    const { user, signInWithGoogle } = useAuth()
    
    async function handleLoginWithGoogle(){
        if(!user){
            await signInWithGoogle()
        }
        history.push('/news')
    }
    return (
        <>
        <button onClick={handleLoginWithGoogle} className="button-google">
              <img src={googleIconImg} alt="Logo do Google" />
              Acessar com o Google
            </button>
        </>
    )
}