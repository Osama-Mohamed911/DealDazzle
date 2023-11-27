"use client";

import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateProps } from "../../../typed";
import { Minus, Plus, X } from "lucide-react";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/redux/proSlice";
import Image from "next/image";
import FormattedPrice from "../FormattedPrice";

const MobileTable = () => {
  const { productData } = useSelector((state: StateProps) => state.pro);
  const dispatch = useDispatch();

  return (
    <>
      {productData.length > 0 ? (
        <div className="lg:hidden grid grid-col-1 gap-4">
          {productData.map((item: ProductType) => (
            <div className="bg-white shadow rounded-lg p-4" key={item._id}>
              <div className="flex items-center justify-between">
                <X
                  onClick={() => {
                    dispatch(deleteProduct(item?._id));
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

                <div className="flex items-center gap-1">
                  <span
                    onClick={() => dispatch(decreaseQuantity(item))}
                    className=" p-1 rounded-md text-designColor cursor-pointer duration-200 inline-flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </span>
                  <span className="font-semibold">{item?.quantity}</span>
                  <span
                    onClick={() => {
                      dispatch(increaseQuantity(item));
                    }}
                    className=" p-1 rounded-md text-designColor cursor-pointer duration-200 inline-flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </div>
                <div className="">
                  <div className="flex flex-col items-center gap-1">
                    <span className=" text-white bg-blue-300 text-sm  p-1">
                      UnitPrice
                    </span>
                    <span>
                      <FormattedPrice amount={item?.price} />
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className=" text-white bg-blue-300 text-sm  p-1">
                      SubPrice
                    </span>
                    <span>
                      <FormattedPrice amount={item?.price * item?.quantity} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default MobileTable;
