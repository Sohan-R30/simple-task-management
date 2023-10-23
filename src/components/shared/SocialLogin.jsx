import { useContext } from "react";
import googleLogo from "../../assets/googleLogo.jpg";
import { AUTHCONTEXT } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

function SocialLogin() {
    const { googleSignIn } = useContext(AUTHCONTEXT);

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                toast.success(` user has been login successfully 😍`);
            })
            .catch(() => {
                toast.error(`user can't login something wrong! 😭`);
            })
    }
  return (
    <div className="">
        <img onClick={handleGoogleLogin} className="w-20 rounded-full cursor-pointer" src={googleLogo} alt="google logo" />
    </div>
  )
}

export default SocialLogin
