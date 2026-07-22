import Link from "next/link";
import { ArrowButton } from "@/components/ArrowButton";
import { homePage } from "@/content/pages";
import { locations } from "@/content/locations";

const locationRowLayouts = [
  {
    rowId: "kb-row-layout-id6_050e3a-10",
    leftCol: "kadence-column6_6b54c0-27",
    rightCol: "kadence-column6_792f9c-17",
    headingId: "kt-adv-heading6_178585-c2",
    headingBlock: "kb-adv-heading6_178585-c2",
    linkClass: "kt-adv-heading-link6_178585-c2",
    spacerId: "kt-block-spacer-6_1ade08-6a",
  },
  {
    rowId: "kb-row-layout-id6_eefaaf-f5",
    leftCol: "kadence-column6_25e173-77",
    rightCol: "kadence-column6_9ad95d-b4",
    headingId: "kt-adv-heading6_0afc54-4e",
    headingBlock: "kb-adv-heading6_0afc54-4e",
    linkClass: "kt-adv-heading-link6_0afc54-4e",
    spacerId: null,
  },
] as const;

export function HomePageContent() {
  const { walkIn, menu } = homePage;

  return (
    <div className="contenthome">
      <div className="postContent">
        {/* Walk-in */}
        <div
          className="kb-row-layout-wrap kb-row-layout-id6_f5804d-0a alignfull kt-row-has-bg wp-block-kadence-rowlayout dsd-walk-in-section"
          style={{
            backgroundImage: `url(${walkIn.backgroundImage})`,
            backgroundPosition: "center 22%",
          }}
        >
          <div className="kt-row-layout-overlay kt-row-overlay-normal dsd-walk-in-overlay" />
          <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-row-valign-bottom">
            <div className="wp-block-kadence-column kadence-column6_e48785-21">
              <div className="kt-inside-inner-col" />
            </div>
            <div className="wp-block-kadence-column kadence-column6_903170-db dsd-walk-in-card">
              <div className="kt-inside-inner-col">
                <h2 className="wp-block-heading ruledblue has--font-size fullruled">
                  {walkIn.label}
                  <span className="chinese"> {walkIn.labelZh}</span>
                </h2>
                <p className="kt-adv-heading6_a90fd0-c5 wp-block-kadence-advancedheading has-blue-color has-text-color">
                  {walkIn.text}
                </p>
                <div className="kb-row-layout-wrap kb-row-layout-id6_4e5394-19 alignnone wp-block-kadence-rowlayout">
                  <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-left-golden kt-row-valign-middle kb-theme-content-width">
                    <div className="wp-block-kadence-column kadence-column6_59a675-07">
                      <div className="kt-inside-inner-col">
                        <p className="kt-adv-heading6_7db92b-7c clearfaceitalic wp-block-kadence-advancedheading has-blue-color has-text-color">
                          <em>{walkIn.cta}</em>
                        </p>
                      </div>
                    </div>
                    <div className="wp-block-kadence-column kadence-column6_3dafa1-ca">
                      <div className="kt-inside-inner-col">
                        <ArrowButton
                          href={walkIn.ctaHref}
                          ariaLabel={walkIn.cta}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="kb-row-layout-wrap kb-row-layout-id6_8a1543-b9 alignfull wp-block-kadence-rowlayout home-section-link">
          <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-row-valign-top">
            <div className="wp-block-kadence-column kadence-column6_304c77-68">
              <div className="kt-inside-inner-col">
                <Link href={menu.ctaHref} className="home-section-heading-link">
                  <h2 className="wp-block-heading ruledblue">
                    {menu.label}
                    <span className="chinese"> {menu.labelZh}</span>
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="dsd-home-menu">
          <div className="dsd-home-menu-images">
            <figure className="dsd-home-menu-image dsd-home-menu-image--feature">
              <img src={menu.imageRight} alt={menu.imageRightAlt} />
            </figure>
            <figure className="dsd-home-menu-image">
              <img src={menu.imageLeft} alt={menu.imageLeftAlt} />
            </figure>
            <figure className="dsd-home-menu-image">
              <img src={menu.imageBottom} alt={menu.imageBottomAlt} />
            </figure>
          </div>
          <div className="dsd-home-menu-copy">
            <p className="dsd-menu-note has-blue-color">{menu.wineNote}</p>
            <div className="dsd-home-menu-cta">
              <p className="kt-adv-heading6_2e1e3b-6b clearfaceitalic wp-block-kadence-advancedheading has-blue-color has-text-color">
                <em>{menu.cta}</em>
              </p>
              <ArrowButton href={menu.ctaHref} ariaLabel="Explore our menu" />
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="kb-row-layout-wrap kb-row-layout-id6_07c963-a3 alignfull has-blue-background-color kt-row-has-bg wp-block-kadence-rowlayout home-section-link">
          <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
            <div className="wp-block-kadence-column kadence-column6_57084c-1b">
              <div className="kt-inside-inner-col">
                <Link href="/locations" className="home-section-heading-link">
                  <h2 className="wp-block-heading ruledcream has--font-size">
                    {homePage.locations.region}
                  </h2>
                </Link>

                {locations.map((location, index) => {
                  const layout = locationRowLayouts[index];
                  return (
                    <div key={location.slug}>
                      <div
                        className={`kb-row-layout-wrap ${layout.rowId} alignnone wp-block-kadence-rowlayout dsd-home-location-row`}
                      >
                        <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-equal kt-row-valign-middle">
                          <div
                            className={`wp-block-kadence-column ${layout.leftCol}`}
                          >
                            <div className="kt-inside-inner-col">
                              <a
                                href={location.googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`kb-advanced-heading-link ${layout.linkClass} dsd-home-location-link`}
                              >
                                <h3
                                  className={`${layout.headingId} wp-block-kadence-advancedheading has-cream-color has-text-color`}
                                  data-kb-block={layout.headingBlock}
                                >
                                  <span className="dsd-home-location-name">
                                    <span className="name-wrap">
                                      <span className="name-en">{location.name}</span>
                                      <span className="name-zh">
                                        {location.nameChinese}
                                      </span>
                                    </span>
                                    <span className="address">
                                      {location.address}
                                    </span>
                                  </span>
                                  <span className="hours-short">
                                    {location.hoursShort}
                                  </span>
                                </h3>
                              </a>
                            </div>
                          </div>
                          <div
                            className={`wp-block-kadence-column ${layout.rightCol} dsd-home-location-btn-col`}
                          >
                            <div className="kt-inside-inner-col">
                              <ArrowButton
                                href={`/${location.slug}`}
                                variant="cream"
                                ariaLabel={`View ${location.name}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {layout.spacerId && (
                        <div
                          className={`wp-block-kadence-spacer aligncenter ${layout.spacerId}`}
                        >
                          <div className="kt-block-spacer kt-block-spacer-halign-center">
                            <hr className="kt-divider" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
