import Cart from "@/components/Cart";
import Container from "@/components/Container";

import React from "react";

const page = () => {
  return (
    <Container>
      <div className="text-center bg-slate-200 border-[1px] rounded-full overflow-hidden border-zinc-400 mt-10 flex justify-between  items-center   ">
        <div className=" bg-gradient-to-r from-sky-500 to-indigo-500 w-[60%] max-md:w-[50%] h-14 transfom -skew-x-12" />

        <p className="text-[20px] text-blue-950 font-bold me-10 max-md:text-base ">
          Shopping Cart
        </p>
      </div>
      <Cart />
    </Container>
  );
};

export default page;
