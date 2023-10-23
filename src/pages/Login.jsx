import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SocialLogin from "../components/shared/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AUTHCONTEXT } from "../provider/AuthProvider";
import { toast } from "react-toastify";



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/"

  const {signInUser} = useContext(AUTHCONTEXT);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    signInUser(data?.email, data?.password)
        .then((result) => {
            toast.success(`user has been login successfully 😍`);
            navigate(from, { replace: true });
        })
        .catch(() => {
            toast.error(`${data?.email} user can't login something wrong! 😭`);
        })
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-5 h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 py-10 w-full justify-center border-b-2 border-r-2 shadow-md rounded-md"
      >
        <h2 className=" text-4xl text-blue-900 font-extrabold  text-center">Login</h2>
        <p className="text-center text-gray-600">For Create Your Tasks or manage Tasks</p>

        <input
          type="email"
          placeholder="Your Email"
          {...register("email", {required: true})}
          autoComplete="true"
          className="border-b-2 border-slate-400 outline-none p-2 w-2/4 mx-auto rounded-md"
          required
        />
        {errors.email && <span className="text-red-500 text-center">Give the email properly</span>}
        <div className="w-2/4 mx-auto relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your Password"
            {...register("password", {required: true})}
            autoComplete="true"
            className="border-b-2 border-slate-400 outline-none p-2 w-full rounded-md"
            required
          />
          <div onClick={() => setShowPassword(!showPassword)} className="text-2xl absolute top-3 right-5">
            {
                showPassword ? (
                    <p><AiOutlineEyeInvisible /></p>
                ) : (
                    <p><AiOutlineEye /></p>
                )
            }
          </div>
        </div>

        {errors.password && <span className="text-red-500 text-center">Give the passoword properly</span>}
        {error && <p className="text-error text-xl text-center">{error}</p>}

        <input
          type="submit"
          value="Login"
          className="w-2/4 text-slate-500 mx-auto bg-teal-300 py-1 uppercase font-bold rounded-md hover:bg-teal-400 delay-100 transition-all  mt-5 cursor-pointer"
        />
        <p className="text-center text-gray-600">Have No Account ? <Link className="text-blue-800" to="registration" >Registration First</Link></p>
      </form>
      <>    
      <SocialLogin/>
      </>
    </div>
  );
};

export default Login;
