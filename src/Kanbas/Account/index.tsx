import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../../Users/Signin";
import UserTable from "../../Users/Table";
import Signup from "../../Users/Signup";
import Profile from "../../Users/Profile";

export default function Account() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Admin/Users" element={<UserTable />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
