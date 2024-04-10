import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  const pathname = usePathname();
  return (
    <>
      <MenuItem currentRoute={pathname!} title={"Inicio"} route={"/"} />
      <MenuItem currentRoute={pathname!} title={"Medios de pago"} route={"/"} />
      <MenuItem currentRoute={pathname!} title={"Ordenes"} route={"/"} />
      <MenuItem currentRoute={pathname!} title={"Solicitudes"} route={"/"} />
    </>
  );
};

export default MenuItems;
