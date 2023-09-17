import { Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage, LoginPage } from '../pages';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />

            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}

export default AuthRoutes;