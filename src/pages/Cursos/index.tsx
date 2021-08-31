import { useEffect, useState } from 'react'
import { Sidebar } from '../../components/Sidebar'
import { CardCursos } from '../../components/CardCursos'
import './styles.scss'
import api from '../../services/api'

interface CursosProps {
  title: string,
  description: string,
  cover: string,
  url: string,
  link: string,
  id: number,
}


export function Cursos() {

  const [cursos, setCursos] = useState<CursosProps[]>([]);

  useEffect(() => {
    api
      .get<CursosProps[]>("/cursos")
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
          <h1>Cursos</h1>
        </div>
        <div className="cards">
          {cursos.map((curso) => (
            <div key={curso.id} className="card">
              <CardCursos title={curso.title} description={curso.description} link={curso.link}/>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}