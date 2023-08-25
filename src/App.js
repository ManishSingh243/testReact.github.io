import { useState } from 'react';
import './App.css'
import { TbSquareRoundedPlus, TbArmchair } from "react-icons/tb";

const App = () => {
  const [value, setValue] = useState(0)
  const [count, setCount] = useState(0)

  const handleClick = (e) => {
    if(e.currentTarget.disabled === false){
      e.currentTarget.disabled = true;
      e.currentTarget.style.backgroundColor = 'green';
      setCount(count + 1);
      setValue(value + 185);
    }
    else{
      e.currentTarget.disabled = false;
      e.currentTarget.style.backgroundColor = 'white';
      setCount(count - 1);
      setValue(value - 185);
    }
  }

  return(
   <div>
      <table>
      <thead>
          <th colspan="4">Lower deck</th>
      </thead>
      <tbody>
        <tr>
          <td>
              <button onClick={handleClick}>
              <TbArmchair />
              </button>
          </td>
          <td>
              <pre>    </pre>
          </td>
          <button onClick={handleClick}>
          <TbArmchair />
              </button>
              <button onClick={handleClick}>
              <TbArmchair />
              </button>
        </tr>
        <tr>
        <button onClick={handleClick}>
        <TbArmchair />
              </button>
          <td>
              <pre>    </pre>
          </td>
          <button onClick={handleClick}>
          <TbArmchair />
              </button>
              <button onClick={handleClick}>
              <TbArmchair />
              </button>
        </tr>
        <tr>
        <button onClick={handleClick}>
        <TbArmchair />
              </button>
          <td>
              <pre>    </pre>
          </td>
          <button onClick={handleClick}>
          <TbArmchair />
              </button>
              <button onClick={handleClick}>
              <TbArmchair />
              </button>
        </tr>
        <tr>
        <button onClick={handleClick}>
        <TbArmchair />
              </button>
          <td>
              <pre>    </pre>
          </td>
          <button onClick={handleClick}>
          <TbArmchair />
              </button>
              <button onClick={handleClick}>
              <TbArmchair />
              </button>
        </tr>
        <tr>
        <button onClick={handleClick}>
        <TbArmchair />
              </button>
          <td>
              <pre>    </pre>
          </td>
          <button onClick={handleClick}>
          <TbArmchair />
              </button>
              <button onClick={handleClick}>
              <TbArmchair />
              </button>
        </tr>
      </tbody>
    </table>

    <table id='gap'>
      <thead>
          <td>{count} seat | L</td>
          <td><pre>           </pre></td>
          <td><i class="fa">&#xf156;</i>{value}</td>
          <td><TbSquareRoundedPlus /></td>
      </thead>
      <tbody>
        <tr >
          <td colspan="4" id="continue">Continue</td>
        </tr>
        </tbody>
        </table>
   </div>
  )
}

export default App;