"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Minus, Plus, X } from "lucide-react";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  resetCart,
} from "@/redux/proSlice";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { calculatePercentage } from "@/helpers";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { ProductType, StateProps } from "../../typed";
import BackDrop from "./ui/BackDrop";
import ResetMessage from "./ui/ResetMessage";
import EmptyCart from "./EmptyCart";
import { loadStripe } from "@stripe/stripe-js";
import MobileTable from "./ui/MobileTable";
import screen from "@/assets/screen.png";
const Cart = () => {
  const [totalAmt, setTotalAmt] = useState(0);
  const [rowPrice, setRowPrice] = useState(0);
  const { productData } = useSelector((state: StateProps) => state.pro);
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const openHandelr = () => {
    setIsOpen(true);
  };
  const closeHandelr = () => {
    setIsOpen(false);
  };

  const handleReset = () => {
    dispatch(resetCart());
    router.push("/");
  };

  // Price value
  useEffect(() => {
    let amt = 0;
    let rowAmt = 0;
    productData.map((item: ProductType) => {
      amt += item.price * item.quantity;
      return;
    });
    productData.map((item: ProductType) => {
      rowAmt += item?.previousPrice * item?.quantity;
    });
    setTotalAmt(amt);
    setRowPrice(rowAmt);
  }, [productData]);

  //   Stripe Payment
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch(
      "https://deal-dazzle.vercel.app/api/checkout",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: productData,
          email: session?.user?.email,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      // await dispatch(saveOrder({ order: productData, id: data.id }));
      stripe?.redirectToCheckout({ sessionId: data.id });
      // dispatch(resetCart());
    } else {
      throw new Error("Failed to create Stripe Payment");
    }
  };

  return (
    <>
      {productData.length > 0 ? (
        <div className="mt-5 flex flex-col ">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-md:hidden">
            <table className="w-full text-sm text-left max-md:table-auto">
              <thead className="text-xs text-white  bg-blue-800">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product Information
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    SubTotal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Saving
                  </th>
                </tr>
              </thead>
              {productData.map((item: ProductType) => (
                <tbody key={item?._id}>
                  <tr className="bg-white border-b-[1px] border-b-zinc-300">
                    <th
                      scope="row"
                      className="px-6 py-4 flex items-center gap-3"
                    >
                      <X
                        onClick={() => {
                          dispatch(deleteProduct(item?._id));
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
                    <td className="px-6 py-4 flex items-center gap-4">
                      <span
                        onClick={() => dispatch(decreaseQuantity(item))}
                        className=" p-1 rounded-md bg-designColor cursor-pointer duration-200 inline-flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </span>
                      <span className="font-semibold">{item?.quantity}</span>
                      <span
                        onClick={() => {
                          dispatch(increaseQuantity(item));
                        }}
                        className=" p-1 rounded-md bg-designColor cursor-pointer duration-200 inline-flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <FormattedPrice amount={item?.price * item?.quantity} />
                    </td>
                    <td className="px-6 py-4">
                      <p className="bg-blue-900 w-20 text-sm font-semibold text-center text-white py-1 rounded-md">
                        {calculatePercentage(item?.price, item?.previousPrice)}{" "}
                        %save
                      </p>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <MobileTable />
          <button
            onClick={openHandelr}
            className="bg-designColor text-white w-36 py-3 mt-5 rounded-md border-[1px] border-designColor  text-sm font-semibold hover:bg-transparent hover:text-designColor duration-200"
          >
            Reset Cart
          </button>

          <div className="mt-4 bg-white max-w-xl p-4 flex flex-col gap-1">
            <p className="border-b-[1px] border-b-designColor py-1">
              Cart Summary
            </p>
            <p className="flex items-center justify-between">
              Total Items <span>{productData.length}</span>
            </p>
            <p className="flex items-center justify-between">
              Price{" "}
              <span>
                <FormattedPrice amount={rowPrice} />
              </span>
            </p>
            <p className="flex items-center justify-between">
              Discount{" "}
              <span>
                <FormattedPrice amount={rowPrice - totalAmt} />
              </span>
            </p>
            <p className="flex items-center justify-between">
              Total Price{" "}
              <span>
                <FormattedPrice
                  amount={totalAmt}
                  className="font-semibold text-lg text-designColor"
                />
              </span>
            </p>
            <button
              onClick={handleCheckout}
              className="bg-blue-800 text-zinc-200 my-2 py-2 uppercase text-center rounded-md font-semibold hover:bg-blue-950 hover:text-white duration-200"
            >
              Proceed to Checkout
            </button>
          </div>

          {isOpen && <BackDrop closeHandelr={closeHandelr} />}
          {isOpen && (
            <ResetMessage
              closeHandelr={closeHandelr}
              handleReset={handleReset}
            />
          )}
        </div>
      ) : (
        <EmptyCart />
      )}
      <div className=" bg-blue-300 border-[1px] rounded border-blue-950 flex-col p-8 mt-2">
        <h2 className="text-2xl font-bold mb-2 max-md:text-lg">Note</h2>
        <p className="mb-5">
          Enter the card information as the image shown to test the payment
          after you click on{" "}
          <span className=" font-semibold">
            &apos;Proceed To Check Out&apos;
          </span>
        </p>
        <Image
          src={screen}
          className="text-center m-auto"
          alt="screen"
          width={400}
          height={400}
        />
      </div>
    </>
  );
};

export default Cart;
