import Link from "next/link";
import { site } from "@/content";

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
                                src="/images/uploads/Plaza.png"
                                alt="Plaza"
                                className="kb-img"
                                width={450}
                                height={253}
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
                                          <h6 className="kt-adv-heading77aaa1-4c wp-block-kadence-advancedheading has-blue-color has-text-color">
                                            BOROUGH
                                            <br />
                                            Arch 207, 18 Stoney St
                                            <br />
                                            London SE1 9AD
                                            <br />
                                            <a href="mailto:by@plazakhaogaeng.com">
                                              by@plazakhaogaeng.com
                                            </a>
                                          </h6>

                                          <h6 className="kt-adv-heading8c9cb4-af wp-block-kadence-advancedheading has-blue-color has-text-color">
                                            COVENT GARDEN
                                            <br />
                                            6 Bedford St
                                            <br />
                                            London WC2E 9HZ
                                            <br />
                                            <a href="mailto:cg@plazakhaogaeng.com">
                                              cg@plazakhaogaeng.com
                                            </a>
                                          </h6>

                                          <h6 className="kt-adv-heading5939d5-b1 wp-block-kadence-advancedheading has-blue-color has-text-color" />

                                          <h6 className="kt-adv-headingc9ce38-b5 wp-block-kadence-advancedheading has-blue-color has-text-color">
                                            TOTTENHAM COURT ROAD
                                            <br />
                                            103-105 New Oxford St
                                            <br />
                                            London WC1A 1DB
                                            <br />
                                            <a href="mailto:tcr@plazakhaogaeng.com">
                                              tcr@plazakhaogaeng.com
                                            </a>
                                          </h6>

                                          <h6 className="kt-adv-heading3048ae-b6 wp-block-kadence-advancedheading has-blue-color has-text-color">
                                            OPENING HOURS
                                            <br />
                                            {site.openingHours.weekday}
                                            <br />
                                            {site.openingHours.sunday}
                                          </h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="wp-block-kadence-column kadence-column871469-6f kvs-sm-false">
                                <div className="kt-inside-inner-col">
                                  <h5 className="kt-adv-heading11871b-41 wp-block-kadence-advancedheading has-blue-color has-text-color">
                                    <Link href="/faq">FAQ</Link>
                                  </h5>
                                  <h5 className="kt-adv-heading7afed4-38 wp-block-kadence-advancedheading has-blue-color has-text-color">
                                    <Link href="/privacy">PRIVACY</Link>
                                  </h5>
                                  <h5 className="kt-adv-heading66fcf0-51 wp-block-kadence-advancedheading has-blue-color has-text-color">
                                    <Link href="/cookies">COOKIES</Link>
                                  </h5>
                                  <h5 className="kt-adv-headingce49e5-bf wp-block-kadence-advancedheading has-blue-color has-text-color">
                                    © {site.copyrightYear}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="kb-row-layout-wrap kb-row-layout-id6d9719-cb alignfull has-cream-background-color kt-row-has-bg wp-block-kadence-rowlayout">
                    <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-equal kt-row-valign-middle">
                      {site.partnerLinks.map((partner, index) => (
                        <div
                          key={partner.name}
                          className={`wp-block-kadence-column ${
                            index === 0
                              ? "kadence-columnf04716-4e"
                              : "kadence-column5275cd-45"
                          }`}
                        >
                          <div className="kt-inside-inner-col">
                            <div
                              className={`wp-block-kadence-image ${
                                index === 0 ? "kb-image3a7998-c6" : "kb-image1430a9-90"
                              }`}
                            >
                              <figure
                                className={
                                  index === 0
                                    ? "alignright size-full"
                                    : "size-full"
                                }
                              >
                                <a
                                  href={partner.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${partner.name} - link to website`}
                                >
                                  <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="kb-img"
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                        </div>
                      ))}
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
