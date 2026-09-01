import { Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import About from '../pages/About'

export default function App() {


  return (
    <div className={styles.app}>
      <header>
        <h1>Sunny's Portfolio</h1>
      </header>

      <Routes>
        <Route path='/' element={<About />} />
      </Routes>


    </div>
  )
}