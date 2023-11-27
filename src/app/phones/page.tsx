import Container from "@/components/Container";
import Product from "@/components/Product";
import { getPhones } from "@/helpers";
import React from "react";
import { MdOutlinePhonelinkRing } from "react-icons/md";

const page = async () => {
  const products = await getPhones();
  return (
    <>
      <div className="flex justify-center items-center bg-blue-950 mt-16 p-2">
        <p className="text-white font-semibold max-md:text-[12px]">
          Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
        </p>
      </div>
      <div className="bg-[#F1F6F7]  flex items-center justify-center border-b-[1px] border-zinc-400   p-10 ">
        <h2 className="text-blue-950 text-3xl font-bold me-4 max-md:text-2xl">
          Phones
        </h2>
        <MdOutlinePhonelinkRing className="text-3xl max-md:text-2xl text-blue-950" />
      </div>
      <Container>
        <p className="mt-4 text-zinc-500 font-semibold">
          Showing all {products.length} results
        </p>
        <Product products={products} />
      </Container>
    </>
  );
};

export default page;
