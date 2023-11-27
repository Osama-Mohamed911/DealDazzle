"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ShoppingBag } from "lucide-react";
import { navigation } from "@/constants/data";
import { signIn, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { StateProps } from "../../typed";

const Navbar = () => {
  const PathName = usePathname();
  const { data: session } = useSession();
  const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.pro
  );

  return (
    <div className="lg:w-full w-screen h-16 top-0 left-0 right-0 border-b-[1px] border-b-zinc-500  text-zinc-600 fixed z-50  bg-white/80 backdrop-blur-2xl">
      <div className="max-w-screen-lg mx-auto h-full flex items-center justify-between px-4 lg:px-0">
        {/* logo */}
        <Logo />
        {/* nav */}
        <ul className="hidden md:flex items-center gap-5 text-sm font-medium">
          {navigation.map((item) => (
            <Link href={item.href} key={item._id}>
              <li
                className={`hover:text-black cursor-pointer duration-200  ${
                  item.href === PathName && "text-designColor"
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        {/* icons */}
        <div className="flex items-center gap-x-5">
          <Link
            href={"/wishlist"}
            className="hover:text-black cursor-pointer duration-200 relative group"
          >
            <Heart className="w-6 h-6" />
            <span className="absolute -top-2 -left-2 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white">
              {favoriteData ? favoriteData.length : 0}
            </span>
          </Link>
          <Link
            href={"/cart"}
            className="hover:text-black cursor-pointer duration-200 relative group"
          >
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-2 -left-2 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white">
              {productData ? productData.length : 0}
            </span>
          </Link>
          {session ? (
            <Link href={"/profile"} className="login">
              Profile
            </Link>
          ) : (
            <button onClick={() => signIn()} className="login">
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
