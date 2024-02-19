import Button from "./button";
import Input from "./input";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data.username);
  }
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
              <Input
                name="username"
                type="texte"
                placeholder="Type your username"
                className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                validation={{ ...register("username", { required: true }) }}
              />
            </div>
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Password</label>
            <div className="border-b-4">
              <RiLockPasswordFill
                className="absolute top-[19.50em] "
                size={25}
              />
              <Input
                name="password"
                type="texte"
                placeholder="Type your password"
                className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
              />
            </div>
          </div>
          <Button
            type="submit"
            value="Login"
            className="bg-[#0c1b33] w-[12.5em] rounded-lg px-4 py-2 font-bold hover:bg-blue-700 text-white"
          />
        </form>
      </div>
    </>
  );
}
