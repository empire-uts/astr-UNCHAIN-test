import Link from "next/link";
import { Dispatch, FC } from "react";
import { IconType } from "react-icons";

type Props = {
  selectedScreen: string;
  screenName: string;
  setSelectedScreen: Dispatch<React.SetStateAction<string>>;
  icon: IconType;
};

export const BottomLogo: FC<Props> = (props: Props) => {
  return (
    <Link
      onClick={() => {
        props.setSelectedScreen(props.screenName);
      }}
      href={props.screenName}
      className="flex-1 flex items-center justify-center flex-col"
    >
      <props.icon
        className={
          "h-12 w-12 " +
          (props.screenName === props.selectedScreen
            ? "fill-[#0009DC]"
            : "fill-gray-500")
        }
      />
      {props.screenName === props.selectedScreen ? (
        <p className="pb-1 text-[#0009DC]">{props.screenName}</p>
      ) : (
        <></>
      )}
    </Link>
  );
};

export default BottomLogo;
