import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Cookies - ${site.name}`,
};

export default function CookiesPage() {
  return (
    <SiteShell showFixedLogo>
      <div className="content">
        <div className="postContent legal-content">
          <h3>Introduction</h3>
          <p>
            Our website uses cookies to enhance your browsing experience and
            provide personalized services. This Cookie Policy explains what
            cookies are, how we use them, and how you can manage them.
          </p>

          <h3>What are Cookies?</h3>
          <p>
            Cookies are small text files stored on your device by a web browser.
            They help websites remember information about your visit, such as
            your preferences and login status, which can improve your user
            experience.
          </p>

          <h3>Types of Cookies We Use</h3>
          <ol>
            <li>
              Strictly Necessary Cookie: This cookie should be enabled at all
              times so that we can save your preferences for cookie settings.
            </li>
            <li>
              Statistics &amp; Marketing Cookies: This website uses Google
              Analytics to collect anonymous information such as the number of
              visitors to the site, and the most popular pages.
            </li>
          </ol>

          <h3>How We Use Cookies</h3>
          <p>We use cookies to:</p>
          <ul>
            <li>Remember your preferences and settings.</li>
            <li>
              Understand how you use our website to improve its functionality and
              content.
            </li>
            <li>Provide you with relevant advertising and content.</li>
          </ul>

          <h3>Managing Cookies</h3>
          <p>
            You can manage your cookie preferences through your web browser
            settings. Most browsers allow you to refuse cookies or delete them.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Cookie Policy, please contact us
            at {site.contactEmail}.
          </p>

          <p>
            To check out our FAQs, follow the link{" "}
            <Link href="/faq">here</Link>.
          </p>
        </div>
      </div>
    </SiteShell>
  );
}
