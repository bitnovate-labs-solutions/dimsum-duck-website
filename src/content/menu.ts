import type { MenuDownloadGroup } from "./types";
import { locations } from "./locations";
import { menuPdfFiles, sharedFoodMenus } from "./menuPdfs";

export { menuTabs } from "./menuItems";

const kingsCross = locations.find((location) => location.slug === "kings-cross-road")!;
const pentonville = locations.find((location) => location.slug === "pentonville-road")!;

export const menuExploreSection = {
  kickerEn: "Explore our menus",
  kickerZh: "浏览菜单",
  regionEn: "United Kingdom",
  regionZh: "英国",
  wineExclusiveNote:
    "Our dedicated wine list is exclusive to Dim Sum Duck Pentonville Road.",
  wineExclusiveNoteZh: "专属酒单仅在彭顿维尔路店提供。",
};

export const menuDownloadGroups = [
  {
    id: "food-menus",
    variant: "food",
    titleEn: "Food Menus",
    titleZh: "餐牌",
    items: sharedFoodMenus,
  },
  {
    id: "kings-cross-road",
    variant: "location",
    image: kingsCross.heroImage,
    imageLabel: "KING'S CROSS ROAD MENUS",
    titleEn: kingsCross.name,
    titleZh: kingsCross.nameChinese,
    address: kingsCross.address.toUpperCase(),
    items: [
      {
        id: "drinks-desserts-kings-cross",
        labelEn: "Drinks & Desserts",
        file: menuPdfFiles.drinksKingsCross,
      },
    ],
  },
  {
    id: "pentonville-road",
    variant: "location",
    image: pentonville.heroImage,
    imageLabel: "PENTONVILLE ROAD MENUS",
    titleEn: pentonville.name,
    titleZh: pentonville.nameChinese,
    address: pentonville.address.toUpperCase(),
    showWineNote: true,
    items: [
      {
        id: "drinks-desserts-pentonville",
        labelEn: "Drinks & Desserts",
        file: menuPdfFiles.drinksPentonville,
      },
      {
        id: "wine-list",
        labelEn: "Wine List",
        file: menuPdfFiles.winePentonville,
        exclusive: true,
      },
    ],
  },
] satisfies MenuDownloadGroup[];
