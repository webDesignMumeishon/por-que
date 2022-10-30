import './App.css';
import Card from './Card';
import data from './data'

function App() {

  const cardData = Array.from(Array(6).keys())

  return (
    <div className="App">
        <h1>Por qué ?</h1>

        <h2>Espero que hayas encontrado todos los codigos</h2>
        
        <h3>En las siguientes cartas vas a encontrar motivos por los que hice esta pagina.</h3>


      <div className='cardsWrapper'>
        {cardData.map(element => {
          const index = element + 1
          return (
            <Card 
              number={data[index].number} 
              cardPassword={data[index].password} 
              text={data[index].text}
              key={index}
            />
          )
        })}
      </div>

    </div>
  );
}

export default App;
