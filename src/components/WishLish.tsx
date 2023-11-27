"use client";

import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateProps } from "../../typed";
import { X } from "lucide-react";
import {
  addToCart,
  deleteFavorite,
  deleteProduct,
  resetFavorite,
} from "@/redux/proSlice";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import EmptyWish from "./EmptyWish";
import WishRespon from "./ui/WishRespon";

const WishLish = () => {
  const { favoriteData } = useSelector((state: StateProps) => state.pro);
  const dispatch = useDispatch();
  return (
    <div>
      {favoriteData.length > 0 ? (
        <div className="mt-5 flex flex-col">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-md:hidden">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white  bg-blue-800">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product Information
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit Price
                  </th>

                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              {favoriteData.map((item: ProductType) => (
                <tbody key={item?._id}>
                  <tr className="bg-white border-b-[1px] border-b-zinc-300">
                    <th
                      scope="row"
                      className="px-6 py-4 flex items-center gap-3"
                    >
                      <X
                        onClick={() => {
                          dispatch(deleteFavorite(item?._id));
                        }}
                        className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                      />
                      <Image
                        src={item?.image}
                        alt="proudct image"
                        width={500}
                        height={500}
                        className="w-24 object-contain"
                      />
                      <p className="text-base font-medium text-black">
                        {item?.title}
                      </p>
                    </th>
                    <td className="px-6 py-4">
                      <FormattedPrice amount={item?.price} />
                    </td>

                    <td className="px-6 py-4">
                      {" "}
                      <button
                        className="px-4 py-3 rounded bg-designColor text-white border-[1px] border-designColor hover:bg-transparent hover:text-designColor duration-300"
                        onClick={() => {
                          dispatch(addToCart(item)),
                            dispatch(deleteFavorite(item._id));
                        }}
                      >
                        Add To Cart
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <WishRespon />
          <button
            onClick={() => dispatch(resetFavorite())}
            className="bg-designColor text-white w-36 py-3 mt-5 rounded-md border-[1px] border-designColor  text-sm font-semibold hover:bg-transparent hover:text-designColor duration-200"
          >
            Reset Wishlist
          </button>
        </div>
      ) : (
        <EmptyWish />
      )}
    </div>
  );
};

export default WishLish;
