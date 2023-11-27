import React from "react";
import Container from "./Container";
import Link from "next/link";

import Product from "./Product";
import { getProducts } from "@/helpers";
import Image from "next/image";
import img1 from "@/assets/phone.webp";
import img2 from "@/assets/watch.webp";
import img3 from "@/assets/phoneAcce.webp";
import img4 from "@/assets/accessories.webp";

const Products = async () => {
  const products = await getProducts();
  return (
    <div className="mt-10">
      <Container>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-xl font-semibold">Choose a category</h2>
          <p className="text-lg text-center">
            Explore a featured products with low price
          </p>
          <div className="text-zinc-500 flex items-center lg:justify-center text-center justify-between gap-y-10  lg:gap-10 mt-10 mb-20 flex-wrap px-5 lg:px-0">
            <Link
              href={"/phones"}
              className="flex gap-5 hover:text-designColor  items-center  cursor-pointer max-md:w-[40%] flex-col duration-200"
            >
              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center overflow-hidden ">
                <Image
                  src={img1}
                  alt="title"
                  width={100}
                  className=" object-cover"
                />
              </div>
              <p>Phones</p>
            </Link>

            <Link
              href={"/watches"}
              className="flex gap-5 hover:text-designColor cursor-pointer items-center flex-col  max-md:w-[40%] duration-200"
            >
              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center overflow-hidden">
                <Image
                  src={img2}
                  alt="title"
                  width={120}
                  className=" object-cover"
                />
              </div>
              <p>Watches</p>
            </Link>

            <Link
              href={"/phonecases"}
              className="flex gap-5 hover:text-designColor cursor-pointer items-center flex-col  max-md:w-[40%]  duration-200"
            >
              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center overflow-hidden">
                <Image
                  src={img3}
                  alt="title"
                  width={120}
                  className=" object-cover"
                />
              </div>
              <p>Phone Case</p>
            </Link>

            <Link
              href={"/accessories"}
              className="flex gap-5 hover:text-designColor cursor-pointer  items-center flex-col  max-md:w-[40%] duration-200"
            >
              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
                <Image
                  src={img4}
                  alt="title"
                  width={100}
                  className=" object-cover"
                />
              </div>
              <p>Accessories</p>
            </Link>
          </div>
        </div>
        <Product products={products} />
      </Container>
    </div>
  );
};

export default Products;
