
import LandingPage from './pages/LandingPage/landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup/signup';
import Login from './pages/Login/login';
import Menu from './pages/Menu/menus';
import Profile from './pages/Profile/profile';
import Users from './pages/Users/users';
import ProtectedRoute from './Auth-Context/protectedroute';
import CreateUser from './pages/Createuser/createUser';
// import { Toaster } from "react-hot-toast";



function App() {
  return (
    <>
      {/* <Toaster/> */}
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
          {/* <Route path="/forgot-password" element={<VerifyEmailInput />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/password-reset-verification"
            element={<PasswordResetVerification />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/bank-transfer" element={<BankTransfer />} />
          <Route path="/local-transfer" element={<LocalTransfer />} />
          <Route path="/fund-wallet" element={<FundWallet />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
