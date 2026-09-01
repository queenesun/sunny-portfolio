import { Link, Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost'
import { useAppDispatch, useAppSelector } from './hooks'
import Login from '../pages/Login'
import ProtectedRoute from '../pages/ProtectedRoute'
import MyPage from '../pages/MyPage'
import { clearToken } from '../shared/api/token'
import { setUser } from '../entities/session/model/authSlice'

export default function App() {
  const user = useAppSelector(state => state.auth.user)
  const status = useAppSelector(state => state.auth.status)
  const dispatch = useAppDispatch()

  // 로그아웃 - 서버에 알리지 않는다. 토큰을 버리면 끝
  function handleLogout() {
    clearToken()
    dispatch(setUser(null))
  }

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
            <li><Link to='/myPage'>MyPage</Link></li>
          </ul>
        </nav>

        <div>
          {status === 'loading' ? null : user ? (
            <>
              <span>{user.email}</span>
              <button onClick={handleLogout}>로그아웃</button>
            </>
          ) : (
            <Link to='/login'>로그인</Link>
          )}
        </div>

      </header>

      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<BlogPost />} /> {/* slug 방식 */}

        <Route path='/login' element={<Login />} />
        <Route
          path='/mypage'
          element={
            <ProtectedRoute>
              <MyPage />
            </ProtectedRoute>
          }
        />
      </Routes>


    </div>
  )
}