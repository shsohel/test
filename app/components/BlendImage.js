/** @format */

import Image from "next/image";

const BlendImage = () => {
  return (
    <div className=" w-[200px] h-[200px]">
      {/* <Image
        className="absolute top-0 left-0"
        src="/svg.svg"
        width={500}
        height={500}
        alt="clip"
      /> */}
      <div className="p-3 relative top-0 left-0 w-full h-full">
        <Image
          className=" h-[180px] object-left-top object-cover w-full  absolute "
          src="/my-passport-photo.jpg"
          width={500}
          height={500}
          alt="clip"
        />
        <Image
          className="absolute object-left-top mix-blend-multiply object-cover "
          src="/svg.svg"
          width={500}
          height={500}
          alt="clip"
        />
      </div>
    </div>
  );
};

export default BlendImage;
