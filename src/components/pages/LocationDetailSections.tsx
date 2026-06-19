import Link from "next/link";
import { BrandName } from "@/components/BrandName";
import type { Location } from "@/content/types";

function menuHref(file: string) {
  return encodeURI(file);
}

type LocationDetailSectionsProps = {
  location: Location;
};

export function LocationDetailSections({ location }: LocationDetailSectionsProps) {
  const [introLead, ...introRest] = location.detailParagraphs;
  const menuFoodImage =
    location.gallery.find((image) => image.category === "food")?.src ??
    location.introImage;
  const menuSignatureImage =
    location.gallery.find(
      (image) => image.category === "food" && image.src !== menuFoodImage,
    )?.src ?? location.heroImage;

  return (
    <>
      <section className="location-detail-intro alignfull has-blue-background-color">
        <div className="location-detail-intro-inner kb-theme-content-width">
          <h2 className="ruledcream location-detail-intro-title">
            {location.name}
            <span className="chinese"> {location.nameChinese}</span>
          </h2>

          {(location.listingHeading || location.description) && (
            <h3 className="location-detail-tagline">
              {location.listingHeading || location.description}
            </h3>
          )}

          <div className="location-detail-intro-grid">
            <div className="location-detail-intro-copy">
              {introLead && <p>{introLead}</p>}
              {introRest.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <figure className="location-detail-intro-figure">
              <img src={location.introImage} alt={location.introImageAlt} />
            </figure>
          </div>
        </div>
      </section>

      <section className="location-detail-visit">
        <div className="location-detail-visit-inner kb-theme-content-width">
          <h2 className="ruledblue location-detail-visit-title">Visit Us</h2>

          <div className="location-detail-visit-grid">
            <div className="location-detail-visit-copy">
              <p className="location-detail-visit-lead">
                We welcome walk-in guests at {location.name}. No reservations
                required.
              </p>
              <p className="chinese location-detail-visit-lead-zh">
                欢迎到店用餐，无需预订。
              </p>

              <dl className="location-detail-visit-list">
                <div>
                  <dt>Address</dt>
                  <dd>
                    <a
                      href={location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {location.address}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Opening Hours</dt>
                  <dd>{location.hours}</dd>
                </div>
                <div>
                  <dt>Reservation Method</dt>
                  <dd>
                    {location.reservationMethod}
                    <span className="chinese">
                      {" "}
                      {location.reservationMethodZh}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            <figure className="location-detail-visit-figure">
              <img
                src={
                  location.gallery.find((image) => image.category === "exterior")
                    ?.src ?? location.introImage
                }
                alt={`${location.name} exterior`}
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="location-detail-menu">
        <div className="location-detail-menu-inner kb-theme-content-width">
          <h2 className="ruledblue location-detail-menu-title">Menu</h2>

          <div className="location-detail-menu-grid">
            <figure className="location-detail-menu-figure">
              <img src={menuFoodImage} alt={`Dim sum at ${location.name}`} />
            </figure>

            <div className="location-detail-menu-copy">
              <h4 className="location-detail-menu-intro">{location.menuIntro}</h4>
              <p className="chinese location-detail-menu-intro-zh">
                {location.menuIntroZh}
              </p>

              <ul className="location-detail-menu-pdf-list">
                {location.menuItems.map((item) => (
                  <li key={item.id}>
                    <a
                      className={`location-detail-menu-pdf-btn${item.exclusive ? " location-detail-menu-pdf-btn--exclusive" : ""}`}
                      href={menuHref(item.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.labelEn}
                    </a>
                  </li>
                ))}
              </ul>

              {location.slug === "pentonville-road" && (
                <p className="location-detail-menu-note">
                  Our dedicated wine list is exclusive to{" "}
                  <BrandName /> Pentonville Road.
                </p>
              )}
              {location.slug === "pentonville-road" && (
                <p className="chinese location-detail-menu-note">
                  专属酒单仅在彭顿维尔路店提供。
                </p>
              )}

              <p className="location-detail-menu-link-wrap">
                <Link href="/menus" className="location-detail-menu-link">
                  View all menus
                </Link>
              </p>
            </div>

            <figure className="location-detail-menu-figure">
              <img
                src={menuSignatureImage}
                alt={`Signature dishes at ${location.name}`}
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="location-detail-gallery">
        <div className="location-detail-gallery-inner kb-theme-content-width">
          <h2 className="ruledblue location-detail-gallery-title">
            {location.name}
          </h2>

          <div className="location-detail-gallery-grid">
            {location.gallery.map((image) => (
              <figure
                key={image.src}
                className={`location-detail-gallery-item location-detail-gallery-item--${image.category}`}
              >
                <img src={image.src} alt={image.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
