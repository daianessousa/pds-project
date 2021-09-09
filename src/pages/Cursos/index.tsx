import { useEffect, useState } from 'react'
import { Sidebar } from '../../components/Sidebar'
import { CardCursos } from '../../components/CardCursos'
import './styles.scss'
import api from '../../services/api'

interface CursosProps {
  titulo: string;
  descricao: string;
  link: string;
  id: number;
  image: string;
  imagem: string;
}

export function Cursos() {

  const [cursos, setCursos] = useState<CursosProps[]>([]);

  useEffect(() => {
    api
      .get<CursosProps[]>("/listarcursos")
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
              <CardCursos title={curso?.titulo} image={curso?.imagem} description={curso.descricao} link={curso.link}/>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}