import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './onboarding/LoginPage';
import SignUpPage from './onboarding/SignUpPage';
import RequiresAuth from './Authorization/Auth';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import ProfilePage from './pages/ProfilePage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/register' element={<SignUpPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/home' element={<RequiresAuth><Home /></RequiresAuth>} />
            <Route path='/movie-details/:id' element={<RequiresAuth><MovieDetails /></RequiresAuth>} />
        </Routes>
    );
}

export default App;
