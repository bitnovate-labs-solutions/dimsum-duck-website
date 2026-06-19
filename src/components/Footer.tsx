import Link from "next/link";
import { BrandName } from "@/components/BrandName";
import {
  footerLocations,
  footerOpeningHours,
  legalLinks,
  site,
} from "@/content";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="sidebarItem">
          <div className="kb-row-layout-wrap kb-row-layout-idblock-11_ef76b6-1e alignfull kt-row-has-bg footer-reveal-bg wp-block-kadence-rowlayout">
            <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-bottom kt-inner-column-height-full">
              <div className="wp-block-kadence-column kadence-column386f2d-6c">
                <div className="kt-inside-inner-col" />
              </div>
            </div>
          </div>
        </div>

        <div className="sidebarItem">
          <div className="kb-row-layout-wrap kb-row-layout-idblock-12_fe5e01-b3 alignfull kt-row-has-bg footer-panel wp-block-kadence-rowlayout">
            <div className="kt-row-layout-overlay kt-row-overlay-normal" />
            <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
              <div className="wp-block-kadence-column kadence-columna778bc-bb">
                <div className="kt-inside-inner-col">
                  <div className="kb-row-layout-wrap kb-row-layout-id8afd06-cc alignfull wp-block-kadence-rowlayout">
                    <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                      <div className="wp-block-kadence-column kadence-column863fee-93">
                        <div className="kt-inside-inner-col">
                          <div className="wp-block-kadence-image kb-image8e6666-f7">
                            <figure className="aligncenter size-full">
                              <img
                                src={site.logoBlue}
                                alt={site.name}
                                className="kb-img dsd-footer-logo"
                                width={320}
                                height={100}
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="kb-row-layout-wrap kb-row-layout-id483605-1a alignnone wp-block-kadence-rowlayout">
                    <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                      <div className="wp-block-kadence-column kadence-columndce50d-17">
                        <div className="kt-inside-inner-col">
                          <div className="kb-row-layout-wrap kb-row-layout-ide5fcb3-22 alignnone wp-block-kadence-rowlayout">
                            <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                              <div className="wp-block-kadence-column kadence-column5c9596-dd">
                                <div className="kt-inside-inner-col">
                                  <div className="kb-row-layout-wrap kb-row-layout-idf5c517-98 alignnone wp-block-kadence-rowlayout">
                                    <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                                      <div className="wp-block-kadence-column kadence-column139b0d-ad">
                                        <div className="kt-inside-inner-col" />
                                      </div>
                                      <div className="wp-block-kadence-column kadence-column78567b-2b">
                                        <div className="kt-inside-inner-col">
                                          {footerLocations.map((location) => (
                                            <h6
                                              key={location.name}
                                              className="kt-adv-heading77aaa1-4c wp-block-kadence-advancedheading has-blue-color has-text-color footer-location"
                                            >
                                              <span className="footer-uppercase">
                                                {location.name}
                                              </span>
                                              <br />
                                              <a
                                                href={location.googleMapsUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                {location.address
                                                  .split("\n")
                                                  .map((line) => (
                                                    <span key={line}>
                                                      {line}
                                                      <br />
                                                    </span>
                                                  ))}
                                              </a>
                                            </h6>
                                          ))}

                                          <h6 className="kt-adv-heading3048ae-b6 wp-block-kadence-advancedheading has-blue-color has-text-color footer-hours">
                                            <span className="footer-uppercase">
                                              {footerOpeningHours.title}
                                            </span>
                                            <br />
                                            {footerOpeningHours.lines.map(
                                              (line) => (
                                                <span key={line}>
                                                  {line}
                                                  <br />
                                                </span>
                                              ),
                                            )}
                                          </h6>

                                          <div className="footer-instagram-wrap">
                                            <a
                                              href={site.social.instagram}
                                              className="footer-instagram"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              aria-label="Instagram @dimsumandduck"
                                            >
                                              <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                focusable="false"
                                              >
                                                <rect
                                                  x="2.5"
                                                  y="2.5"
                                                  width="19"
                                                  height="19"
                                                  rx="5"
                                                  ry="5"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="1.75"
                                                />
                                                <circle
                                                  cx="12"
                                                  cy="12"
                                                  r="4.25"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="1.75"
                                                />
                                                <circle
                                                  cx="17.2"
                                                  cy="6.8"
                                                  r="1.1"
                                                  fill="currentColor"
                                                />
                                              </svg>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="wp-block-kadence-column kadence-column871469-6f kvs-sm-false">
                                <div className="kt-inside-inner-col">
                                  {legalLinks.map((link) => (
                                    <h5
                                      key={link.href}
                                      className="kt-adv-heading11871b-41 wp-block-kadence-advancedheading has-blue-color has-text-color footer-legal"
                                    >
                                      <Link
                                        href={link.href}
                                        className="footer-uppercase"
                                      >
                                        {link.label}
                                      </Link>
                                    </h5>
                                  ))}
                                  <h5 className="kt-adv-headingce49e5-bf wp-block-kadence-advancedheading has-blue-color has-text-color footer-copyright">
                                    © {site.copyrightYear} <BrandName />
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
