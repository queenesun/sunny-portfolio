import { Link, Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost'

export default function App() {


  return (
    <div className={styles.app}>
      <header>
        <Link to='/'><h1>Sunny's Portfolio</h1></Link>


        <nav>
          <ul className={styles.menus}>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/skills'>Skills</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<BlogPost />} /> {/* slug 방식 */}
      </Routes>


    </div>
  )
}