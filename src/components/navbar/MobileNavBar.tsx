import { drawerState } from "@/atoms/drawerState";
import { Capacitor } from "@capacitor/core";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
const MobileNavBar = ({
  isHome,
  allowBack,
  customRoute,
  title,
}: {
  isHome: boolean;
  title: string;
  customRoute?: string;
  allowBack: boolean;
}) => {
  const [, setOpen] = useRecoilState(drawerState("drawerStateAtom"));
  const { back, push } = useRouter();

  return (
    <>
      <div
        className={`min-h-14 bg-primary inline-flex px-5 py-5 items-center justify-center relative w-full shadow-md ${
          Capacitor.isNativePlatform() && "pt-14"
        }`}
      >
        {isHome ? (
          <div className="absolute left-5">
            <IconButton
              size="small"
              onClick={() => {
                setOpen(true);
              }}
            >
              <MenuIcon className="text-light_white" />
            </IconButton>
          </div>
        ) : allowBack ? (
          <div className="absolute left-5">
            <IconButton
              size="small"
              onClick={() => (customRoute ? push(customRoute) : back())}
            >
              <ChevronLeftIcon className="text-light_white" />
            </IconButton>
          </div>
        ) : (
          <></>
        )}
        <h1 className="text-xl font-bold text-light_white">{title}</h1>
        {/* {isHome && (
          <div className="absolute right-5">
            <IconButton
              size="small"
              onClick={() => push(RoutesEnum.REQUEST_PREV)}
            >
              <MonetizationOnIcon className="text-light_white" />
            </IconButton>
          </div>
        )} */}
      </div>
    </>
  );
};

export default MobileNavBar;
