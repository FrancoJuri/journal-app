import { Routes, Route, Navigate } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import JournalRoutes from "../journal/routes/JournalRoutes";
import CheckingAuth from "../ui/components/CheckingAuth";

const AppRouter = () => {

    const { status } = useCheckAuth();

    if(status === 'checking') {
        return (
            <CheckingAuth />
        )
    }

    return (
        <Routes>

            {
                (status === 'authenticated')
                ?
                <Route path="/*" element={<JournalRoutes />} />
                :
                <Route path="/auth/*" element={<AuthRoutes />} />
            }

            <Route path="/*" element={<Navigate to='/auth/login' />} />

        </Routes>
    )
}

export default AppRouter;