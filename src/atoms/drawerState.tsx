import { atom } from "recoil";

export const drawerState = (atomName?: string) =>
  atom({
    key: atomName || "drawerStateAtom",
    default: false,
  });
