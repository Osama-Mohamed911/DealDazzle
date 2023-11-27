import Container from "@/components/Container";
import WishLish from "@/components/WishLish";

const page = () => {
  return (
    <Container>
      <div className="text-center bg-slate-200 border-[1px] rounded-full overflow-hidden border-zinc-400 mt-10 flex justify-between  items-center   ">
        <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 w-[60%] max-md:w-[50%] h-14 transfom -skew-x-12" />
        <p className="text-[20px] text-blue-950 font-bold me-10 max-md:text-base ">
          My Wishlist
        </p>
      </div>
      <WishLish />
    </Container>
  );
};

export default page;
