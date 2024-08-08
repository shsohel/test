/** @format */

import Image from "next/image";

const ClipImage = () => {
  return (
    <div className="relative w-[200px] h-[200px]">
      <Image
        className="absolute top-0 left-0"
        src="/svg.svg"
        width={500}
        height={500}
        alt="clip"
      />
      <div className="p-3 absolute top-0 left-0 w-full h-full">
        <Image
          className=" object-left-top object-cover w-full h-full  clip-path "
          src="/user.png"
          width={500}
          height={500}
          alt="clip"
        />
      </div>
    </div>
  );
};

export default ClipImage;
