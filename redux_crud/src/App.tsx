import './App.css'
import { AnimalsList } from './components/Animals/AnimalsList'
import AnimalsForm from './components/AnimalsForm/AnimalsForm'

function App() {

  return (
    <div>
      <h1>Ferma</h1>
      <AnimalsList />
      <AnimalsForm />
    </div>
  )
}

export default App
