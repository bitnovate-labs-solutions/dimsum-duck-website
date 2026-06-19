"use client";

import Link from "next/link";
import { useState } from "react";
import type { Location } from "@/content/types";

type LocationHoverCardProps = {
  location: Location;
  variant?: "listing" | "detail";
};

export function LocationHoverCard({
  location,
  variant = "listing",
}: LocationHoverCardProps) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const showHours = hovered || active;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(hover: none)").matches && !active) {
      event.preventDefault();
      setActive(true);
    }
  };

  return (
    <article className={`location-hover-card location-hover-card--${location.slug}`}>
      <Link
        href={`/${location.slug}`}
        className="location-hover-card-link"
        aria-label={`View ${location.name}`}
        onClick={handleClick}
      >
        <div
          className={`location-hover-card-image${showHours ? " is-active" : ""}`}
          style={{ backgroundImage: `url(${location.heroImage})` }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false);
            setActive(false);
          }}
          onFocus={() => setHovered(true)}
          onBlur={() => {
            setHovered(false);
            setActive(false);
          }}
        >
          <div className="location-hover-card-base">
            <h3>
              {location.name}
              <span className="chinese"> {location.nameChinese}</span>
            </h3>
            <p className="location-hover-card-address">
              {location.address}
            </p>
          </div>

          <div
            className="location-hover-card-overlay"
            aria-hidden={!showHours}
          >
            <div className="location-hover-card-overlay-block">
              <p className="location-hover-card-overlay-label">Opening Hours</p>
              {location.hours.split("\n").map((line) => (
                <p key={line} className="location-hover-card-overlay-text">
                  {line}
                </p>
              ))}
            </div>
            <div className="location-hover-card-overlay-block">
              <p className="location-hover-card-overlay-label">
                Reservation Method
              </p>
              <p className="location-hover-card-overlay-text">
                {location.reservationMethod}
              </p>
              <p className="chinese location-hover-card-overlay-text">
                {location.reservationMethodZh}
              </p>
            </div>
          </div>
        </div>
      </Link>

      {variant === "detail" && (
        <div className="location-hover-card-body">
          {location.listingHeading ? (
            <h4 className="location-listing-heading">{location.listingHeading}</h4>
          ) : null}
          {location.description ? (
            <p className="location-hover-card-description">
              {location.description}
            </p>
          ) : null}
          {location.detailParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="location-listing-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </article>
  );
}
