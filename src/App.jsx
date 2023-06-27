import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy } from './store/slices/counter';
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();


  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <p>count is {counter}</p>
      <div className="card">
        <button onClick={() => dispatch( increment() ) }>
          Increment
        </button>
        <button onClick={() => dispatch( decrement() ) }>
          Decrement
        </button>
        <button onClick={() => dispatch( incrementBy(2) ) }>
          Increment by 2
        </button>
      </div>
    
    </>
  )
}

export default App
