
import './App.css'

function App() {

  const getSquares = () => {
      return new Array(9).fill(true);
  }
  

  return (
    <div className='container'>

      <h1>O ganhou</h1>
      <h1>Empate</h1>
      <button>Jogar novamente</button>

      <p>É a vez de X</p>

      <div className="board">
      {getSquares().map((_,i) => (
    <div className='cell'>X</div>))}

        </div>    
    </div>
  )
}

export default App
