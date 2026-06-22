import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      navigate("/account");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-[30px] font-bold leading-10 text-[#1D2226]">
        Signin to your
        <br />
        PopX account
      </h1>

      <p className="text-[#919191] text-[18px] mt-3 mb-8">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <InputField
        label="Email Address"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        className="w-full h-12 rounded-md bg-[#CBCBCB] text-white font-semibold"
      >
        Login
      </button>
    </div>
  );
}
