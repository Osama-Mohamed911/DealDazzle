import React from "react";
import { CiHeart } from "react-icons/ci";
const EmptyWish = () => {
  return (
    <div className="py-20 flex flex-col gap-1 items-center justify-center ">
      <CiHeart className="text-[40px]" />
      <p className="text-lg font-bold mb-2">Your Whishlist is Empty</p>
      <p className="text-zinc-700">Start saving your favorite products.</p>
    </div>
  );
};

export default EmptyWish;
