import { useNavigate } from "react-router-dom"

const Vote = () => {
  const nav = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const dataVote = {
      mail: e.target.mail.value,
      place: e.target.place.value,
      age: Number(e.target.age.value),
      gender: e.target.gender.value,
      option: e.target.option.value
    }
    
    fetch('https://surveys-production.up.railway.app/v1/', {
      method: 'POST',
      body: JSON.stringify(dataVote),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      alert(data)
      nav('/')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Correo:
        <input name="mail" type="text" />
      </label>
      <label>
        Lugar:
        <input name="place" type="text" />
      </label>
      <label>
        Edad
        <input name="age" type="number" />
      </label>
      <label>
        Genero:
        <input name="gender" type="text" />
      </label>
      <label>
        Por quien votaria usted
        <input name="option" type="text" />
      </label>
      <input type="submit" value="Votar" />
    </form>
  )
}

export default Vote