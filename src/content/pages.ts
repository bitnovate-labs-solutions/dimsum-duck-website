import type { OurStorySection } from "./types";
import { pageHeroImage } from "./heroImages";
import { dsdImage } from "./locationImages";
import { ourStoryImage } from "./ourStoryImages";

export const homePage = {
  hero: {
    media: "/hero/hero-video.webp",
    poster: "/hero/hero-poster.webp",
    logo: "/logos/logo-2.png",
    title1: "Handmade Dim Sum & In-House Roasted Duck",
    title1Zh: "手工点心与店内烧鸭",
    title2: "Made Fresh Everyday",
    title2Zh: "每日新鲜制作",
    ctaLocations: { label: "Locations", href: "/locations" },
    ctaMenu: { label: "Menu", href: "/menus" },
  },
  about: {
    label: "About us",
    labelZh: "关于我们",
    heading: "Authentic Cantonese recipes, made by hand every day",
    headingZh: "正宗粤菜，每日手工制作",
    paragraphs: [
      "Dim Sum Duck celebrates the craft of Cantonese cooking — dim sum shaped by hand each morning, roast duck prepared over a careful 24-hour process, and dishes rooted in family tradition.",
      "From our original King's Cross Road restaurant to our larger Pentonville Road location, everything we serve is made with heart, precision, and the same dedication that built our reputation one table at a time.",
    ],
    imageLeft: dsdImage("Dim Sum Duck 090426-2596.jpg"),
    imageRight: dsdImage("Dim Sum Duck 090426-2660.jpg"),
    imageRightAlt: "Roast duck",
    imageCenter: dsdImage("Dim Sum Duck 090426-3110.jpg"),
    imageCenterAlt: "Handmade dim sum",
    backgroundImage: dsdImage("Dim Sum Duck 090426-2783.jpg"),
  },
  walkIn: {
    label: "Walk-in",
    labelZh: "到店用餐",
    text: "Both restaurants are currently walk-in only. Join us at Pentonville Road or King's Cross Road — no reservation needed.",
    cta: "Find a location",
    ctaHref: "/locations",
    backgroundImage: dsdImage("Dim Sum Duck 090426-2924.jpg"),
  },
  menu: {
    label: "MENU",
    labelZh: "菜单",
    description:
      "Our dishes are always fresh and full of classic Chinese flavors. Each dish is a standout on its own, and our menu also includes a variety of house-blend drinks and teas.",
    descriptionZh:
      "我们的菜肴始终保持新鲜，充满经典中式风味。每道菜都独具特色，菜单还包括多种特调饮品和茶。",
    cta: "Explore our menu",
    ctaHref: "/menus",
    imageLeft: dsdImage("Dim Sum Duck 090426-2624.jpg"),
    imageLeftAlt: "Assorted dim sum",
    imageRight: dsdImage("Dim Sum Duck 090426-2450.jpg"),
    imageRightAlt: "Steamed soup dumplings",
    wineNote:
      "Our dedicated wine list is exclusive to Dim Sum Duck Pentonville Road.",
  },
  ourStory: {
    label: "Our Story",
    labelZh: "关于我们",
    teaser:
      "From a fishing village in Hong Kong to the kitchens of Chinatown — read the story behind Dim Sum Duck.",
    cta: "Read our story",
    ctaHref: "/our-story",
  },
  reviews: {
    label: "Reviews",
    labelZh: "评价",
    teaser: "Featured in The Times, Michelin Guide, Time Out, The Infatuation, and more.",
    cta: "See all reviews",
    ctaHref: "/reviews",
  },
  locations: {
    region: "Locations",
    regionZh: "门店地址",
  },
};

export const ourStoryPage = {
  heroTitle: "Our Story",
  heroTitleZh: "关于我们",
  heroImage: pageHeroImage("our-story"),
  title: "Our Story",
  titleZh: "关于我们",
  introTitle: "From the Chef-Owner",
  introTitleZh: "主厨兼店主",
  sections: [
    {
      label: "Hong Kong",
      labelZh: "香港",
      image: ourStoryImage("IMG_7739 2.jpg"),
      imageAlt: "Family and community in Hong Kong",
      imageCaption: "Where it all began — family, food, and community",
      imagePosition: "left",
      paragraphsEn: [
        "Born and raised in a small fishing village in Hong Kong, my story with food started before my career as a chef. My father ran a fishing farm, supplying fresh fish to the local community, while my mother became well known in the village for her handmade put chai ko—traditional steamed cakes she ground and prepared herself in their family kitchen. My siblings and I still have a prominent memory of grinding rice as kids with a stone mortar that weighed us tenfold. My family home would transform into a lively gathering spot, where neighbours came for her desserts, groceries and simple home cooked food. It was there, surrounded by fresh ingredients and a constant flow of people, that my life with food first began.",
      ],
      paragraphsZh: [
        "我在香港一個小小的漁村出生和長大，我與食物的故事早在成為廚師之前就已開始。我的父親經營一個養魚場，為村裡的居民提供新鮮的魚；而我的母親則因她親手製作的砵仔糕而在村裡小有名氣。她會在家中的廚房用石磨把米磨成米漿，再把糕點蒸製出來。直到今天，我和兄弟姐妹仍然清楚記得小時候幫忙推那個比我們還重的石磨磨米的畫面。",
        "我們的家常常變成一個熱鬧的聚集地，鄰居們會來買我母親做的甜點、日常雜貨，以及簡單的家常飯菜。就在那樣的環境裡，四周都是新鮮的食材，人來人往，我與食物的緣分也在那裡開始。",
      ],
    },
    {
      label: "London",
      labelZh: "倫敦",
      image: ourStoryImage("inspired by people", "DSC01169.JPG"),
      imageAlt: "London Chinatown and city life",
      imageCaption: "Learning the craft in Chinatown kitchens",
      imagePosition: "right",
      paragraphsEn: [
        "In 1997, I immigrated to the UK with my siblings. Life in London started with hard work and determination. Without finishing school or attending culinary school, I took on any job I could find around Chinatown, beginning as a dishwasher and kitchen porter. Without any teachers, my real education came from the chefs beside me. In kitchens, the dim sum chefs were experienced seniors and I with limited experience spent countless hours observing, practising, and learning the craft piece by piece.",
        "Through persistence and years of dedication, I worked my way up through the kitchen, eventually becoming an executive chef. Every skill I developed came through experience, patience, and deep respect for the generations of chefs who taught me along the way. Dim sum and Cantonese cuisine demand precision, discipline, and long hours—it is tough, relentless work. But the passion behind every dish, the craft of shaping each dumpling by hand, and the tradition carried through each recipe make it unlike anything else.",
      ],
      paragraphsZh: [
        "1997年，我和兄弟姐妹一起移民到英國。剛到倫敦的生活充滿艱辛，但也充滿決心。因為沒有完成學業，也沒有上過任何烹飪學校，我在唐人街找到任何能做的工作，從洗碗和廚房雜工開始做起。沒有正式的老師，我真正的學習都來自於身邊的廚師。在廚房裡，做點心的多是經驗豐富的老師傅，而當時幾乎沒有經驗的我，只能花無數時間觀察、練習，一點一滴地學習這門手藝。",
        "憑著堅持與多年努力，我一步一步在廚房裡成長，最終成為行政總廚。我所有的技藝都來自經驗、耐心，以及對前輩廚師們的深深尊敬。點心與粵菜需要極高的精準度、紀律與長時間的投入，這是一份辛苦而不斷磨練的工作。但每一道菜背後的熱情、每一顆手工包製的點心，以及每一份傳承下來的味道，都讓這門料理變得無可替代。",
      ],
    },
    {
      label: "Dim Sum Duck",
      labelZh: "点豆得",
      image: ourStoryImage("inspired by the markets", "IMG_4512.jpg"),
      imageAlt: "Dim Sum Duck restaurant",
      imagePosition: "left",
      paragraphsEn: [
        "During the COVID-19 pandemic, my sister and I opened our own restaurant on an unassuming street in London. At the beginning there were days with few visitors, and many lockdowns but continued to cook regardless, preparing meals and personally delivering them to neighbours. Slowly, with the support of the local community and word spreading from one table to the next, the restaurant grew into what it is today.",
        "The philosophy remains the same: cook with heart and pursue perfection in every dish. Dim sum is handmade fresh every day, just as it has been since the restaurant first opened. The roast duck undergoes a careful 24 hour preparation process, and each special dish is created to be memorable meals designed not just to fill you, but to leave you appreciating every bite.",
        "Everything served is rooted in a lifetime of experience, family tradition, and gratitude for the community that helped build it.",
      ],
      paragraphsZh: [
        "在新冠疫情期間，我和姐姐在倫敦一條不起眼的小街上開了屬於我們自己的餐廳。最初的日子裡，客人不多，加上多次封城，但我們依然每天堅持做菜——準備食物，然後親自把餐點送到鄰居手中。慢慢地，在社區的支持和口耳相傳之下，餐廳逐漸發展成今天的樣子。",
        "我們的理念一直沒有改變：用心做菜，在每一道菜中追求完美。餐廳的點心每天新鮮手工製作，從開業第一天到現在始終如此。我們的燒鴨經過細心的24小時製作工序，而每一道特色菜都希望成為令人難忘的一餐——不只是讓人吃得飽，更讓人細細品味每一口的味道。",
        "我們端上的每一道菜，都承載著一生累積的經驗、家族的傳統，以及對一路支持我們的社區深深的感謝。",
      ],
    },
  ] satisfies OurStorySection[],
};

export const menuPage = {
  title: "Menu",
  titleZh: "菜单",
  heroImage: pageHeroImage("menu"),
  heading: "Handmade Dim Sum & In-House Roasted Duck, Made Fresh Everyday",
  headingZh: "手工点心与店内烧鸭，每日新鲜制作",
  intro:
    "Our dishes are always fresh and full of classic Chinese flavors. Each dish is a standout on its own, and our menu also includes a variety of house-blend drinks and teas.",
  introZh:
    "我们的菜肴始终保持新鲜，充满经典中式风味。每道菜都独具特色，菜单还包括多种特调饮品和茶。",
  wineNote:
    "Our dedicated wine list is exclusive to Dim Sum Duck Pentonville Road.",
  wineNoteZh: "专属酒单仅在彭顿维尔路店提供。",
};

export const locationsPage = {
  heroTitle: "Locations",
  heroTitleZh: "门店地址",
  title: "Locations",
  titleZh: "门店地址",
  heading: "Find us in King's Cross and Pentonville.",
  headingZh: "欢迎光临国王十字与彭顿维尔店。",
  region: "Locations",
  heroImage: pageHeroImage("locations"),
};

export const reviewsPage = {
  heroTitle: "Reviews",
  heroTitleZh: "评价",
  heroImage: pageHeroImage("reviews"),
  title: "Reviews",
  titleZh: "评价",
  heading: "What the press says",
  headingZh: "媒体报道",
};
