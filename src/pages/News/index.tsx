import { Sidebar } from '../../components/Sidebar'
import { Card } from '../../components/Card'
import './styles.scss'

export function News() {
  return (
      <section className="news">
        <Sidebar />
        <div className="container-news">
          <div className="tittle">
            <h1>Novidades</h1>
          </div>
          <div className="cards">
            <Card />
            <Card />
          </div>
          
        </div>
        
      </section>
  )
}