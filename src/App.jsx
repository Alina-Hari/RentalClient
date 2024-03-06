import './App.css'
import { Route, Routes } from 'react-router-dom'

import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ApartmentListPage from './pages/ApartmentListPage'
import ApartmentDetailsPage from './pages/ApartmentDetailsPage'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/apartments" element={<ApartmentListPage />} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetailsPage />} />

      </Routes>
    </>
  )
}

export default App
