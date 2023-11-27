import { Trash2 } from "lucide-react";
import React from "react";

const ResetMessage = ({ handleReset, closeHandelr }: any) => {
  return (
    <div className="m-auto z-10 absolute transform translate-x-[-50%] translate-y-[-50%] bg-white px-12 py-8 left-[50%] top-[50%] rounded shadow shadow-zinc-500">
      <div className="mb-8 flex items-center justify-center ">
        <Trash2 className=" w-10 h-10" />
      </div>

      <p className="mb-8 max-md:text-sm max-md:text-center">
        Are you sure you want to reset your cart ?
      </p>
      <div className="flex justify-evenly  max-md:gap-10">
        <button
          onClick={handleReset}
          className="py-3 px-4 rounded bg-black text-white hover:bg-designColor hover:text-black duration-300"
        >
          Confirm
        </button>
        <button
          onClick={closeHandelr}
          className="py-3 px-4 rounded bg-black text-white hover:bg-designColor hover:text-black duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ResetMessage;
