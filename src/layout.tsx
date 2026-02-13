import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute bg-cover bg-center z-[-100] opacity-30 inset-0 bg-[url('@/assets/bg.png')]"></div>
      <Outlet />
    </div>
  );
}
