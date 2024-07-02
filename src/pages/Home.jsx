import { useEffect, useState } from 'react'
import arce from '../assets/arce.webp';
import evo from '../assets/evo.webp';

const Home = () => {
  const URL = 'https://surveys-production.up.railway.app/v1/'
  const [results, setResults] = useState([])

  const fetchData = () => {
    fetch(`${URL}survey/getall`)
      .then(res => res.json())
      .then(data => {
        setResults(data.data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(() => {
      fetchData()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const optionA = results.filter((a) => a.option === 'Arce')
  const optionB = results.filter((b) => b.option === 'Evo')
  const totalVotes = results.length

  const percentageA = totalVotes > 0 ? (optionA.length / totalVotes) * 100 : 0
  const percentageB = totalVotes > 0 ? (optionB.length / totalVotes) * 100 : 0

  const grayscaleA = percentageA > 50 ? 0 : 0.8
  const grayscaleB = percentageB > 50 ? 0 : 0.8

  return (
    <main className="container">
      <div className="description">
        <h3>Si las elecciones primarias fueran este mes</h3>
        <h2>¿Por quién votaría usted?</h2>
      </div>
      <section className="votes">
        <div className="total">
          <h3>Total votos</h3>
          <p className='total-votes'>{totalVotes}</p>
        </div>
        <div className="a">
          <h3>Luis Arce catacora</h3>
          <div className="container-img">
            <img 
              src={arce} 
              alt="Luis Arce Catacora" 
              style={{ filter: `grayscale(${grayscaleA})` }} 
            />
          </div>
          <p className='parcial-vote'>Votos: <span className={`total-votes ${percentageA > 50 ? 'win' : ''}`}>{optionA.length}</span></p>
          <p className='percentage'>Porcentaje: <span className={`total-votes ${percentageA > 50 ? 'win' : ''}`}>{percentageA.toFixed(2)}%</span></p>
        </div>
        <div className="b">
          <h3>Evo Morales Ayma</h3>
          <div className='container-img'>
            <img 
              src={evo} 
              alt="Evo Morales Ayma" 
              style={{ filter: `grayscale(${grayscaleB})` }} 
            />
          </div>
          <p className='parcial-vote'>Votos: <span className={`total-votes ${percentageB > 50 ? 'win' : ''}`}>{optionB.length}</span></p>
          <p className='percentage'>Porcentaje: <span className={`total-votes ${percentageB > 50 ? 'win' : ''}`}>{percentageB.toFixed(2)}%</span></p>
        </div>
      </section>
    </main>
  )
}

export default Home
