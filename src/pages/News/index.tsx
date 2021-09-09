import { useEffect, useState } from 'react'
import { Sidebar } from '../../components/Sidebar'
import { Card } from '../../components/Card'
import './styles.scss'
import api from '../../services/api'

interface NewsProps {
  titulo: string;
  descricao: string;
  link: string;
  id: number;
  image: string;
  imagem: string;
  data: string;
}

export function News() {

  const [cursos, setCursos] = useState<NewsProps[]>([]);

  useEffect(() => {
    api
      .get<NewsProps[]>("/listarnovidades")
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
          <div className="cards-news">
            {cursos.map((curso) => (
              <div key={curso.id} className="card">
                <Card title={curso?.titulo} image={curso?.imagem} description={curso.descricao} link={curso.link} data={curso.data}/>
              </div>
            ))}
            
            
            
          </div>
          
        </div>
        
      </section>
  )
}