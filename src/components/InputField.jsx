export default function InputField({
  label,
  required = false,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="relative mb-6">
      <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-[#6C25FF]">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className=" border border-gray-300 rounded-md px-4 py-2 outline-none w-full focus:border-[#6C25FF]"
      />
    </div>
  );
}
