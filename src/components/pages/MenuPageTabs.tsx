"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MenuTab } from "@/content/types";

type MenuPageTabsProps = {
  tabs: MenuTab[];
};

export function MenuPageTabs({ tabs }: MenuPageTabsProps) {
  const defaultId = tabs[0]?.id ?? "";
  const [activeId, setActiveId] = useState(defaultId);
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

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
      setOpenCategoryId(null);
      window.history.replaceState(null, "", `#${id}`);
      requestAnimationFrame(scrollToTabs);
    },
    [scrollToTabs],
  );

  useEffect(() => {
    if (!hasMounted) return;

    const hash = window.location.hash.replace("#", "");
    if (hash && tabs.some((tab) => tab.id === hash)) {
      setActiveId(hash);
      requestAnimationFrame(scrollToTabs);
    }
  }, [hasMounted, tabs, scrollToTabs]);

  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  if (!activeTab) return null;

  const toggleCategory = (categoryId: string) => {
    setOpenCategoryId((current) =>
      current === categoryId ? null : categoryId,
    );
  };

  return (
    <div ref={tabsRef} className="menu-tabs">
      <div ref={navRef} className="menu-tabs-header">
        <div
          className="menu-category-nav"
          role="tablist"
          aria-label="Menu sections"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                className={`menu-category-tab${isActive ? " is-active" : ""}`}
                onClick={() => selectTab(tab.id)}
              >
                {tab.titleEn}
                <span className="chinese"> {tab.titleZh}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="menu-sections">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <section
              key={tab.id}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              {...(!isActive ? { "aria-hidden": true as const } : {})}
              className={`menu-section${isActive ? " is-active" : ""}`}
            >
              <h2 className="wp-block-heading ruledblue menu-section-title">
                {tab.titleEn}
                <span className="chinese"> {tab.titleZh}</span>
              </h2>

              <div className="menu-category-accordions">
                {tab.categories.map((category) => {
                  const isOpen = openCategoryId === category.id;
                  return (
                    <div
                      key={category.id}
                      className={`menu-category-accordion${isOpen ? " is-open" : ""}`}
                    >
                      <button
                        type="button"
                        className="menu-category-accordion-trigger"
                        aria-expanded={isOpen}
                        aria-controls={`category-panel-${category.id}`}
                        onClick={() => toggleCategory(category.id)}
                      >
                        <span className="menu-category-accordion-heading">
                          <span className="menu-category-accordion-title">
                            {category.titleEn}
                          </span>
                          <span className="menu-category-accordion-title-zh chinese">
                            {category.titleZh}
                          </span>
                        </span>
                        <span
                          className="menu-category-accordion-icon"
                          aria-hidden="true"
                        >
                          {isOpen ? "\u2212" : "+"}
                        </span>
                      </button>

                      <div
                        id={`category-panel-${category.id}`}
                        className="menu-category-accordion-panel"
                        {...(!isOpen ? { "aria-hidden": true as const } : {})}
                      >
                        <div className="menu-container">
                          <ul className="menu-dish-list">
                            {category.items.map((item) => (
                              <li
                                key={`${category.id}-${item.nameEn}`}
                                className="menu-dish-item"
                              >
                                <span className="menu-dish-en">
                                  {item.nameEn}
                                </span>
                                <span className="menu-dish-zh chinese">
                                  {item.nameZh}
                                </span>
                                {item.description ? (
                                  <span className="menu-dish-description">
                                    {item.description}
                                  </span>
                                ) : null}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {tab.notes && tab.notes.length > 0 ? (
                <div className="menu-tab-notes">
                  {tab.notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}
