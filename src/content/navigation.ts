import type { NavItem } from "./types";
import { site } from "./site";

export const mainNav: NavItem[] = [
  { thai: "จองโต๊ะ", label: "Book", href: "#", action: "book" },
  { thai: "เมนู", label: "Menu", href: "/menus" },
  { thai: "สถานที่", label: "Locations", href: "/locations" },
  { thai: "เกี่ยวกับ", label: "About", href: "/about-plaza-khao-gaeng" },
  { thai: "จองโต๊ะกลุ่ม", label: "Group Dining", href: "/group-dining" },
  {
    thai: "ของขวัญ",
    label: "Gifting",
    href: site.giftingUrl,
    external: true,
  },
  { thai: "อาชีพ", label: "Careers", href: "#", action: "careers" },
];

export const mobileNav: NavItem[] = mainNav.map((item) => ({
  ...item,
  href: item.action ? "#" : item.href,
}));
