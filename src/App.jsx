import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/welcome";
import Login from "./pages/login";
import Register from "./pages/register";
import Account from "./pages/account";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F7F8F9]">
      <div className="w-[375px] h-[700px] bg-white border border-gray-200 overflow-hidden">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
