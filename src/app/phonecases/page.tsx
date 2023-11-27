import Container from "@/components/Container";
import Product from "@/components/Product";
import { getPhoneCases } from "@/helpers";
import React from "react";
import { LuPcCase } from "react-icons/lu";

const page = async () => {
  const products = await getPhoneCases();
  return (
    <>
      <div className="flex justify-center items-center bg-blue-950 mt-16 p-2">
        <p className="text-white font-semibold max-md:text-[12px]">
          Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
        </p>
      </div>
      <div className="bg-[#F1F6F7]  flex items-center justify-center border-b-[1px] border-zinc-400   p-10 ">
        <h2 className="text-blue-950 text-3xl max-md:text-2xl font-bold me-4">
          Phone Cases
        </h2>
        <LuPcCase className="text-3xl max-md:text-2xl text-blue-950" />
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
