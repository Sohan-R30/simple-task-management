import { useState } from "react";
import { useForm } from "react-hook-form";



const CreateTask = () => {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-5 h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 py-10 w-full justify-center border-b-2 border-r-2 shadow-md rounded-md"
      >
        <h2 className=" text-4xl text-blue-900 font-extrabold  text-center">Create Your Task</h2>

        <input
          type="text"
          placeholder="Task Title"
          {...register("taskTitle", {required: true})}
          autoComplete="true"
          className="border-b-2 border-slate-400 outline-none p-2 w-2/4 mx-auto rounded-md"
          required
        />
        {errors.taskTitle && <span className="text-red-500 text-center">This Field is Required</span>}

        <input
          type="text"
          placeholder="Task Description"
          {...register("taskDescription", {required: true})}
          autoComplete="true"
          className="border-b-2 border-slate-400 outline-none p-2 w-2/4 mx-auto rounded-md"
          required
        />
        {errors.taskDescription && <span className="text-red-500 text-center">This Field is Required</span>}
        
        <div className="w-2/4 mx-auto relative">
        <input
          type="date"
          placeholder="Task Deadline"
          {...register("taskDeadline")}
          autoComplete="true"
          className="border-b-2 text-gray-400 border-slate-400 outline-none p-2 w-full mx-auto rounded-md"
        />
        <p className="absolute text-gray-400 top-2 right-10">Task Deadline</p>
        </div>
        {errors.taskDeadline && <span className="text-red-500 text-center">This Field is Required</span>}


        {error && <p className="text-error text-xl">{error}</p>}
        <input
          type="submit"
          value="Create Task"
          className="w-2/4 text-slate-500 mx-auto bg-teal-300 py-1 uppercase font-bold rounded-md hover:bg-teal-400 delay-100 transition-all  mt-5 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default CreateTask;
