import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { SectionBar, ItalicLink } from "@/components/SectionBar";
import { getLocation } from "@/content/locations";
import { site } from "@/content";
import { LocationPageActions } from "@/components/pages/LocationPageActions";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [
    { slug: "covent-garden" },
    { slug: "borough-yards" },
    { slug: "tottenham-court-road" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: `Location - ${site.name}` };

  return {
    title: `${location.name} - ${site.name}`,
    description: location.description,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return (
    <SiteShell showFixedLogo>
      <div
        className="page-hero"
        style={{ backgroundImage: `url(${location.heroImage})` }}
      >
        <h1>
          {location.name}
          <span className="thai">{location.nameThai}</span>
        </h1>
      </div>
      <div className="content">
        <div className="postContent">
          <h2>{location.subtitle}</h2>
          <h3>{location.description}</h3>
          <p>
            {slug === "covent-garden" &&
              "Plaza Khao Gaeng Covent Garden turns to Thailand's 'deepest south' – the historic and shifting borderlands that embrace the cooking of the provinces of Pattani, Yala, Narathiwat and beyond. The restaurant offers a range of menus for all group sizes and requirements, from Set Menus, to pre-theatre dining."}
            {slug === "borough-yards" &&
              "In Thailand, the best raan khao gaeng are found flanking busy markets – lively, fragrant spaces filled with stainless steel tables and eclectic tablecloths. Plaza Khao Gaeng Borough Yards is no different, except from the market we open on to."}
            {slug === "tottenham-court-road" &&
              "Awarded a Michelin Bib Gourmand in 2023, Plaza Tottenham Court Road carries the spirit of a true raan khao gaeng, tables bathed in the heat of the wok and the glow of fluorescent bulbs, whilst melamine plates chatter merrily in the background. It's all bustle and action from noon to night."}
          </p>

          <div className="blue-section" style={{ margin: "3rem 0" }}>
            <SectionBar title={location.reservationsTitle} arrowVariant="cream" />
            <p style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
              {location.reservationsText}
            </p>
          </div>

          <LocationPageActions
            cta={location.reservationsCta}
            ctaHref={location.reservationsCtaHref}
            bookingUrl={location.bookingUrl}
          />

          <SectionBar title="MENU" />
          <h5>{location.menuDescription}</h5>
          <div className="menu-links">
            {location.menuLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Image
              src={location.heroImage}
              alt={location.name}
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
