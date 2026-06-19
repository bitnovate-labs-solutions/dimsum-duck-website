import Link from "next/link";
import type { Location } from "@/content/types";
import { ArrowButton } from "./ArrowButton";

type LocationHeadingProps = {
  location: Pick<Location, "name" | "nameChinese" | "address" | "slug">;
  light?: boolean;
};

export function LocationHeading({ location, light }: LocationHeadingProps) {
  return (
    <Link href={`/${location.slug}`}>
      <h3
        className="location-heading"
        style={light ? { color: "var(--cream)" } : undefined}
      >
        <span className="name-wrap">
          <span className="name-en">{location.name}</span>
          <span className="name-zh">{location.nameChinese}</span>
        </span>
        <span className="address">{location.address}</span>
      </h3>
    </Link>
  );
}

type LocationRowProps = {
  location: Pick<Location, "name" | "nameChinese" | "address" | "slug">;
  light?: boolean;
};

export function LocationRow({ location, light }: LocationRowProps) {
  return (
    <div className="location-row">
      <LocationHeading location={location} light={light} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ArrowButton
          href={`/${location.slug}`}
          variant={light ? "cream" : "blue"}
          ariaLabel={`View ${location.name}`}
        />
      </div>
    </div>
  );
}
