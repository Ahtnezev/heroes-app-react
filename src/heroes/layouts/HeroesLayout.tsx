import { Outlet } from "react-router"


export const HeroesLayout = () => {
  return (
   <div className="bg-gradient">
      {/* ver contenido hijo */}
      <Outlet /> 
   </div>
  )
}
