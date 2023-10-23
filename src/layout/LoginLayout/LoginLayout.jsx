import { Navigate, Outlet } from "react-router-dom"
import Login from "../../pages/Login"
import { AUTHCONTEXT } from "../../provider/AuthProvider";
import { useContext } from "react";


const LoginLayout = () => {
    const {user, userLoading} = useContext(AUTHCONTEXT);

    if(userLoading){
        <p>loading....</p>
    }
    if(user){
        return <Navigate to="/" replace/>
    }
  return (
    <>
      <Outlet/>
    </>
  )
}

export default LoginLayout
