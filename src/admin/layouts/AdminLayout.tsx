import { Outlet } from "react-router"

export const AdminLayout = () => {
  return (
    <div className="bg-mist-900 min-h-screen text-white flex flex-col gap-4 items-center">
      <Outlet />
    </div>
  )
}
