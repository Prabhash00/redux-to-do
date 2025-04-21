import './App.css'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <h1 className='text-3xl font-bold'>Redux Toolkit Project</h1>
      <AddToDo/>
      <br />
      <Todos/>
    </>
  )
}

export default App
