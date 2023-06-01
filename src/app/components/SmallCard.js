import Image from "next/image";
function SmallCard({ img, distance, location }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className=" relative h-16 w-16">
       <img src={img}  className=" rounded-lg h-full" />
      </div>
      <div className="">
        <h2 className=" text-sm font-semibold">{location}</h2>
        <h3 className=" text-gray-500 text-sm">{distance}</h3>
      </div>
    </div>
  );
}
export default SmallCard;
