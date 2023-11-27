"use client";
import { addToCart } from "@/redux/proSlice";

import { useDispatch } from "react-redux";

const AddToCart = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(addToCart(product))}
      className="bg-designColor text-white textw-white border-[1px] border-designColor px-6 py-2 font-medium rounded-md hover:bg-transparent hover:text-designColor cursor-pointer duration-200 hover:shadow-lg w-40 my-2"
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
