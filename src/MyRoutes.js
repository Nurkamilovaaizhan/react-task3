import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddStuffPage from './pages/AddStuffPage'
import StuffContextProvider from './contexts/StuffContextProvider'
import StuffPage from './pages/StuffPage'
import StuffDetailsPage from './pages/StuffDetailsPage'
import EditStuffPage from './pages/EditStuffPage'

const MyRoutes = () => {
  return (
    <div>
        <StuffContextProvider>
        <Routes>
        <Route path='/' element={<StuffPage/>}/>
        <Route path='/add' element={<AddStuffPage/>}/>
        <Route path='/detail/:id' element={<StuffDetailsPage/>}/>
        <Route path='/edit/:id' element={<EditStuffPage/>}/>
        </Routes>
        </StuffContextProvider>
      
    </div>
  )
}

export default MyRoutes
