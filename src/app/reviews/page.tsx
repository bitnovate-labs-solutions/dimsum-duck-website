import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { reviewsPage } from "@/content/pages";
import { reviews } from "@/content/reviews";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Reviews - ${site.name}`,
  description: reviewsPage.heading,
};

export default function ReviewsPage() {
  return (
    <SiteShell headerVariant="overlay">
      <div
        className="page-hero"
        style={{ backgroundImage: `url(${reviewsPage.heroImage})` }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">{reviewsPage.heroTitle}</h1>
          <p className="page-hero-zh chinese">{reviewsPage.heroTitleZh}</p>
        </div>
      </div>

      <div className="content reviews-page">
        <div className="postContent">
          <h3>{reviewsPage.heading}</h3>
          <p className="chinese reviews-page-subtitle">{reviewsPage.headingZh}</p>

          <div className="reviews-list">
            {reviews.map((review) => (
              <article key={review.href} className="review-row">
                <div className="review-row-image">
                  <div className="review-row-image-inner">
                    <Image
                      src={review.image}
                      alt={`${review.publication} — ${review.title}`}
                      fill
                      sizes="(max-width: 767px) 100vw, 420px"
                      className="review-row-image-media"
                    />
                  </div>
                </div>
                <div className="review-row-content">
                  {review.date && (
                    <p className="review-date">{review.date}</p>
                  )}
                  <p className="review-publication">{review.publication}</p>
                  <h3>
                    <a
                      href={review.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {review.title}
                    </a>
                  </h3>
                  {review.author && (
                    <p className="review-author">By {review.author}</p>
                  )}
                  <p className="clearfaceitalic">
                    <em>
                      <a
                        href={review.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read article
                      </a>
                    </em>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
