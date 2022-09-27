
import LandingPage from './pages/LandingPage/landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup/signup';
import Login from './pages/Login/login';
import Menu from './pages/Menu/menus';
import Profile from './pages/Profile/profile';
import Users from './pages/Users/users';
import ProtectedRoute from './Auth-Context/protectedroute';
import CreateUser from './pages/Createuser/createUser';
import UpdateUser from './pages/Updateuser/updateuser';
import DeleteUser from './pages/Deleteuser/deleteuser';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/menu"
            element={<ProtectedRoute children={<Menu />} />}
          />
          <Route
            path="/users"
            element={<ProtectedRoute children={<Users />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute children={<Profile />} />}
          />
          <Route
            path="/create-user"
            element={<ProtectedRoute children={<CreateUser />} />}
          />
          <Route
            path="/update-user"
            element={<ProtectedRoute children={<UpdateUser />} />}
          />
          <Route
            path="/delete-user"
            element={<ProtectedRoute children={<DeleteUser />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
