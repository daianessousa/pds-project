import { useEffect, useState } from 'react'
import { Sidebar } from '../../components/Sidebar'
import { Card } from '../../components/Card'
import './styles.scss'
import api from '../../services/api'

interface NewsProps {
  title: string;
  description: string;
  link: string;
  id: number;
  image: string;
  coverlink: string;
}

export function News() {

  const [cursos, setCursos] = useState<NewsProps[]>([]);

  useEffect(() => {
    api
      .get<NewsProps[]>("/novidades")
      .then((response) => setCursos(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro: " + err);
      });
  }, []);

  return (
      <section className="news">
        <Sidebar />
        <div className="container-news">
          <div className="tittle">
            <h1>Novidades</h1>
          </div>
          <div className="cards">
            {cursos.map((curso) => (
              <div key={curso.id} className="card">
                <Card title={curso?.title} image={curso?.coverlink} description={curso.description} link={curso.link}/>
              </div>
            ))}
            
            
            
          </div>
          
        </div>
        
      </section>
  )
}