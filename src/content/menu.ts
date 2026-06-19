import type { MenuCategory, MenuDownloadGroup, MenuDownloadItem } from "./types";
import { locations } from "./locations";
import { menuPdfFiles, sharedFoodMenus } from "./menuPdfs";

export const menuCategories: MenuCategory[] = [
  {
    id: "dim-sum",
    titleEn: "Dim Sum",
    titleZh: "点心",
    items: [
      { nameEn: "Har Gow", nameZh: "虾饺" },
      { nameEn: "Siu Mai", nameZh: "烧卖" },
      { nameEn: "Xiao Long Bao", nameZh: "小笼包" },
      { nameEn: "Char Siu Bao", nameZh: "叉烧包" },
      { nameEn: "Cheung Fun", nameZh: "肠粉" },
      { nameEn: "Turnip Cake", nameZh: "萝卜糕" },
      { nameEn: "Steamed Matsutake Mushroom Bun", nameZh: "松茸菇包" },
      { nameEn: "Crystal Har Gau", nameZh: "水晶虾饺" },
      { nameEn: "Black Garlic Siu Mai", nameZh: "黑蒜烧卖" },
      { nameEn: "Baked Barbecued Pork Puff", nameZh: "叉烧酥" },
      { nameEn: "Pan-Fried Turnip Cake", nameZh: "香煎萝卜糕" },
      { nameEn: "Wild Mushroom & Beetroot Dumpling", nameZh: "野菌甜菜饺" },
    ],
  },
  {
    id: "roast-duck",
    titleEn: "Roast Duck",
    titleZh: "烧鸭",
    items: [
      { nameEn: "Whole Roast Duck", nameZh: "烧鸭" },
      { nameEn: "Roast Duck Rice", nameZh: "烧鸭饭" },
      { nameEn: "Roast Duck Noodles", nameZh: "烧鸭面" },
      { nameEn: "Roast Duck & Pickled Ginger", nameZh: "烧鸭拼子姜" },
    ],
  },
  {
    id: "chef-specials",
    titleEn: "Chef Specials",
    titleZh: "招牌菜",
    items: [
      { nameEn: "Daily Chef Specials", nameZh: "每日招牌" },
      { nameEn: "Seasonal Specials", nameZh: "时令特色" },
      { nameEn: "Claypot Rice", nameZh: "煲仔饭" },
      { nameEn: "Steamed Fish", nameZh: "清蒸鱼" },
    ],
  },
  {
    id: "drinks",
    titleEn: "Drinks & Tea",
    titleZh: "饮品与茶",
    items: [
      { nameEn: "House-Blend Teas", nameZh: "特调茶" },
      { nameEn: "Jasmine Tea", nameZh: "茉莉花茶" },
      { nameEn: "Pu-erh Tea", nameZh: "普洱茶" },
      { nameEn: "Soft Drinks", nameZh: "软饮" },
      { nameEn: "Beer", nameZh: "啤酒" },
      { nameEn: "Wine", nameZh: "葡萄酒" },
    ],
  },
];

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
