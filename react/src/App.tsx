import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Home from "./pages/HomePage";
import useTheme from "./hooks/useTheme";
import ForgotPassword from "./pages/ForgotPasswordPage";
import ResetPassword from "./pages/ResetPasswordPage";
import ProtectedRoute from "./components/ProtectedRoute";
import TweetDetailPage from "./pages/TweetDetailPage";
import Layout from "./layouts/Layout";
import Profile from "./pages/ProfilePage";

function App() {
  useTheme();
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/tweet/:tweetId" element={<TweetDetailPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
