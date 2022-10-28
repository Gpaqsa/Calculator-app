import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("")
  }

  const backspace = () => {
    setResult(result.slice(0, result.length - 1))
  }
  
  const calculate = () => {
    setResult(eval(result).toString());
  }
  return (
    <>
      <section className='container'>
        <form className='form'>
          <input type="text" value={result}/>
        </form>
       
        <article className='keypad'>
          <button className='theme' onClick={clear} id="clear">Clear</button>
          <button className='theme' onClick={backspace} id="backspace">C</button>
          <button className='theme changeColor ' name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className='theme changeColor ' name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className='theme changeColor ' name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className='theme changeColor ' name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button  className='theme' onClick={calculate} id="result">=</button>
        </article>

      </section>
    </>
  );
}

export default App;
