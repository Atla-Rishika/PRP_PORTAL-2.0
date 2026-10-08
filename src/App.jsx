import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { ROUTES } from './routes'
import CommonLoginScreen from './Components-Login/CommonLoginScreen'
import ForgotPassword from './Components-ForgotPassword/ForgotPassword'
import PlacementReset from './Components-PlacementReset/PlacementReset'
import NewPassword from './Components-NewPassword/NewPassword'
import SuccessfulPage from './Components-SuccessfulPage/SuccessfulPage'

const router = createBrowserRouter([
    { path: ROUTES.login, element: <CommonLoginScreen /> },
    { path: ROUTES.forgotPassword, element: <ForgotPassword /> },
    { path: ROUTES.resetLinkSent, element: <PlacementReset /> },
    { path: ROUTES.newPassword, element: <NewPassword /> },
    { path: ROUTES.resetSuccess, element: <SuccessfulPage /> },
    { path: '/', element: <Navigate to={ROUTES.login} replace /> },
    { path: '*', element: <Navigate to={ROUTES.login} replace /> }
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
