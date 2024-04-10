import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  const pathname = usePathname();
  return (
    <>
      <MenuItem currentRoute={pathname!} title={"Home"} route={"/"} />
      <MenuItem currentRoute={pathname!} title={"Payment Methods"} route={"/"} />
      <MenuItem currentRoute={pathname!} title={"Orders"} route={"/"} />
      <MenuItem currentRoute={pathname!} title={"Labs"} route={"/"} />
    </>
  );
};

export default MenuItems;
