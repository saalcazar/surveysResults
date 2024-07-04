import { useNavigate } from "react-router-dom";
import arce from '../assets/arce.webp';
import evo from '../assets/evo.webp';

const Vote = () => {
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataVote = {
      mail: 'sam@sam',
      place: e.target.place.value,
      age: Number(e.target.age.value),
      gender: e.target.gender.value,
      option: e.target.option.value
    };

    console.log(dataVote);

    fetch('https://surveys-production.up.railway.app/v1/survey/create', {
      method: 'POST',
      body: JSON.stringify(dataVote),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        alert('Gracias por participar');
        nav('/');
        window.open('https://chat.whatsapp.com/LHmBP22xFVOIo0ZDUBIR0j', '_blank');
      });
  };

  return (
    <main className="container">
      <form className="survey-form" onSubmit={handleSubmit}>
        <div className="description">
          <h3>Si las elecciones primarias fueran este mes</h3>
          <h2>¿Por quién votaría usted?</h2>
        </div>
        <label className="survey-label">
          Ingresa los siguientes datos:
        </label>
        <label className="survey-label">
          Lugar:
          <select className="survey-select" name="place" required>
            <option value="La Paz">La Paz</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="Cochabamba">Cochabamba</option>
            <option value="Oruro">Oruro</option>
            <option value="Beni">Beni</option>
            <option value="Chuquisaca">Chuquisaca</option>
            <option value="Potosí">Potosí</option>
            <option value="Pando">Pando</option>
            <option value="Tarija">Tarija</option>
          </select>
        </label>
        <label className="survey-label">
          Edad
          <input className="survey-input" name="age" type="number" required />
        </label>
        <label className="survey-label">
          Género:
          <select className="survey-select" name="gender" required>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </label>
        <div className="survey-label options">
          <label className="select">
            <input className="survey-input" type="radio" name="option" value="Arce" required />
            <img src={arce} alt="Arce" />
          </label>
          <label className="select">
            <input className="survey-input" type="radio" name="option" value="Evo" required />
            <img src={evo} alt="Evo" />
          </label>
        </div>
        <label className="survey-label">
          <input className="survey-input" type="submit" value="Votar" />
        </label>
      </form>
    </main>
  );
};

export default Vote;
