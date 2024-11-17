
import { useState } from 'react';
import './App.css';

type Players = "O" | "X";

function App() {

  const [turn, setTurn] = useState<Players>("O");
  const [winnwer,setWinner] = useState<Players | null>(null);
  const [draw, setDraw] = useState<boolean | null>(null);
  const [marks, setMarks] = useState<{[key:string]:Players}>({});

const getSquares = () => {
      return new Array(9).fill(true);
  }

  const play = (index:number)=>{
    setMarks(prev =>({ ...prev, [index]:turn}))
    setTurn(prev => prev === "O" ? "X" : "O")
  }

  const getCellPlayer = (index: number) => {
    if(!marks[index]){
      return;
    }
    return marks[index];
  }
  

  return (
    <div className="container">

      <h1>O ganhou</h1>
      <h1>Empate</h1>
      <button>Jogar novamente</button>

      <p>É a vez de X</p>

      <div className="board">
      {getSquares().map((_, i) => (
        <div className={`cell ${getCellPlayer(i)}`} onClick={() => play(i)}>{marks[i]}</div>
        ))}
      </div>    
    </div>
  )
}

export default App
