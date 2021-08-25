import { Sidebar } from '../../components/Sidebar'
import { CardCursos } from '../../components/CardCursos'
import './styles.scss'

export function Cursos() {
  return (
      <section className="news">
        <Sidebar />
        <div className="container-news">
          <div className="tittle">
            <h1>Cursos</h1>
          </div>
          <div className="cards">
            <div className="card">
              <CardCursos />
            </div>
            <div className="card">
              <CardCursos />
            </div>
            <div className="card">
              <CardCursos />
            </div>
            <div className="card">
              <CardCursos />
            </div>
            <div className="card">
              <CardCursos />
            </div>
            <div className="card">
              <CardCursos />
            </div>
                      
            
            
            
          </div>
          
        </div>
        
      </section>
  )
}