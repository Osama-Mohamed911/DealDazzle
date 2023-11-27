"use client";
import Link from "next/link";
import { ProductType, StateProps } from "../../typed";
import Image from "next/image";
import { Heart, ShoppingCart, ExternalLink } from "lucide-react";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart, addTofavorite } from "@/redux/proSlice";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-awesome-reveal";
interface Item {
  products: ProductType[];
}
const Product = ({ products }: Item) => {
  const dispatch = useDispatch();
  const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.pro
  );
  const isFavorite = (productId: any) => {
    return favoriteData.some((favoriteItem) => favoriteItem._id === productId);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
      <Fade duration={2000} triggerOnce={true}>
        {products.map((item) => (
          <div
            key={item._id}
            className="relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-500 duration-300 hover:shadow-xl overflow-hidden"
          >
            <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
              <Image
                src={item.image}
                alt="product image"
                width={500}
                height={500}
                className="w-full h-80 object-contain lg:object-cover group-hover:scale-105 duration-300"
              />
            </Link>
            <Heart
              fill={isFavorite(item._id) ? "#2B72FC" : "transparent"}
              onClick={() => {
                dispatch(addTofavorite(item));
                if (isFavorite(item._id)) {
                  toast.error(`${item.title} Removed from Favorite`);
                } else {
                  toast.success(`${item.title} Added To Favorite`);
                }
              }}
              className="absolute top-4 right-4 text-zinc-500 w-4 h-5 hover:text-black duration-200 cursor-pointer"
            />
            <div className="p-4 bg-zinc-100 group-hover:bg-zinc-50 group-hover:shadow-xl duration-300">
              <p className="font-semibold group-hover:text-designColor duration-300">
                {item.title}
              </p>
              <p>
                <FormattedPrice amount={item.price} />
              </p>
              <div className="my-3 flex items-center justify-between ">
                <button
                  onClick={() => {
                    dispatch(addToCart(item)),
                      toast.success(`${item.title} Added To Cart`);
                  }}
                  className="px-5 py-2 bg-designColor rounded-full text-sm font-semibold hover:bg-transparent duration-300  text-white hover:text-designColor flex items-center gap-2 uppercase border-[1px] border-designColor  "
                >
                  <ShoppingCart className="text-sm h-4 w-4  hover:text-designColor   " />
                  Add
                </button>
                <Link
                  href={{
                    pathname: "/product",
                    query: { _id: item?._id },
                  }}
                >
                  <p className="flex items-center text-sm cursor-pointer gap-1 uppercase font-semibold hover:text-designColor duration-300">
                    Details
                    <ExternalLink className="text-sm h-3 w-3 font-semibold" />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Fade>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </div>
  );
};

export default Product;
