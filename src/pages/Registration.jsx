import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../components/shared/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { AUTHCONTEXT } from "../provider/AuthProvider";
import { toast } from "react-toastify";



const Registration = () => {

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser, updateUserProfile } = useContext(AUTHCONTEXT);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data?.email, data?.password)
        .then((result) => {
            updateUserProfile(data?.fullName)
                .then(() => {
                    toast.success(`${data?.fullName} user has been created successfully 😍`)
                    navigate(-2, { replace: true })
                })
                .catch(error => {
                    toast.error(`user has been created successfully 😍 but something wrong with name 🥹`)
                })
            
        })
        .catch(error => {
            toast.error(`${data?.fullName} user can not be created 😭`)
        })
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-5 h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 py-10 w-full justify-center border-b-2 border-r-2 shadow-md rounded-md"
      >
        <h2 className=" text-4xl text-blue-900 font-extrabold  text-center">Registration Here</h2>
        <p className="text-center text-gray-600">For Create Your Tasks or manage Tasks</p>

        <input
          type="email"
          placeholder="Your Email"
          {...register("email", {required: true})}
          autoComplete="true"
          className="border-b-2 border-slate-400 outline-none p-2 w-2/4 mx-auto rounded-md"
          required
        />
        {errors.email && <span className="text-red-500 text-center">Give your Email properly</span>}
        
        <input
          type="text"
          placeholder="Your Full Name"
          {...register("fullName", {required: true})}
          autoComplete="true"
          className="border-b-2 border-slate-400 outline-none p-2 w-2/4 mx-auto rounded-md"
          required
        />
        {errors.fullName && <span className="text-red-500 text-center">Give your Full Name properly</span>}
        
        <div className="w-2/4 mx-auto relative">
          <input
            type={"text"}
            placeholder="Your Password"
            {...register("password" , {required: true, pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/})}
            autoComplete="true"
            className="border-b-2 border-slate-400 outline-none p-2 w-full rounded-md"
            required
          />
        </div>
        {errors.password && <span className="text-red-500 text-center">Password is not Valid (at least (6) 1 digit, 1 small and 1 special character)</span>}
        <div className="w-2/4 mx-auto relative">
          <input
            type={"text"}
            placeholder="Confirm Password"
            {...register("confirmPassword" , {required: true, validate: (value) => value === watch('password')})}
            autoComplete="true"
            className="border-b-2 border-slate-400 outline-none p-2 w-full rounded-md"
            required
          />
        </div>

        {errors.confirmPassword && <span className="text-red-500 text-center">Password not match</span>}
        {error && <p className="text-error text-xl">{error}</p>}

        <input
          type="submit"
          value="Registration"
          className="w-2/4 text-slate-500 mx-auto bg-teal-300 py-1 uppercase font-bold rounded-md hover:bg-teal-400 delay-100 transition-all  mt-5 cursor-pointer"
        />
        <p className="text-center text-gray-600">Already Have  Account ? <Link className="text-blue-800" to="/login" >Login Here</Link></p>
      </form>
      <>    
      <SocialLogin/>
      </>
    </div>
  );
};

export default Registration;
