import {
  menuDownloadGroups,
  menuExploreSection,
} from "@/content/menu";
import type { MenuDownloadItem } from "@/content/types";

function menuHref(file: string) {
  return encodeURI(file);
}

type MenuExploreButtonsProps = {
  items: MenuDownloadItem[];
  layout?: "stack" | "row";
};

function MenuExploreButtons({ items, layout = "stack" }: MenuExploreButtonsProps) {
  return (
    <ul className={`menu-explore-pdf-list menu-explore-pdf-list--${layout}`}>
      {items.map((item) => (
        <li key={item.id}>
          <a
            className={`menu-explore-pdf-btn${item.exclusive ? " menu-explore-pdf-btn--exclusive" : ""}`}
            href={menuHref(item.file)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.labelEn}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function MenuDownloadSection() {
  const foodGroup = menuDownloadGroups.find((group) => group.variant === "food");
  const locationGroups = menuDownloadGroups.filter(
    (group) => group.variant === "location",
  );

  return (
    <section
      className="menu-explore alignfull has-blue-background-color"
      aria-labelledby="menu-explore-kicker"
    >
      <div className="menu-explore-inner kb-theme-content-width">
        <h3 id="menu-explore-kicker" className="menu-explore-kicker">
          {menuExploreSection.kickerEn}
        </h3>
        <p className="chinese menu-explore-kicker-zh">
          {menuExploreSection.kickerZh}
        </p>

        <h2 className="ruledcream menu-explore-region">
          {menuExploreSection.regionEn}
          <span className="chinese"> {menuExploreSection.regionZh}</span>
        </h2>

        {foodGroup && (
          <div className="menu-explore-food">
            <h3 className="menu-explore-food-title">
              {foodGroup.titleEn}
              {foodGroup.titleZh && (
                <span className="chinese"> {foodGroup.titleZh}</span>
              )}
            </h3>
            <MenuExploreButtons items={foodGroup.items} layout="row" />
          </div>
        )}

        <div className="menu-explore-grid">
          {locationGroups.map((group) => (
            <article key={group.id} className="menu-explore-location">
              {group.image && group.imageLabel && (
                <figure className="menu-explore-figure">
                  <img src={group.image} alt={group.imageLabel} />
                </figure>
              )}

              <div className="menu-explore-location-head">
                <h3 className="menu-explore-location-title">
                  {group.titleEn}
                  {group.titleZh && (
                    <span className="chinese"> {group.titleZh}</span>
                  )}
                </h3>

                {group.address && (
                  <h4 className="menu-explore-location-address">{group.address}</h4>
                )}
              </div>

              <MenuExploreButtons items={group.items} />

              {group.showWineNote && (
                <div className="menu-explore-wine-note">
                  <p>{menuExploreSection.wineExclusiveNote}</p>
                  <p className="chinese">{menuExploreSection.wineExclusiveNoteZh}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
