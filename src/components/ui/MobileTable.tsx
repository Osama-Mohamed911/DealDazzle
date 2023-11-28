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
        <div className="md:hidden grid grid-col-1 gap-4">
          {productData.map((item: ProductType) => (
            <div className="bg-white shadow rounded-lg p-4" key={item._id}>
              <div className="bg-blue-950 text-center rounded p-1 mb-2">
                <span className="  text-white ">{item.title}</span>
              </div>

              <div className="flex items-center justify-between">
                <X
                  onClick={() => {
                    dispatch(deleteProduct(item?._id));
                  }}
                  className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                />
                <Image
                  src={item.image}
                  alt="productImg"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center flex-col gap-3 ">
                    <div className="flex  items-center gap-1">
                      <span className=" text-blue-600 font-semibold  uppercase  rounded-full text-sm  p-1">
                        UnitPrice :
                      </span>
                      <span>
                        <FormattedPrice amount={item?.price} />
                      </span>
                    </div>
                    <div className="flex  items-center gap-1">
                      <span className=" text-blue-600 font-semibold uppercase rounded-full text-sm  p-1">
                        SubPrice :
                      </span>
                      <span>
                        <FormattedPrice amount={item?.price * item?.quantity} />
                      </span>
                    </div>
                  </div>
                  <div className="flex  items-center gap-2">
                    <span
                      onClick={() => dispatch(decreaseQuantity(item))}
                      className=" p-1 rounded-md bg-designColor text-designColor cursor-pointer duration-200 inline-flex items-center justify-center"
                    >
                      <Minus className="w-4 h-4 text-white" />
                    </span>
                    <span className="font-semibold">{item?.quantity}</span>
                    <span
                      onClick={() => {
                        dispatch(increaseQuantity(item));
                      }}
                      className=" p-1 rounded-md bg-designColor text-designColor cursor-pointer duration-200 inline-flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4 text-white" />
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
