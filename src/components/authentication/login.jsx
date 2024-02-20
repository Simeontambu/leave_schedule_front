import Button from "./button";
import Input from "./input";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useData } from "../../hooks/useData";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, SetIsAuthenticated } = useData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        data
      );
      console.log(response.data.status_code);
      if (response.data.status_code === 200) {
        console.log("simeon");
        localStorage.setItem("auth_token", response.data.token); // Example of insecure storage (use cookies or a better mechanism)
        SetIsAuthenticated(!isAuthenticated);

        navigate("/dashboard");
        reset();
      } else {
        alert(response.data.status_message);
        reset();
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Login error:", error);
      setError("Something went wrong. Please try again later.");
    }
  };
  return (
    <>
      <div className="max-w-[25em] my-[5em] mx-auto bg-[#9dc3cc] min-h-[30em] rounded-lg">
        <h1 className="text-center text-3xl pt-4 font-bold">Login</h1>
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
                  name="name"
                  type="texte"
                  placeholder="Type your username"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("name", {
                    required: true,
                  })}
                />
              </div>
              {errors.name && (
                <span className="text-red-500 absolute">
                  Please enter your username
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
                  type="password"
                  placeholder="Type your password"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("password", {
                    required: true,
                  })}
                />
              </div>
            </div>
            {errors.password && (
              <span className="text-red-500">Please enter your password</span>
            )}

            <span>Forgot password ?</span>
          </div>
          <Button
            type="submit"
            value="Login"
            className="bg-[#0c1b33] w-[12.5em] rounded-lg px-4 py-2 font-bold hover:bg-blue-700 text-white mb-4"
          />
          <Link to="/register">
            <span className="hover:bg-[#0c1b33] rounded-lg px-4 py-2 hover:text-white">SIGN UP</span>
          </Link>
        </form>
      </div>
    </>
  );
}
