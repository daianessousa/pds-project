import './styles.scss'
import { useAuth } from '../../hooks/useAuth';
import googleIconImg from '../../images/google-icon.svg'

export function ButtonGoogle(){
    const { signInWithGoogle } = useAuth()
    
    return (
        <>
        <button onClick={signInWithGoogle} className="button-google">
              <img src={googleIconImg} alt="Logo do Google" />
              Acessar com o Google
            </button>
        </>
    )
}