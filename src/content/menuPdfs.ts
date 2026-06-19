import type { MenuDownloadItem } from "./types";

/** PDFs in public/menus — single source of truth for file paths. */
export const menuPdfFiles = {
  fullMenu: "/menus/full menu.pdf",
  dimSum: "/menus/menu - dimsum.pdf",
  riceNoodlesSpecials:
    "/menus/menu - rice dishes, noodles, specials, bbq dishes.pdf",
  drinksKingsCross: "/menus/drinks and desserts - 124.pdf",
  drinksPentonville: "/menus/drinks and deserts - 186.pdf",
  winePentonville: "/menus/wine list - 186.pdf",
} as const;

export const sharedFoodMenus = [
  {
    id: "full-menu",
    labelEn: "Full Menu",
    file: menuPdfFiles.fullMenu,
  },
  {
    id: "dim-sum",
    labelEn: "Dim Sum",
    file: menuPdfFiles.dimSum,
  },
  {
    id: "rice-noodles-specials",
    labelEn: "Rice, Noodles & BBQ",
    file: menuPdfFiles.riceNoodlesSpecials,
  },
] satisfies MenuDownloadItem[];
