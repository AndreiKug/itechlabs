import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { FavoriteUsersProvider } from "./helpers/FavoriteUsersContext";

import UsersPage from './pages/UserPage/UsersPage';
import UserPostPage from './pages/UserPostPage/UserPostPage';
import FavoriteUsersPage from './pages/FavoriteUsersPage/FavoriteUsersPage';
import Page404 from "./pages/404/404";

import FavoriteIcon from "../src/assets/Vector.svg";

function App() {
  return (
    <FavoriteUsersProvider>
        <div className='app'>                           
        <Router>
            <div className="favorite">
                <Link to={`/favorites`} className="favorite-link">
                    <span>Избранное</span>
                    <img src={FavoriteIcon} alt="Избранное" />
                </Link>
            </div>
        
            <Routes>
                <Route path="/" element={<UsersPage/>} />
                <Route path="/users/:userId/posts" element={<UserPostPage />} />
                <Route path="/favorites" element={<FavoriteUsersPage />} />
                <Route path="*" element={<Page404/>}></Route> 
            </Routes>
        </Router>
        </div>
    </FavoriteUsersProvider>
  )
}

export default App
