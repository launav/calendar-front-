import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPages } from '../auth/pages'
import { CalendarPages } from '../calendar/pages/CalendarPages'

export const AppRouter = () => {

  // * cuando estemos logeados tendreo¡mos una variable -> auth status
  // const authStatus = 'not-authenticated'//authenticated / no-Authenticated 
  const authStatus = 'authenticated'//authenticated / no-Authenticated 



  return (
    <>
      <Routes>

        {
          (authStatus === 'not-authenticated')
            ? <Route path='/auth/*' element={<LoginPages />} />
            : <Route path='/*' element={<CalendarPages />} />

        }

        <Route path='/*' element={<Navigate to='/auth/login' />} />

      </Routes>

    </>
  )
}
