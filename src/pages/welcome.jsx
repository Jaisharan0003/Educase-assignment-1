import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-end p-6 pb-10">
      <h1 className="text-[28px] font-bold text-[#1D2226]">Welcome to PopX</h1>

      <p className="text-[#919191] mt-2 text-[18px] leading-7">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <button
        onClick={() => navigate("/register")}
        className="mt-8 bg-[#6C25FF] text-white h-12 rounded-md font-semibold"
      >
        Create Account
      </button>

      <button
        onClick={() => navigate("/login")}
        className="mt-3 bg-[#CEBAFB] text-[#1D2226] h-12 rounded-md font-semibold"
      >
        Already Registered? Login
      </button>
    </div>
  );
}
