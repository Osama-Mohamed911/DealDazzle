"use client";

import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateProps } from "../../../typed";
import { addToCart, deleteFavorite } from "@/redux/proSlice";
import { X } from "lucide-react";
import Image from "next/image";
import FormattedPrice from "../FormattedPrice";

const WishRespon = () => {
  const { favoriteData } = useSelector((state: StateProps) => state.pro);
  const dispatch = useDispatch();
  return (
    <>
      {favoriteData.length > 0 ? (
        <div className="lg:hidden grid grid-col-1 gap-4">
          {favoriteData.map((item: ProductType) => (
            <div className="bg-white shadow rounded-lg p-4" key={item._id}>
              <div className="flex items-center justify-between">
                <X
                  onClick={() => {
                    dispatch(deleteFavorite(item?._id));
                  }}
                  className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                />
                <div className="flex flex-col gap-1 items-center">
                  <Image
                    src={item.image}
                    alt="productImg"
                    width={100}
                    height={100}
                  />
                  <span>{item.title}</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span className=" text-white bg-blue-300 text-sm  p-1">
                    UnitPrice
                  </span>
                  <span>
                    <FormattedPrice amount={item?.price} />
                  </span>
                </div>
                <button
                  className=" underline"
                  onClick={() => {
                    dispatch(addToCart(item)),
                      dispatch(deleteFavorite(item._id));
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default WishRespon;
