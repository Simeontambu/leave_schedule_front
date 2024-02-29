import Button from "../authentication/button";
import { useData } from "../../hooks/useData";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AcceptLeave() {
  const { token, planning, setPlanning } = useData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const planningLeave = {
      code_conge: data.leave,
      nom: data.name,
      date_depart: data.departure,
      date_retour: data.return,
    };

    console.log("Value", planningLeave);
    // Sending data from user to api
    axios
      .post("http://localhost:8000/api/planning/create", planningLeave, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setPlanning([...planning, response.data.planning]);
        // Reset form
        reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="max-w-[70em] my-[5em] mx-auto bg-[#9dc3cc] min-h-[10em] rounded-lg ">
        <h1 className="text-center text-3xl pt-4 font-bold">Accepted leave</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap justify-center pt-10 gap-2"
        >
          <div className="flex flex-col pb-10">
            <label className="font-bold">Leave the code</label>
            <div className="border-b-4">
              <div>
                <input
                  name="leave"
                  type="texte"
                  placeholder="Type your Leave code"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("leave", {
                    required: " Please enter your leave code",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "No character",
                    },
                  })}
                />
              </div>
              {errors.leave && (
                <span className="text-red-500 absolute">
                  {errors.leave?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Agent name</label>
            <div className="border-b-4">
              <div>
                <input
                  name="name"
                  type="texte"
                  placeholder="Type your agent name"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("name", {
                    required: " Please enter your middle name",
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "No numeric & special character",
                    },
                  })}
                />
              </div>
            </div>
            {errors.name && (
              <span className="text-red-500">{errors.name?.message}</span>
            )}
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Date of departure</label>
            <div className="border-b-4">
              <div>
                <input
                  name="departure"
                  type="date"
                  placeholder="Type your date of departure"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-10 py-2 bg-transparent"
                  {...register("departure", {
                    required: " Please enter your date of departuree",
                  })}
                />
              </div>
            </div>
            {errors.departure && (
              <span className="text-red-500">{errors.departure?.message}</span>
            )}
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Return date</label>
            <div className="border-b-4">
              <div>
                <input
                  name="return"
                  type="date"
                  placeholder="Type your return date"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-10 py-2 bg-transparent"
                  {...register("return", {
                    required: " Please enter your return date",
                  })}
                />
              </div>
            </div>
            {errors.return && (
              <span className="text-red-500">{errors.return?.message}</span>
            )}
          </div>

          <Button
            type="submit"
            value="Accept"
            className="bg-[#0c1b33] w-[12.5em] rounded-lg px-4 py-2 font-bold hover:bg-blue-700 text-white mb-4"
          />
        </form>
      </div>
    </>
  );
}
