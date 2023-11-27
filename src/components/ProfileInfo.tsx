"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const ProfileInfo = () => {
  const { data: session } = useSession();
  return (
    <div className="pb-5">
      <div className="flex items-center gap-4">
        <Image
          src={session?.user?.image!}
          alt="user image"
          width={500}
          height={500}
          className="w-20 h-20 object-cover rounded-full"
        />
        <div>
          <h2>{session?.user?.name}</h2>
          <h2>{session?.user?.email}</h2>
        </div>
      </div>
      <button
        onClick={() => signOut()}
        className="bg-designColor text-white px-8 py-3 border-[1px] border-designColor font-semibold mt-10 hover:bg-transparent hover:text-designColor duration-300 rounded-sm"
      >
        Signout
      </button>
    </div>
  );
};

export default ProfileInfo;
