"use client";

import Link from "next/link";
import { homePage } from "@/content/pages";
import { locations } from "@/content/locations";
import { useModal } from "@/components/ModalProvider";

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
    spacerId: "kt-block-spacer-6_ab017a-02",
  },
  {
    rowId: "kb-row-layout-id6_6cb6d2-75",
    leftCol: "kadence-column6_f3ea9e-c7",
    rightCol: "kadence-column6_2259a9-b7",
    headingId: "kt-adv-heading6_fc7166-0e",
    headingBlock: "kb-adv-heading6_fc7166-0e",
    linkClass: "kt-adv-heading-link6_fc7166-0e",
    spacerId: null,
  },
] as const;

export function HomePageContent() {
  const { openBook } = useModal();
  const { hero, about, bookings, menu } = homePage;

  return (
    <div className="contenthome">
      <div className="postContent">
        {/* Hero video */}
        <div className="kb-row-layout-wrap kb-row-layout-id6_6f4c1f-76 alignfull kt-row-has-bg wp-block-kadence-rowlayout">
          <div className="kb-blocks-bg-video-container">
            <video
              className="kb-blocks-bg-video"
              autoPlay
              muted
              loop
              playsInline
              poster={hero.poster}
            >
              <source src={hero.video} type="video/mp4" />
            </video>
          </div>
          <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-row-valign-middle">
            <div className="wp-block-kadence-column kadence-column6_4081cc-f8">
              <div className="kt-inside-inner-col">
                <div className="wp-block-kadence-spacer aligncenter kt-block-spacer-6_77e0b8-92">
                  <div className="kt-block-spacer kt-block-spacer-halign-center" />
                </div>

                <div className="kb-row-layout-wrap kb-row-layout-id6_d3756e-26 alignnone wp-block-kadence-rowlayout">
                  <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                    <div className="wp-block-kadence-column kadence-column6_57a189-71 kvs-sm-false">
                      <div className="kt-inside-inner-col">
                        <h1
                          className="kt-adv-heading6_994461-8e wp-block-kadence-advancedheading has-cream-color has-text-color"
                          data-kb-block="kb-adv-heading6_994461-8e"
                        >
                          {hero.title1}
                        </h1>
                        <h1
                          className="kt-adv-heading6_15a138-74 wp-block-kadence-advancedheading has-cream-color has-text-color"
                          data-kb-block="kb-adv-heading6_15a138-74"
                        >
                          {hero.title2}
                        </h1>
                      </div>
                    </div>

                    <div className="wp-block-kadence-column kadence-column6_791867-47 kvs-lg-false kvs-md-false">
                      <div className="kt-inside-inner-col">
                        <div className="wp-block-kadence-image kb-image6_87289e-88">
                          <figure className="aligncenter size-full">
                            <img
                              src={hero.logo}
                              alt="Plaza"
                              className="kb-img"
                              width={300}
                              height={168}
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wp-block-kadence-spacer aligncenter kt-block-spacer-6_42b8fd-17">
                  <div className="kt-block-spacer kt-block-spacer-halign-center" />
                </div>

                <div className="kb-row-layout-wrap kb-row-layout-id6_c2dd8d-0f alignnone divider wp-block-kadence-rowlayout">
                  <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-row-valign-middle kt-inner-column-height-full">
                    <div className="wp-block-kadence-column kadence-column6_601fa4-ce">
                      <div className="kt-inside-inner-col">
                        <div className="wp-block-buttons is-content-justification-right is-layout-flex wp-block-buttons-is-layout-flex">
                          <div className="wp-block-button button-1">
                            <Link
                              className="wp-block-button__link wp-element-button"
                              href="/locations"
                            >
                              LOCATIONS
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wp-block-kadence-column kadence-column6_a30ccd-aa">
                      <div className="kt-inside-inner-col">
                        <div className="wp-block-buttons is-content-justification-left is-layout-flex wp-block-buttons-is-layout-flex">
                          <div className="wp-block-button button-1 open-book-modal">
                            <button
                              type="button"
                              className="wp-block-button__link wp-element-button"
                              onClick={openBook}
                            >
                              RESERVATIONS
                            </button>
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

        {/* About */}
        <div className="kb-row-layout-wrap kb-row-layout-id6_d2820f-2e alignfull kt-row-has-bg wp-block-kadence-rowlayout">
          <div className="kt-row-layout-overlay kt-row-overlay-normal" />
          <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-row-valign-top">
            <div className="wp-block-kadence-column kadence-column6_dd5382-6e">
              <div className="kt-inside-inner-col">
                <h2 className="wp-block-heading ruledcream">About us</h2>
                <h3 className="kt-adv-heading6_525d9e-09 wp-block-kadence-advancedheading has-cream-color has-text-color">
                  {about.heading}
                </h3>

                <div className="kb-row-layout-wrap kb-row-layout-id6_58cfad-4a alignwide wp-block-kadence-rowlayout">
                  <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-row-valign-bottom">
                    <div className="wp-block-kadence-column kadence-column6_37947b-50">
                      <div className="kt-inside-inner-col">
                        <p className="kt-adv-heading6_3b46b3-6b wp-block-kadence-advancedheading has-white-1-color has-text-color">
                          {about.paragraphs[0]}
                        </p>
                      </div>
                    </div>
                    <div className="wp-block-kadence-column kadence-column6_5b172a-e7">
                      <div className="kt-inside-inner-col">
                        <figure className="wp-block-kadence-image kb-image6_c4ec9d-28 kb-image-is-ratio-size">
                          <div className="kb-is-ratio-image kb-image-ratio-port34">
                            <img
                              src={about.imageLeft}
                              alt={about.imageCenterAlt}
                              className="kb-img"
                            />
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div className="wp-block-kadence-column kadence-column6_c70d04-43">
                      <div className="kt-inside-inner-col">
                        <figure className="wp-block-kadence-image kb-image6_979178-b4 kb-image-is-ratio-size">
                          <div className="kb-is-ratio-image kb-image-ratio-square">
                            <img
                              src={about.imageRight}
                              alt={about.imageRightAlt}
                              className="kb-img"
                            />
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div className="wp-block-kadence-column kadence-column6_c61ef7-f7">
                      <div className="kt-inside-inner-col">
                        <p className="kt-adv-heading6_f01ea5-6f wp-block-kadence-advancedheading has-white-1-color has-text-color">
                          {about.paragraphs[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bookings card over image */}
                <div className="kb-row-layout-wrap kb-row-layout-id6_f5804d-0a alignfull kt-row-has-bg wp-block-kadence-rowlayout">
                  <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-row-valign-bottom">
                    <div className="wp-block-kadence-column kadence-column6_e48785-21">
                      <div className="kt-inside-inner-col" />
                    </div>
                    <div className="wp-block-kadence-column kadence-column6_903170-db">
                      <div className="kt-inside-inner-col">
                        <h2 className="wp-block-heading ruledblue has--font-size fullruled">
                          Bookings
                        </h2>
                        <p className="kt-adv-heading6_a90fd0-c5 wp-block-kadence-advancedheading has-blue-color has-text-color">
                          {bookings.text}
                        </p>
                        <div className="kb-row-layout-wrap kb-row-layout-id6_4e5394-19 alignnone wp-block-kadence-rowlayout">
                          <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-left-golden kt-row-valign-middle kb-theme-content-width">
                            <div className="wp-block-kadence-column kadence-column6_59a675-07">
                              <div className="kt-inside-inner-col">
                                <p className="kt-adv-heading6_7db92b-7c clearfaceitalic wp-block-kadence-advancedheading has-blue-color has-text-color">
                                  <em>
                                    <button
                                      type="button"
                                      onClick={openBook}
                                      style={{
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        font: "inherit",
                                        color: "inherit",
                                      }}
                                    >
                                      {bookings.cta}
                                    </button>
                                  </em>
                                </p>
                              </div>
                            </div>
                            <div className="wp-block-kadence-column kadence-column6_3dafa1-ca">
                              <div className="kt-inside-inner-col">
                                <div className="wp-block-buttons is-content-justification-right is-layout-flex wp-block-buttons-is-layout-flex">
                                  <div className="wp-block-button button-blue open-book-modal">
                                    <button
                                      type="button"
                                      className="wp-block-button__link wp-element-button"
                                      onClick={openBook}
                                      aria-label="Reserve now"
                                    >
                                      #
                                    </button>
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

        {/* Menu */}
        <div className="kb-row-layout-wrap kb-row-layout-id6_8a1543-b9 alignfull wp-block-kadence-rowlayout">
          <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-row-valign-top">
            <div className="wp-block-kadence-column kadence-column6_304c77-68">
              <div className="kt-inside-inner-col">
                <h2 className="wp-block-heading ruledblue">MENU</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="kb-row-layout-wrap kb-row-layout-id6_ed0783-04 alignfull wp-block-kadence-rowlayout">
          <div className="kt-row-column-wrap kt-has-3-columns kt-row-layout-equal kt-row-valign-middle">
            <div className="wp-block-kadence-column kadence-column6_8633b7-7c">
              <div className="kt-inside-inner-col">
                <figure className="wp-block-kadence-image kb-image6_0e92d1-10 size-full kb-image-is-ratio-size">
                  <div className="kb-is-ratio-image kb-image-ratio-square">
                    <img
                      src={menu.imageRight}
                      alt={menu.imageRightAlt}
                      className="kb-img"
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="wp-block-kadence-column kadence-column6_32941d-c8">
              <div className="kt-inside-inner-col">
                <h5 className="kt-adv-heading6_3be3f7-b0 wp-block-kadence-advancedheading has-blue-color has-text-color">
                  {menu.description}
                </h5>
                <div className="kb-row-layout-wrap kb-row-layout-id6_98a997-7f alignnone wp-block-kadence-rowlayout">
                  <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-left-golden kt-row-valign-middle kb-theme-content-width">
                    <div className="wp-block-kadence-column kadence-column6_2aac28-63">
                      <div className="kt-inside-inner-col">
                        <p className="kt-adv-heading6_2e1e3b-6b clearfaceitalic wp-block-kadence-advancedheading has-blue-color has-text-color">
                          <em>
                            <Link href={menu.ctaHref}>{menu.cta}</Link>
                          </em>
                        </p>
                      </div>
                    </div>
                    <div className="wp-block-kadence-column kadence-column6_8fdfc2-8a">
                      <div className="kt-inside-inner-col">
                        <div className="wp-block-buttons is-content-justification-right is-layout-flex wp-block-buttons-is-layout-flex">
                          <div className="wp-block-button button-blue">
                            <Link
                              className="wp-block-button__link wp-element-button"
                              href={menu.ctaHref}
                              aria-label="Explore menus"
                            >
                              #
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wp-block-kadence-column kadence-column6_1b2764-02">
              <div className="kt-inside-inner-col">
                <div className="kb-row-layout-wrap kb-row-layout-id6_69aaf8-53 alignnone kb-v-sm-hidden wp-block-kadence-rowlayout">
                  <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-row-valign-top">
                    <div className="wp-block-kadence-column kadence-column6_612f14-2f">
                      <div className="kt-inside-inner-col">
                        <figure className="wp-block-kadence-image kb-image6_09438d-d3 kb-image-is-ratio-size">
                          <div className="kb-is-ratio-image kb-image-ratio-square">
                            <img
                              src={menu.imageLeft}
                              alt={menu.imageLeftAlt}
                              className="kb-img"
                            />
                          </div>
                        </figure>
                        <figure className="wp-block-kadence-image kb-image6_67e7b1-ce kb-image-is-ratio-size">
                          <div className="kb-is-ratio-image kb-image-ratio-port34">
                            <img
                              src={about.imageCenter}
                              alt={about.imageCenterAlt}
                              className="kb-img"
                            />
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="kb-row-layout-wrap kb-row-layout-id6_07c963-a3 alignfull has-blue-background-color kt-row-has-bg wp-block-kadence-rowlayout">
          <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
            <div className="wp-block-kadence-column kadence-column6_57084c-1b">
              <div className="kt-inside-inner-col">
                <h2 className="wp-block-heading ruledcream has--font-size">
                  United Kingdom
                </h2>

                {locations.map((location, index) => {
                  const layout = locationRowLayouts[index];
                  return (
                    <div key={location.slug}>
                      <div
                        className={`kb-row-layout-wrap ${layout.rowId} alignnone wp-block-kadence-rowlayout`}
                      >
                        <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-equal kt-row-valign-middle">
                          <div
                            className={`wp-block-kadence-column ${layout.leftCol}`}
                          >
                            <div className="kt-inside-inner-col">
                              <Link
                                href={`/${location.slug}`}
                                className={`kb-advanced-heading-link ${layout.linkClass} location-heading`}
                              >
                                <h3
                                  className={`${layout.headingId} wp-block-kadence-advancedheading has-cream-color has-text-color`}
                                  data-kb-block={layout.headingBlock}
                                >
                                  <span className="name-en">{location.name}</span>
                                  <span className="name-th">
                                    {location.nameThai}
                                  </span>{" "}
                                  <span className="address">
                                    {location.address}
                                  </span>
                                </h3>
                              </Link>
                            </div>
                          </div>
                          <div
                            className={`wp-block-kadence-column ${layout.rightCol}`}
                          >
                            <div className="kt-inside-inner-col">
                              <div className="wp-block-buttons is-content-justification-right is-layout-flex wp-block-buttons-is-layout-flex">
                                <div className="wp-block-button button-cream">
                                  <Link
                                    className="wp-block-button__link wp-element-button"
                                    href={`/${location.slug}`}
                                    aria-label={`View ${location.name}`}
                                  >
                                    #
                                  </Link>
                                </div>
                              </div>
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
