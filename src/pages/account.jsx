export default function Account() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="h-full bg-[#f6f4f4]">
      <div className="bg-white h-[68px] flex items-center px-6 shadow-sm">
        <h2 className="font-semibold text-lg">Account Settings</h2>
      </div>

      <div className="p-6 ">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-[76px] h-[76px] rounded-full object-cover"
            />

            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#6C25FF] flex items-center justify-center text-white text-xs">
              📷
            </div>
          </div>

          <div>
            <h3 className="font-bold">{user.fullName || "Marry Doe"}</h3>

            <p className="text-sm">{user.email || "marry@gmail.com"}</p>
          </div>
        </div>

        <p className="mt-6 text-[14px] leading-7 text-[#1D2226]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam.
        </p>
      </div>

      <div className="border-t border-dashed mt-4"></div>
      <div className="border-t border-dashed absolute bottom-10 w-[375px]"></div>
    </div>
  );
}
