import { Navigate, Routes, Route } from "react-router-dom";
import { LoginPage, Registerpage } from "../pages";

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<Registerpage />} />
            <Route path="/*" element={<Navigate to = "/auth/login" />} />
        </Routes>
    )
}
