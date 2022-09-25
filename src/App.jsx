
import LandingPage from './pages/LandingPage/landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup/signup';
import Login from './pages/Login/login';
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
