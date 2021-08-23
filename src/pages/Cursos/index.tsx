import { Sidebar } from '../../components/Sidebar'
import { Card } from '../../components/Card'
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
            <Card />
            <Card />
            <Card />
            
            
            
          </div>
          
        </div>
        
      </section>
  )
}