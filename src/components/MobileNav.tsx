"use client";

import { IoHomeOutline, IoBagHandleOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { LuPcCase } from "react-icons/lu";
import { TiWatch } from "react-icons/ti";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div>
      <ul className="hidden max-md:flex max-md:items-center justify-between text-sm font-medium bg-white py-6 px-4 fixed w-screen bottom-0 left-0 right-0 border-t-[1px] border-zinc-950">
        <Link href={"/"}>
          <li className="flex items-center justify-center flex-col gap-2 text-sm ">
            <IoHomeOutline className="text-2xl" />
          </li>
        </Link>
        <Link href={"/phones"}>
          <li className="flex items-center justify-center flex-col gap-2 text-sm ">
            <MdOutlinePhoneIphone className="text-2xl" />
          </li>
        </Link>
        <Link href={"/phonecases"}>
          <li className="flex items-center justify-center flex-col gap-2 text-sm ">
            <LuPcCase className="text-2xl" />
          </li>
        </Link>
        <Link href={"/watches"}>
          <li className="flex items-center justify-center flex-col gap-2 text-sm ">
            <TiWatch className="text-2xl" />
          </li>
        </Link>
        <Link href={"/accessories"}>
          <li className="flex items-center justify-center flex-col gap-2 text-sm">
            <IoBagHandleOutline className="text-2xl" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MobileNav;
