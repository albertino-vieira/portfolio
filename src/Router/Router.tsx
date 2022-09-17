import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import ContactPage from "../pages/Contact/ContactPage"
import MainPage from "../pages/Main/MainPage"


function Router() {
    return <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </BrowserRouter>
}

export default Router