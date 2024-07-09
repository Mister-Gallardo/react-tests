import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState('');
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const onClick = () => setToggle(!toggle);

  useEffect(() => {
    setTimeout(() => {
      setData('hello2');
    }, 100)
  }, []);

  return (
    <div>
      <h1 data-testid='input value'>{value}</h1>
      {toggle && <div data-testid='toggle-elem'>toggle</div>}
      {data && <div style={{color: 'green'}}>{data}</div>}
      <h1>Hello world</h1>
      <button data-testid='toggle-btn' onClick={onClick}>click me</button>
      <input type="text" placeholder="input value" onChange={e => setValue(e.target.value)} />
    </div>
  )
}

export default App
