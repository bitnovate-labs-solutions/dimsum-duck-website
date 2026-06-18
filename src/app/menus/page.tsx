import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { menuPage } from "@/content/pages";
import { locations } from "@/content/locations";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Menu - ${site.name}`,
  description: menuPage.heading,
};

export default function MenuPage() {
  const menuImages: Record<string, string> = {
    "tottenham-court-road": "/images/uploads/25.10.24-PLAZA-BOROUGH-232.jpg",
    "borough-yards": "/images/uploads/25.10.23-PLAZA-BOROUGH-1275.jpg",
    "covent-garden": "/images/uploads/26.3.31-COVENT-GARDEN-1-879.jpg",
  };

  return (
    <SiteShell showFixedLogo>
      <div className="content">
        <div className="postContent">
          <h1>
            {menuPage.title}
            <span className="thai"> {menuPage.titleThai}</span>
          </h1>
          <h3>{menuPage.heading}</h3>

          <h2 style={{ marginTop: "3rem" }}>{menuPage.region}</h2>

          {locations.map((location) => (
            <section key={location.slug} className="menu-location-block">
              <h3>
                {location.name}
                <br />
                <span className="address" style={{ fontSize: "0.5em" }}>
                  {location.address}
                </span>
              </h3>
              <div className="menu-links">
                {location.menuLinks.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Image
                  src={menuImages[location.slug]}
                  alt={location.name}
                  width={1200}
                  height={800}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
