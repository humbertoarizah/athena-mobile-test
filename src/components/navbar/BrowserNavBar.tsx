import { drawerState } from "@/atoms/drawerState";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import MenuItems from "./MenuItems";

const BrowserNavBar = () => {
  const [isOpen, setOpen] = useRecoilState(drawerState("drawerStateAtom"));
  const { push } = useRouter();

  return (
    <div className="bg-primary text-white px-5 md:px-14 py-2 inline-flex justify-between shadow-lg w-full items-center">
      <div className="inline-flex gap-10 items-center">
        <Image src="/logo_blanco.svg" alt={""} width={200} height={45} />
        <div className="hidden md:inline-flex gap-10 items-center">
          <MenuItems />
        </div>
      </div>
      <div className="md:hidden">
        <IconButton size="small" onClick={() => setOpen(true)}>
          <MenuIcon className="text-light_white" />
        </IconButton>
      </div>
      <div className="hidden lg:inline-flex gap-4">
        <Button
          type="submit"
          variant="contained"
          className="!font-thin !text-xs"
          onClick={() => push("/")}
        >
          Start Now
        </Button>
      </div>
    </div>
  );
};

export default BrowserNavBar;
