import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const submit = () => {
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/account");
  };

  return (
    <div className="h-full p-6 flex flex-col">
      <h1 className="text-[30px] font-bold leading-10 mb-8">
        Create your
        <br />
        PopX account
      </h1>

      <InputField
        label="Full Name"
        required
        placeholder="Marry Doe"
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
      />

      <InputField
        label="Phone number"
        required
        placeholder="Marry Doe"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <InputField
        label="Email address"
        required
        placeholder="Marry Doe"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <InputField
        label="Password"
        required
        placeholder="Marry Doe"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <InputField
        label="Company name"
        placeholder="Marry Doe"
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      <div className="mb-auto">
        <p className="font-medium">
          Are you an Agency?<span className="text-red-500">*</span>
        </p>

        <div className="flex gap-6 mt-3">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={form.agency === "Yes"}
              onChange={() => setForm({ ...form, agency: "Yes" })}
            />
            Yes
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={form.agency === "No"}
              onChange={() => setForm({ ...form, agency: "No" })}
            />
            No
          </label>
        </div>
      </div>

      <button
        onClick={submit}
        className="w-full h-12 bg-[#6C25FF] text-white rounded-md font-semibold cursor-pointer"
      >
        Create Account
      </button>
    </div>
  );
}
