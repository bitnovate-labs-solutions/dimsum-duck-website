import type { NavItem } from "./types";

/** Left of logo */
export const mainNavLeft: NavItem[] = [
  { chinese: "菜单", label: "Menu", href: "/menus" },
  { chinese: "门店地址", label: "Locations", href: "/locations" },
];

/** Right of logo */
export const mainNavRight: NavItem[] = [
  { chinese: "关于我们", label: "Our Story", href: "/our-story" },
  { chinese: "常见问题", label: "FAQs", href: "/faq" },
];

export const mainNav: NavItem[] = [...mainNavLeft, ...mainNavRight];
