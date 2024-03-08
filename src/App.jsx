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

function App() {

  return (
    <div className="h-screen w-screen p-5 overflow-hidden" >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/apartments" element={<ApartmentListPage />} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetailsPage />} />
        <Route path="/appoinments/" element={<AppoinmentListPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  )
}

export default App
