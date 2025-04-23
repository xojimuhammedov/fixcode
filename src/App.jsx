import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import ProblemsPage from './pages/ProblemsPage/ProblemsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import { useEffect } from 'react'
import ContestPage from './pages/ContestPage/ContestPage'
import ContestAboutPage from './pages/ContestPage/components/ContestAboutPage'
import Leaderboard from './pages/Leaderboard/Leaderboard'
import DiscussionPage from './pages/DiscussionPage/DiscussionPage'
import NavbarMenu from './components/NavbarMenu'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import HistoryPage from './pages/HistoryPage/HistoryPage'
import AboutProblemsPage from './pages/AboutProblemsPage/AboutProblemsPage'
import Partner from './components/Partner'
import Programming from './components/Programming'
import Technology from './components/Technology'
import Coding from './components/Coding'

function App() {
  const navigate = useNavigate()
  const userToken = localStorage.getItem("userToken")

  useEffect(() => {
    if (!userToken) {
      navigate("/")
    }
  }, [userToken])

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <div className='app'>
              <NavbarMenu />
              <Header />
            </div>
            <Partner />
            {/* <Programming /> */}
            <Technology />
            <Coding />
            <Section />
            <Footer />
          </>
        } />
        <Route path='/login' element={<RegisterPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/problems' element={<ProblemsPage />} />
        <Route path='/problems/:id' element={<AboutProblemsPage />} />
        <Route path='/contest' element={<ContestPage />} />
        <Route path='/contest/:id' element={<ContestAboutPage />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/discussion/:id' element={<DiscussionPage />} />
        <Route path='/history' element={<HistoryPage />} />
      </Routes>
    </>
  )
}

export default App
