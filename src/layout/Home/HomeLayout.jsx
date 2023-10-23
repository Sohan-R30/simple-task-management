import { Outlet } from "react-router-dom"
import Navbar from "../../components/shared/Navbar"


const HomeLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default HomeLayout
