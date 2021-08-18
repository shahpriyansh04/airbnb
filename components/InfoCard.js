import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div
      className="flex flex-col shadow-md  justify-center md:shadow-none mb-4 md:mb-0 last:mb-6 border-2 rounded-lg md:border-0 md:rounded-none sm:flex-row py-6 px-2 border-b cursor-pointer pr-4 hover:opacity-80 
    hover:shadow-lg transition duration-200 ease-out first:border-t"
    >
      <div className="relative h-40 w-72 mx-auto ml-3 md:ml-0 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          placeholder="blur"

          objectFit="cover"
          className="rounded-none md:rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow mt-6 sm:mt-0 sm:pl-5">
        <div className="flex justify-between dark:text-dark-text">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl dark:text-dark-text">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow dark:text-dark-text">
          {description}
        </p>
        <div className="flex justify-between  items-end pt-5 dark:text-dark-text">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
