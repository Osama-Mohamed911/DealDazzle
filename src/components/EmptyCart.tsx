"use client";

import Link from "next/link";
import React from "react";
import { GiShoppingCart } from "react-icons/gi";
const EmptyCart = () => {
  return (
    <div className="py-20 flex flex-col gap-1 items-center justify-center ">
      <GiShoppingCart className="text-[40px]" />
      <p className="text-lg font-bold ">Your Cart is Empty</p>
      <Link
        href={"/"}
        className="text-sm uppercase font-semibold underline underline-offset-2 hover:text-designColor duration-200 cursor-pointer"
      >
        Go back to Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
