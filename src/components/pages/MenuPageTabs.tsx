"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MenuCategory } from "@/content/types";

type MenuPageTabsProps = {
  categories: MenuCategory[];
};

export function MenuPageTabs({ categories }: MenuPageTabsProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");
  const tabsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = tabsRef.current;
    const nav = navRef.current;
    if (!root || !nav) return;

    const syncNavHeight = () => {
      root.style.setProperty("--menu-tabs-nav-height", `${nav.offsetHeight}px`);
    };

    syncNavHeight();
    const observer = new ResizeObserver(syncNavHeight);
    observer.observe(nav);
    window.addEventListener("resize", syncNavHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncNavHeight);
    };
  }, []);

  const scrollToTabs = useCallback(() => {
    navRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const selectTab = useCallback(
    (id: string) => {
      setActiveId(id);
      window.history.replaceState(null, "", `#${id}`);
      requestAnimationFrame(scrollToTabs);
    },
    [scrollToTabs],
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && categories.some((category) => category.id === hash)) {
      setActiveId(hash);
      requestAnimationFrame(scrollToTabs);
    }
  }, [categories, scrollToTabs]);

  const activeCategory =
    categories.find((category) => category.id === activeId) ?? categories[0];

  if (!activeCategory) return null;

  return (
    <div ref={tabsRef} className="menu-tabs">
      <div
        ref={navRef}
        className="menu-category-nav"
        role="tablist"
        aria-label="Menu sections"
      >
        {categories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${category.id}`}
              className={`menu-category-tab${isActive ? " is-active" : ""}`}
              onClick={() => selectTab(category.id)}
            >
              {category.titleEn}
              <span className="chinese"> {category.titleZh}</span>
            </button>
          );
        })}
      </div>

      <div className="menu-sections">
        {categories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <section
              key={category.id}
              id={category.id}
              role="tabpanel"
              aria-labelledby={`tab-${category.id}`}
              hidden={!isActive}
              className={`menu-section${isActive ? " is-active" : ""}`}
            >
              <h2 className="wp-block-heading ruledblue menu-section-title">
                {category.titleEn}
                <span className="chinese"> {category.titleZh}</span>
              </h2>

              <div className="menu-container">
                <ul className="menu-dish-list">
                  {category.items.map((item) => (
                    <li key={item.nameEn} className="menu-dish-item">
                      <span className="menu-dish-en">{item.nameEn}</span>
                      <span className="menu-dish-zh chinese">
                        {item.nameZh}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
