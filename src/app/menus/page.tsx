import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { MenuPageTabs } from "@/components/pages/MenuPageTabs";
import { MenuDownloadSection } from "@/components/pages/MenuDownloadSection";
import { menuCategories } from "@/content/menu";
import { menuPage } from "@/content/pages";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Menu - ${site.name}`,
  description: menuPage.heading,
};

export default function MenuPage() {
  return (
    <SiteShell headerVariant="overlay">
      <PageHero
        image={menuPage.heroImage}
        title={menuPage.title}
        titleZh={menuPage.titleZh}
      />

      <div className="content menu-page">
        <div className="postContent">
          <h3>{menuPage.heading}</h3>
          <p className="chinese menu-page-subtitle">{menuPage.headingZh}</p>
          <p>{menuPage.intro}</p>
          <p className="chinese">{menuPage.introZh}</p>
          <p className="menu-wine-note">
            <strong>{menuPage.wineNote}</strong>
          </p>
          <p className="chinese menu-wine-note">{menuPage.wineNoteZh}</p>

          {site.menuPdfUrl !== "#" && (
            <p className="menu-pdf-link">
              <a href={site.menuPdfUrl} target="_blank" rel="noopener noreferrer">
                Download full menu (PDF)
              </a>
            </p>
          )}

          <MenuPageTabs categories={menuCategories} />
        </div>

        <MenuDownloadSection />
      </div>
    </SiteShell>
  );
}
