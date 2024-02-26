import { useForm } from "react-hook-form";
import Button from "../authentication/button";
import { useData } from "../../hooks/useData";
import axios from "axios";

export default function LeaveRequest() {
  const { setPlanningData, planningData, token } = useData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const leave = {
      nom: data.nom,
      libelle: data.libelle,
      libelle_motif: data.libelle_motif,
    };

    // Sending data from user to api
    axios
      .post("http://localhost:8000/api/conge/create", leave, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setPlanningData([...planningData, response.data.leave]);
        // Reset form
        reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="max-w-[25em] my-[5em] mx-auto bg-[#9dc3cc] min-h-[30em] rounded-lg">
        <h1 className="text-center text-3xl pt-4 font-bold">Leave request</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center pt-10 "
        >
          <div className="flex flex-col pb-10">
            <label className="font-bold">Name agent</label>
            <div className="border-b-4">
              <div>
                <input
                  name="nom"
                  type="texte"
                  placeholder="Type your name"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("nom", {
                    required: " Please enter your name",
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
            <label className="font-bold">Duration</label>
            <div className="border-b-4">
              <div>
                <input
                  name="libelle"
                  type="texte"
                  placeholder="Type your duration"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("libelle", {
                    required: " Please enter your duration",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "No character",
                    },
                  })}
                />
              </div>
            </div>
            {errors.libelle && (
              <span className="text-red-500">{errors.libelle?.message}</span>
            )}
          </div>
          <div className="flex flex-col pb-5">
            <label className="font-bold">Reason</label>
            <div className="border-b-4">
              <div>
                <input
                  name="libelle_motif"
                  type="texte"
                  placeholder="Type your reason"
                  className="w-full pl-10 text-black placeholder-black-500 outline-none border-0 rounded-lg px-4 py-2 bg-transparent"
                  {...register("libelle_motif", {
                    required: " Please enter your reason",
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "No special character",
                    },
                  })}
                />
              </div>
            </div>
            {errors.libelle_motif && (
              <span className="text-red-500">
                {errors.libelle_motif?.message}
              </span>
            )}
          </div>
          <Button
            type="submit"
            value="Request"
            className="bg-[#0c1b33] w-[12.5em] rounded-lg px-4 py-2 font-bold hover:bg-blue-700 text-white mb-4"
          />
        </form>
      </div>
    </>
  );
}

