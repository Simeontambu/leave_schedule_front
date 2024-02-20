import Button from "./button";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    // An object with user data
    const user = {
      name: data.username,
      email: data.email,
      password: data.password,
    };

    // Sending data from user to api
    axios
      .post("http://localhost:8000/api/user/create", user)
      .then((response) => {
        console.log(response.data);
        // Reset form
        reset();
      })
      .catch((error) => {
        console.error(error);
      });
    reset();
  }
  return (
    <>
      <div className="max-w-[25em] my-[5em] mx-auto bg-[#9dc3cc] min-h-[33em] rounded-lg">
        <h1 className="text-center text-3xl pt-4 font-bold">Sign up</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center pt-10 "
        >
          <div className="flex flex-col pb-10">
            <label className="font-bold">Username</label>
            <div className="border-b-4">
              <FaUserAlt className="pl-1 absolute top-[12.80em] " size={22} />
              <div>
                <input
                  name="username"
                  type="texte"
                  placeholder="Type your username"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("username", {
                    required: " Please enter your username",
                    pattern: {
                      value: /^[a-zA-Z0-9]+$/,
                      message: "No special character",
                    },
                  })}
                />
              </div>
              {errors.username && (
                <span className="text-red-500 absolute">
                  {errors.username?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Password</label>
            <div className="border-b-4">
              <RiLockPasswordFill
                className="absolute top-[19.50em] "
                size={25}
              />
              <div>
                <input
                  name="password"
                  type="texte"
                  placeholder="Type your password"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("password", {
                    required: "Please enter your password",
                    pattern: {
                      value: /^(.{6,})$/,
                      message: "More than six characters please",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <span className="text-red-500 absolute">
                  {errors.password?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Email</label>
            <div className="border-b-4">
              <MdEmail className="absolute top-[25.15em] " size={25} />
              <div>
                <input
                  name="email"
                  type="texte"
                  placeholder="Type your email"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                      message: "This e-mail address is not valid",
                    },
                  })}
                />
              </div>
            </div>
            {errors.email && (
              <span className="text-red-500">{errors.email?.message}</span>
            )}
          </div>
          <Button
            type="submit"
            value="Sign up"
            className="bg-[#0c1b33] w-[12.5em] rounded-lg px-4 py-2 font-bold hover:bg-blue-700 text-white mb-4"
          />
          <Link to="/">
            <span className="hover:bg-[#0c1b33] rounded-lg px-4 py-2 hover:text-white">LOGIN</span>
          </Link>
        </form>
      </div>
    </>
  );
}
