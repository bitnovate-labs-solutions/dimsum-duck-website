import type { MenuCategory, MenuTab } from "./types";

const dimSumCategories: MenuCategory[] = [
  {
    id: "steamed-dim-sum",
    titleEn: "Steamed Dim Sum",
    titleZh: "蒸点",
    items: [
      { nameZh: "笋尖虾饺", nameEn: "Prawn Dumpling" },
      { nameZh: "鲜虾韭菜饺", nameEn: "Prawn with Chives Dumpling" },
      { nameZh: "干蒸烧卖", nameEn: "Pork & Prawn Dumpling" },
      { nameZh: "上海小笼包", nameEn: "Shanghai Pork Dumpling" },
      { nameZh: "红油饺子", nameEn: "Pork Dumpling in Chili Oil Sauce" },
      { nameZh: "红油素饺子", nameEn: "Vegetarian Dumpling in Chili Oil Sauce" },
      { nameZh: "蜜汁叉烧包", nameEn: "Roast Pork Bun" },
      { nameZh: "点都得流沙包", nameEn: "Salted Egg Yolk Bun" },
      { nameZh: "香滑奶黄包", nameEn: "Steam Custard Bun" },
      { nameZh: "糯米鸡", nameEn: "Glutinous Rice Wrap with Lotus Leaves" },
      { nameZh: "豉汁蒸排骨", nameEn: "Spare Ribs in Black Bean Sauce" },
      { nameZh: "豉汁凤爪", nameEn: "Chicken Claws in Black Bean Sauce" },
      {
        nameZh: "豉汁排骨凤爪饭",
        nameEn: "Chicken Claws & Spare Ribs in Black Bean Sauce Rice Pot",
      },
      {
        nameZh: "豉汁排骨饭",
        nameEn: "Spare Ribs in Black Bean Sauce Rice Pot",
      },
    ],
  },
  {
    id: "fried-grilled-dim-sum",
    titleEn: "Fried / Grilled Dim Sum",
    titleZh: "煎炸",
    items: [
      { nameZh: "生煎栗子鸭包", nameEn: "Pan Fried Duck with Chestnuts Bun" },
      { nameZh: "芝麻纸包虾", nameEn: "Sesame Prawn Wrap with Rice Paper" },
      { nameZh: "蒜香虾春卷", nameEn: "Garlic Prawn Crispy Spring Roll" },
      { nameZh: "斋春卷", nameEn: "Vegetarian Crispy Spring Roll" },
      { nameZh: "椒盐豆腐", nameEn: "Salt & Pepper Tofu" },
      { nameZh: "生煎素锅贴", nameEn: "Grilled Vegetarian Dumpling" },
      { nameZh: "椒盐排骨", nameEn: "Salt & Pepper Spare Ribs" },
      { nameZh: "椒盐鸡翼", nameEn: "Salt & Pepper Chicken Wings" },
      { nameZh: "椒盐吹筒", nameEn: "Salt & Pepper Squid" },
      { nameZh: "生煎锅贴", nameEn: "Grilled Pork Dumpling" },
      {
        nameZh: "沙律明虾角",
        nameEn: "Deep Fried Prawn Dumplings with Salad Cream",
      },
      { nameZh: "萝卜糕", nameEn: "Turnip Cake with Cured Meats" },
      { nameZh: "鲜虾腐皮卷", nameEn: "Bean Curd Skin Prawn Roll" },
    ],
  },
  {
    id: "cheung-fun",
    titleEn: "Cheung Fun",
    titleZh: "肠粉",
    items: [
      { nameZh: "鲜虾肠粉", nameEn: "Prawn Cheung Fun" },
      { nameZh: "叉烧肠粉", nameEn: "Roast Pork Cheung Fun" },
      { nameZh: "素肠粉", nameEn: "Plain Cheung Fun" },
      { nameZh: "牛肉肠粉", nameEn: "Beef Cheung Fun" },
      { nameZh: "海鲜腐皮肠粉", nameEn: "Bean Curd Skin Prawn Cheung Fun" },
      { nameZh: "葱花炸两", nameEn: "Deep Fried Dough Stick Cheung Fun" },
    ],
  },
  {
    id: "soup",
    titleEn: "Soup",
    titleZh: "汤",
    items: [
      {
        nameZh: "西洋菜排骨炖汤",
        nameEn: "Slow Stew Pork Ribs with Watercress Soup",
      },
      { nameZh: "淮山杞子鸡汤", nameEn: "Slow Stew Chicken Soup" },
      { nameZh: "四川酸辣汤", nameEn: "Hot & Sour Soup" },
      { nameZh: "豆腐粟米羹", nameEn: "Tofu (Beancurd) Sweetcorn Soup" },
      { nameZh: "港式云吞汤", nameEn: "Won Ton in Soup" },
      { nameZh: "什菜汤", nameEn: "Mixed Vegetables Soup" },
    ],
  },
];

/** Matches printed menu section 汤麵/汤河/汤米/汤米線 */
const noodleHoFunVermicelliSoupCategory: MenuCategory = {
  id: "noodle-ho-fun-vermicelli-soup",
  titleEn: "Noodle/Ho Fun/Vermicelli in Soup",
  titleZh: "汤面/汤河/汤米/汤米线",
  items: [
    { nameZh: "明炉烧鸭汤面", nameEn: "BBQ Roast Duck Noodle Soup" },
    { nameZh: "蜜汁叉烧汤面", nameEn: "Honey Roast Pork Noodle Soup" },
    { nameZh: "港式云吞汤面", nameEn: "Won Ton Noodle Soup" },
    { nameZh: "牛腩汤面", nameEn: "Beef Brisket Noodle Soup" },
  ],
};

/** Matches printed menu section 粥/粉/面/饭 — item order follows the original menu */
const riceNoodleHoFunCongeeCategory: MenuCategory = {
  id: "rice-noodle-ho-fun-congee",
  titleEn: "Rice/Noodle/Ho Fun/Congee",
  titleZh: "粥/粉/面/饭",
  items: [
    { nameZh: "明炉烧鸭饭", nameEn: "BBQ Roast Duck on Rice" },
    { nameZh: "蜜汁叉烧饭", nameEn: "BBQ Roast Pork on Rice" },
    { nameZh: "双拼烧味饭", nameEn: "2 Kinds BBQ Meat on Rice" },
    {
      nameZh: "黑椒猪扒饭",
      nameEn: "Pork Chop in Black Pepper Sauce on Rice",
    },
    { nameZh: "咕噜肉饭", nameEn: "Sweet & Sour Pork on Rice" },
    { nameZh: "咕噜鸡饭", nameEn: "Sweet & Sour Chicken on Rice" },
    { nameZh: "咕噜虾饭", nameEn: "Sweet & Sour Prawns on Rice" },
    { nameZh: "豉汁鸡饭", nameEn: "Chicken in Black Bean Sauce on Rice" },
    { nameZh: "咖喱牛腩饭", nameEn: "Beef Flank in Curry Sauce on Rice" },
    { nameZh: "牛腩饭", nameEn: "Beef Flank on Rice" },
    {
      nameZh: "鱼香茄子饭",
      nameEn: "Spiced Aubergine & Minced Pork on Rice",
    },
    { nameZh: "虾球炒饭", nameEn: "King Prawn Fried Rice" },
    { nameZh: "扬州炒饭", nameEn: "Special Fried Rice" },
    {
      nameZh: "粟米鱼片饭",
      nameEn: "Fish Fillet in Sweet Corn Sauce on Rice",
    },
    { nameZh: "咕噜鱼饭", nameEn: "Sweet & Sour Fish on Rice" },
    { nameZh: "豉椒牛肉饭", nameEn: "Beef in Black Bean Sauce on Rice" },
    { nameZh: "海鲜粥", nameEn: "Seafood Congee" },
    { nameZh: "鱼片粥", nameEn: "Sliced Fish Congee" },
    { nameZh: "皮蛋瘦肉粥", nameEn: "Minced Pork & Preserved Egg Congee" },
    { nameZh: "干炒牛河", nameEn: "Stir Fried Beef Ho Fun (Dry)" },
    { nameZh: "星州炒米", nameEn: "Singapore Vermicelli" },
    { nameZh: "肉片炒面", nameEn: "Shredded Pork on Crispy Noodles" },
    { nameZh: "什菌炒面", nameEn: "Mixed Mushrooms on Crispy Noodles" },
    {
      nameZh: "干炒什菜面",
      nameEn: "Stir Fried Mixed Vegetables with Noodles",
    },
    {
      nameZh: "咸鱼鸡粒炒饭",
      nameEn: "Diced Chicken with Salted Fish Fried Rice",
    },
    { nameZh: "葱花炒饭", nameEn: "Spring Onion Egg Fried Rice" },
    {
      nameZh: "豉油皇炒面",
      nameEn: "Stir Fried Noodle with Superior Soya Sauce",
    },
    { nameZh: "白饭", nameEn: "Boiled Rice" },
  ],
};

const riceCategories: MenuCategory[] = [riceNoodleHoFunCongeeCategory];

const noodlesBbqCategories: MenuCategory[] = [
  {
    id: "bbq-roast-meat",
    titleEn: "BBQ Roast Meat",
    titleZh: "烧味",
    items: [
      { nameZh: "明炉烧鸭", nameEn: "BBQ Roast Duck" },
      { nameZh: "蜜汁叉烧", nameEn: "Honey Roast Pork" },
      { nameZh: "豉油鸡（半只）", nameEn: "Soya Sauce Chicken (Half)" },
      { nameZh: "香酥鸭", nameEn: "Crispy Aromatic Duck" },
    ],
  },
  noodleHoFunVermicelliSoupCategory,
  riceNoodleHoFunCongeeCategory,
  {
    id: "seasonal-vegetables",
    titleEn: "Seasonal Vegetables",
    titleZh: "时菜",
    items: [
      {
        nameZh: "蒜香时菜",
        nameEn: "Stir Fried Seasonal Vegetables with Garlic",
      },
      { nameZh: "清炒西兰花", nameEn: "Stir Fried Broccoli" },
      {
        nameZh: "椒丝腐乳通菜",
        nameEn: "Morning Glory with Preserved Bean Curd & Chilli",
      },
      { nameZh: "清炒什菜", nameEn: "Stir Fried Mixed Vegetables" },
    ],
  },
  {
    id: "chef-specials",
    titleEn: "Chef Specials",
    titleZh: "名厨精选",
    items: [
      {
        nameZh: "干扁四季豆",
        nameEn: "Stir Fried French Bean with Minced Pork in Chilli",
      },
      { nameZh: "黄金虾球", nameEn: "Golden King Prawn" },
      { nameZh: "香辣水煮鱼片", nameEn: "Szechuan Sliced Fish in Spicy Soup" },
      {
        nameZh: "杂菌玉子豆腐",
        nameEn: "Mixed Mushrooms & Japanese Beancurd",
      },
      {
        nameZh: "港式糖醋排骨",
        nameEn: "Sweet & Sour Spare Ribs Hong Kong Style",
      },
      { nameZh: "麻婆豆腐（牛肉）", nameEn: "Mapo Tofu (Beef)" },
      { nameZh: "香脆辣牛肉丝", nameEn: "Crispy Shredded Hot Chilli Beef" },
      {
        nameZh: "黑椒牛柳粒",
        nameEn: "Diced Beef Fillet in Black Pepper Sauce",
      },
      { nameZh: "元首牛腩煲", nameEn: "Beef Flank with Turnip Hot Pot" },
      { nameZh: "四川虾球", nameEn: "Szechuan King Prawn" },
      { nameZh: "京都排骨", nameEn: "Peking Spare Ribs" },
      { nameZh: "椒盐猪扒", nameEn: "Salt & Pepper Pork Chops" },
      { nameZh: "四川辣椒鸡", nameEn: "Diced Chicken with Chilli" },
      { nameZh: "鱼香茄子煲（猪肉）", nameEn: "Spicy Aubergine Hot Pot (Pork)" },
      {
        nameZh: "蒜香豉椒鸡",
        nameEn: "Chicken with Garlic Black Bean Sauce",
      },
    ],
  },
];

/** Specialty drinks shared by Full Menu and Drinks & Desserts */
const specialtyDrinkItems = [
  {
    nameZh: "港式奶茶（热/冻）",
    nameEn: "Hong Kong Style Milk Tea (Hot / Cold)",
  },
  { nameZh: "柠檬茶（冻）", nameEn: "Lemon Tea (Cold)" },
  { nameZh: "西柚梳打（冻）", nameEn: "Grapefruit Sparkling (Cold)" },
  { nameZh: "柠檬梳打（冻）", nameEn: "Lemon Sparkling (Cold)" },
  { nameZh: "青柠梳打（冻）", nameEn: "Lime Sparkling (Cold)" },
  {
    nameZh: "百香橙梳打（冻）",
    nameEn: "Passion Fruit & Orange Sparkling (Cold)",
  },
  { nameZh: "花枝招蝶（冻）", nameEn: "Lychee Butterfly (Cold)" },
  { nameZh: "百香招蝶（冻）", nameEn: "Passion Butterfly (Cold)" },
  { nameZh: "石榴招蝶（冻）", nameEn: "Guava Butterfly (Cold)" },
  { nameZh: "酸梅汤", nameEn: "Plum Juice" },
  { nameZh: "王老吉", nameEn: "Chinese Herbal Drink" },
  { nameZh: "豆浆", nameEn: "Soya Milk Drink" },
  { nameZh: "柠檬蜜（热/冻）", nameEn: "Honey & Lemon Drink (Hot / Cold)" },
];

const softDrinkItems = [
  { nameZh: "汽水", nameEn: "Soft Drink (Coke / Diet Coke / 7Up)" },
  { nameZh: "橙汁 / 苹果汁", nameEn: "Orange Juice / Apple Juice" },
  { nameZh: "菠萝汁", nameEn: "Pineapple Juice" },
  {
    nameZh: "中国茶：香片 / 普洱 / 铁观音",
    nameEn: "Chinese Tea: Jasmine / Puer / Tie Guan Yin (Per Head)",
  },
];

/** Drinks / soft drinks / wines & beer / desserts as printed on the Full Menu PDF */
const fullMenuDrinksCategories: MenuCategory[] = [
  {
    id: "drinks",
    titleEn: "Drinks",
    titleZh: "饮品",
    items: specialtyDrinkItems,
  },
  {
    id: "soft-drinks",
    titleEn: "Soft Drinks",
    titleZh: "汽水",
    items: softDrinkItems,
  },
  {
    id: "wines-beer",
    titleEn: "Wines & Beer",
    titleZh: "葡萄酒与啤酒",
    items: [
      {
        nameZh: "St Desir Sauvignon（白）",
        nameEn: "St Desir Sauvignon (White)",
      },
      {
        nameZh: "Conde de Castile Blanco Rioja（白）",
        nameEn: "Conde de Castile Blanco Rioja (White)",
      },
      {
        nameZh: "Trois Arches Merlot（红）",
        nameEn: "Trois Arches Merlot (Red)",
      },
      {
        nameZh: "Desire Lush & Zin Primitivo（红）",
        nameEn: "Desire Lush & Zin Primitivo (Red)",
      },
      {
        nameZh: "Ombrellino Pinot Grigio（粉红）",
        nameEn: "Ombrellino Pinot Grigio (Rosé)",
      },
      { nameZh: "朝日啤酒", nameEn: "Asahi" },
      { nameZh: "青岛啤酒", nameEn: "Tsingtao" },
      { nameZh: "虎牌啤酒", nameEn: "Tiger" },
    ],
  },
  {
    id: "desserts",
    titleEn: "Desserts",
    titleZh: "甜品",
    items: [
      { nameZh: "杨枝甘露", nameEn: "Chilled Mango & Grapefruit Tapioca" },
      { nameZh: "豆腐花", nameEn: "Bean Curd Delight" },
      { nameZh: "吉士马拉糕", nameEn: "Sponge Custard Cake" },
    ],
  },
];

/** Expanded drinks menu (Pentonville) — includes items not on the Full Menu PDF */
const drinksDessertsCategories: MenuCategory[] = [
  {
    id: "drinks",
    titleEn: "Drinks",
    titleZh: "饮品",
    items: [
      ...specialtyDrinkItems,
      { nameZh: "果然係茶", nameEn: "Passion Fruit Tea" },
      { nameZh: "桃係欢心", nameEn: "Peach Tea" },
      ...softDrinkItems,
    ],
  },
  {
    id: "beer",
    titleEn: "Beer",
    titleZh: "啤酒",
    items: [
      { nameZh: "朝日啤酒", nameEn: "Asahi" },
      { nameZh: "佩罗尼啤酒", nameEn: "Peroni" },
      { nameZh: "青岛啤酒", nameEn: "Tsingtao" },
      { nameZh: "虎牌啤酒", nameEn: "Tiger" },
    ],
  },
  {
    id: "desserts",
    titleEn: "Desserts",
    titleZh: "甜品",
    items: [
      { nameZh: "杨枝甘露", nameEn: "Chilled Mango & Grapefruit Tapioca" },
      { nameZh: "豆腐花", nameEn: "Bean Curd Delight" },
      { nameZh: "吉士马拉糕", nameEn: "Sponge Custard Cake" },
      { nameZh: "红豆香芋西米露", nameEn: "Red Bean, Yam Tapioca" },
    ],
  },
];

const wineListCategories: MenuCategory[] = [
  {
    id: "sparkling",
    titleEn: "Sparkling",
    titleZh: "起泡酒",
    items: [
      {
        nameZh: "Prosecco Moletto Treviso DOC（意大利）",
        nameEn: "Prosecco Moletto Treviso DOC (Italy)",
        description:
          "Green apple, white peach and brioche on fine, persistent bubbles.",
      },
    ],
  },
  {
    id: "rose",
    titleEn: "Rosé",
    titleZh: "桃红",
    items: [
      {
        nameZh: "Torresella Pinot Grigio Rosé 2024（意大利）",
        nameEn: "Torresella Pinot Grigio Rosé 2024 (Italy)",
        description:
          "Copper-pink, with wild strawberry and cherry blossom on the nose.",
      },
    ],
  },
  {
    id: "white",
    titleEn: "White",
    titleZh: "白葡萄酒",
    items: [
      {
        nameZh: "Villa Cornaro Sauvignon Blanc 2025（意大利）",
        nameEn: "Villa Cornaro Sauvignon Blanc 2025 (Italy)",
        description:
          "Zesty citrus and white peach with a clean herbaceous lift.",
      },
      {
        nameZh: "Torresella Chardonnay 2023（意大利）",
        nameEn: "Torresella Chardonnay 2023 (Italy)",
        description:
          "Ripe pear and white blossom with a hint of toasted almond.",
      },
      {
        nameZh: "Roeno Riesling Renano 2021（意大利）",
        nameEn: "Roeno Riesling Renano 2021 (Italy)",
        description:
          "Apricot, lime zest and white flowers with vivid acidity and a mineral edge.",
      },
    ],
  },
  {
    id: "red",
    titleEn: "Red",
    titleZh: "红葡萄酒",
    items: [
      {
        nameZh: "Villa Cornaro Cabernet Sauvignon 2024（意大利）",
        nameEn: "Villa Cornaro Cabernet Sauvignon 2024 (Italy)",
        description:
          "Blackcurrant and cherry with a whisper of dried herbs and supple tannins.",
      },
      {
        nameZh: "Domaine de Peras Merlot IGP 2023（法国）",
        nameEn: "Domaine de Peras Merlot IGP 2023 (France)",
        description:
          "Ripe plum and dark cherry with a hint of mocha and smooth tannins.",
      },
      {
        nameZh: "Château Maine Gazin Bordeaux 2019（法国）",
        nameEn: "Château Maine Gazin Bordeaux 2019 (France)",
        description:
          "Blackcurrant, cedar and earthy depth with well-structured tannins.",
      },
      {
        nameZh: "René Lequin-Colin Bourgogne Pinot Noir 2022（法国）",
        nameEn: "René Lequin-Colin Bourgogne Pinot Noir 2022 (France)",
        description:
          "Silky red cherry and raspberry with a delicate earthy nuance.",
      },
    ],
  },
];

const withPrefix = (categories: MenuCategory[], prefix: string) =>
  categories.map((category) => ({
    ...category,
    id: `${prefix}-${category.id}`,
  }));

export const menuTabs: MenuTab[] = [
  {
    id: "full-menu",
    titleEn: "Full Menu",
    titleZh: "全菜单",
    categories: [
      ...withPrefix(dimSumCategories, "full"),
      ...withPrefix(
        noodlesBbqCategories.filter(
          (category) =>
            category.id !== "seasonal-vegetables" &&
            category.id !== "chef-specials",
        ),
        "full",
      ),
      ...withPrefix(fullMenuDrinksCategories, "full"),
    ],
    notes: [
      "Vegetarian options are available on some of our dishes",
      "A discretionary 12.5% service charge will be added to the bill.",
    ],
  },
  {
    id: "dim-sum",
    titleEn: "Dim Sum",
    titleZh: "点心",
    categories: dimSumCategories,
  },
  {
    id: "rice",
    titleEn: "Rice",
    titleZh: "饭",
    categories: riceCategories,
  },
  {
    id: "noodles-bbq",
    titleEn: "Noodles & BBQ",
    titleZh: "粉面烧味",
    categories: noodlesBbqCategories,
  },
  {
    id: "drinks-desserts",
    titleEn: "Drinks & Desserts",
    titleZh: "饮品甜品",
    categories: drinksDessertsCategories,
  },
  {
    id: "wine-list",
    titleEn: "Wine List",
    titleZh: "酒单",
    categories: wineListCategories,
  },
];
