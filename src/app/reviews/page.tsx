import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { reviewsPage } from "@/content/pages";
import { reviews } from "@/content/reviews";
import type { Review } from "@/content/types";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Reviews",
  description:
    "Dim Sum Duck (Dimsumduck) reviews from The Times, Michelin Guide, Time Out, The Infatuation, and more — King's Cross, London.",
  path: "/reviews",
});

function ReviewCard({
  review,
  featured = false,
}: {
  review: Review;
  featured?: boolean;
}) {
  return (
    <a
      href={review.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`review-card${featured ? " review-card--featured" : ""}`}
      aria-label={`${review.publication}: ${review.title}`}
    >
      <div className="review-card-media">
        <Image
          src={review.image}
          alt=""
          fill
          sizes={
            featured
              ? "(max-width: 767px) 100vw, 1100px"
              : "(max-width: 767px) 100vw, 900px"
          }
          className="review-card-image"
          priority={featured}
        />

        <p className="review-card-badge">{review.publication}</p>

        <div className="review-card-overlay">
          <p className="review-card-publication">{review.publication}</p>
          <h3 className="review-card-title">{review.title}</h3>
          {(review.author || review.date) && (
            <p className="review-card-meta">
              {[review.author && `By ${review.author}`, review.date]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}
          <p className="review-card-cta">
            Read article <span aria-hidden="true">→</span>
          </p>
        </div>
      </div>
    </a>
  );
}

export default function ReviewsPage() {
  const [featured, ...rest] = reviews;

  return (
    <SiteShell headerVariant="overlay">
      <PageHero
        image={reviewsPage.heroImage}
        title={reviewsPage.heroTitle}
        titleZh={reviewsPage.heroTitleZh}
      />

      <div className="content reviews-page">
        <div className="postContent">
          <div className="reviews-list">
            {featured ? <ReviewCard review={featured} featured /> : null}
            {rest.length > 0 ? (
              <div className="reviews-stack">
                {rest.map((review) => (
                  <ReviewCard key={review.href} review={review} />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
