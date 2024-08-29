import Image from "next/image";
import React from "react";
interface Profilepic {
  userimage: string;
}
const Profilepicture = ({ userimage }: Profilepic) => {
  return (
    <div className="relative max-w-[400px] max-h-[400px] rounded-full overflow-hidden">
      <Image
        src={userimage}
        alt="user"
        width={400}
        height={400}
        className="w-full h-full"
      />
    </div>
  );
};

export default Profilepicture;
