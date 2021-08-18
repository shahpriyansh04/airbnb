import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80 hover:shadow-lg ">
        <Image src={img} layout="fill" className="rounded-xl"            placeholder="blur"
 />
      </div>
      <h3 className="text-2xl mt-3 text-center dark:text-dark-text">{title}</h3>
    </div>
  );
}

export default MediumCard;
