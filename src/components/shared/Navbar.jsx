import { Link, NavLink } from "react-router-dom";
import dummyUser from "../../../src/assets/dummyUser.png";
import { useContext } from "react";
import { AUTHCONTEXT } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, signOutUser } = useContext(AUTHCONTEXT);

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                toast.success(`${user?.displayName} user has been logout successfully 😍`);
            })
            .catch(() => {
                toast.error(`${user?.displayName} user can't logout something wrong 😭`);
            })
    }

  return (
    <div className="max-w-6xl mx-auto text-md uppercase font-semibold text-gray-600 py-5">
        <nav className="flex justify-center items-center gap-20">
            <NavLink className={({isActive}) => isActive ? "active" : "" } to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "active" : "" } to="/all-task">All Task</NavLink>
            <NavLink className={({isActive}) => isActive ? "active" : "" } to="/create-task">Create Task</NavLink>
            {
                user ? (
                    <div className="flex gap-5 justify-center items-center">
                        <div>
                        <img className="w-10 h-10 border-4 border-gray-400 rounded-full " src={user?.photoURL ? user?.photoURL : dummyUser} alt="user" />
                        </div>
                        <button onClick={handleLogOut} className="uppercase">Logout</button>
                    </div>
                ) : (
                    <Link className="hover:text-gray-800" to="/login">Login</Link>
                )
            }
        </nav>
    </div>
  )
}

export default Navbar
