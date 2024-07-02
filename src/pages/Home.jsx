import { useEffect, useState } from "react"

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

  const optionA = results.filter((a) => a.option == 'Arce')
  const optionB = results.filter((b) => b.option == 'Evo')
  const totalVotes = results.length

  const percentageA = totalVotes > 0 ? (optionA.length / totalVotes) * 100 : 0
  const percentageB = totalVotes > 0 ? (optionB.length / totalVotes) * 100 : 0
  return (
    <div>
     <div>
        <h2>Total votos</h2>
        <p>{totalVotes}</p>
      </div>
      <div>
        <h2>Opción A</h2>
        <p>{optionA.length}</p>
        <p>{percentageA.toFixed(2)}%</p>
      </div>
      <div>
        <h2>Opción B</h2>
        <p>{optionB.length}</p>
        <p>{percentageB.toFixed(2)}%</p>
      </div>
    </div>
  )
}

export default Home