import { useForm } from "react-hook-form";
import { useData } from "../../hooks/useData";
import Button from "../authentication/button";
import axios from "axios";

export default function AddAgent() {
  const { token, agents, setAgents } = useData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const agent = {
      nom: data.nom,
      postnom: data.middle_name,
      prenom: data.first_name,
      adresse: data.address,
      telephone: data.phone,
      sexe: data.gender,
      libelle: data.function,
      libelle_direction: data.direction,
    };
    // Sending data from user to api
    axios
      .post("http://localhost:8000/api/agents/create", agent, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setAgents([...agents, response.data.agent]);
        // Reset form
        reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="max-w-[70em] my-[5em] mx-auto bg-[#9dc3cc] min-h-[30em] rounded-lg">
        <h1 className="text-center text-3xl pt-4 font-bold">Add agent</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap justify-center pt-20 gap-2"
        >
          <div className="flex flex-col pb-10">
            <label className="font-bold">Last name</label>
            <div className="border-b-4">
              <div>
                <input
                  name="nom"
                  type="texte"
                  placeholder="Type your name"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("nom", {
                    required: " Please enter your last name",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "No numeric character",
                    },
                  })}
                />
              </div>
              {errors.nom && (
                <span className="text-red-500 absolute">
                  {errors.nom?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Middle name</label>
            <div className="border-b-4">
              <div>
                <input
                  name="middle_name"
                  type="texte"
                  placeholder="Type your middle name"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("middle_name", {
                    required: " Please enter your middle name",
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "No bumeric & special character",
                    },
                  })}
                />
              </div>
            </div>
            {errors.middle_name && (
              <span className="text-red-500">
                {errors.middle_name?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">First name</label>
            <div className="border-b-4">
              <div>
                <input
                  name="first_name"
                  type="texte"
                  placeholder="Type your first name"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("first_name", {
                    required: " Please enter your first name",
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "No numeric & special character",
                    },
                  })}
                />
              </div>
            </div>
            {errors.first_name && (
              <span className="text-red-500">{errors.first_name?.message}</span>
            )}
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Address</label>
            <div className="border-b-4">
              <div>
                <input
                  name="address"
                  type="texte"
                  placeholder="Type your address"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("address", {
                    required: " Please enter your adress",
                    pattern: {
                      value: /^[a-zA-Z0-9\s]+$/,
                      message: "No special character",
                    },
                  })}
                />
              </div>
            </div>
            {errors.address && (
              <span className="text-red-500">{errors.address?.message}</span>
            )}
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Phone number</label>
            <div className="border-b-4">
              <div>
                <input
                  name="phone"
                  type="texte"
                  placeholder="Type your phone number"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("phone", {
                    required: " Please enter your phone number",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "No special character",
                    },
                  })}
                />
              </div>
            </div>
            {errors.phone && (
              <span className="text-red-500">{errors.phone?.message}</span>
            )}
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Gender</label>
            <div className="border-b-4">
              <div>
                <input
                  name="gender"
                  type="texte"
                  placeholder="Type your gender"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("gender", {
                    required: " Please enter your gender",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "No special character",
                    },
                  })}
                />
              </div>
            </div>
            {errors.gender && (
              <span className="text-red-500">{errors.gender?.message}</span>
            )}
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Function description</label>
            <div className="border-b-4">
              <div>
                <input
                  name="function"
                  type="texte"
                  placeholder="Type function description"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("function", {
                    required: " Please enter your function",
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "No special character",
                    },
                  })}
                />
              </div>
            </div>
            {errors.function && (
              <span className="text-red-500">{errors.function?.message}</span>
            )}
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Direction description</label>
            <div className="border-b-4">
              <div>
                <input
                  name="direction"
                  type="texte"
                  placeholder="Type direction description"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("direction", {
                    required: " Please enter your direction",
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "No special character",
                    },
                  })}
                />
              </div>
            </div>
            {errors.direction && (
              <span className="text-red-500">{errors.direction?.message}</span>
            )}
          </div>
          <Button
            type="submit"
            value="Save"
            className="bg-[#0c1b33] w-[12.5em] rounded-lg px-4 py-2 font-bold hover:bg-blue-700 text-white mb-4"
          />
        </form>
      </div>
    </>
  );
}
