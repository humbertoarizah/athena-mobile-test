import { drawerState } from "@/atoms/drawerState";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Button, SwipeableDrawer } from "@mui/material";
import Image from "next/image";
import { useRecoilState } from "recoil";
import MenuItems from "./navbar/MenuItems";

const Drawer = () => {
  const [isOpen, setOpen] = useRecoilState(drawerState("drawerStateAtom"));
  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(false)}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => setOpen(false)}
        onKeyDown={() => setOpen(false)}
        className="bg-primary min-h-full justify-between inline-flex flex-col p-5"
      >
        <div className="inline-flex gap-5 items-start flex-col mt-20 text-white">
          <Image src="/logo_blanco.svg" alt={""} width={200} height={45} />
          <MenuItems />
        </div>
        <div className="w-full inline-flex justify-center items-center p-3">
          <Button
            variant="outlined"
            startIcon={<LogoutIcon className="text-dark_white" />}
            onClick={() => console.log("object")}
          >
            Cerrar sesión
          </Button>
        </div>
      </Box>
    </SwipeableDrawer>
  );
};

export default Drawer;
