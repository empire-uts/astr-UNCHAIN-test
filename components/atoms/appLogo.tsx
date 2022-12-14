import Image from "next/image";
import type { FC } from "react";

const AppLogo: FC = () => {
  return (
    <div className="flex-row flex items-center ml-[30px]">
      <Image
        className="w-[70px] h-[70px]"
        src="/unchain_logo.png"
        alt="unchain_logo"
        width={30}
        height={30}
      />
      <Image
        className="w-[40px] h-[25px]"
        src="/cross_mark_2_logo-removebg.png"
        alt="cross_logo"
        width={30}
        height={30}
      />
      <Image
        className="w-[70px] h-[70px]"
        src="/Astar_logo.png"
        alt="astar_logo"
        width={30}
        height={30}
      />
    </div>
  );
};

export default AppLogo;