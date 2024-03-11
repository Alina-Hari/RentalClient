import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ApartmentListPage from './pages/ApartmentListPage'
import ApartmentDetailsPage from './pages/ApartmentDetailsPage'
import TestPage from './pages/TestPage'
import AppoinmentListPage from './pages/AppoinmentListPage'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import UserProfilePage from './pages/UserProfilePage'

function App() {

  return (
    <div className="h-screen w-screen  overflow-hidden" >
      <Navbar />
      <div className='h-[80%] p-5'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/apartments" element={<ApartmentListPage />} />
          <Route path="/apartments/:apartmentId" element={<ApartmentDetailsPage />} />
          <Route path="/appoinments/" element={<AppoinmentListPage />} />
          <Route path="/test" element={<TestPage />} />  
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/userprofile" element={<UserProfilePage />}/>
          <Route path="*" element={<NotFoundPage />}/>
          </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
