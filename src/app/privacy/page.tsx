import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `Privacy Policy - ${site.name}`,
};

export default function PrivacyPage() {
  return (
    <SiteShell showFixedLogo>
      <div className="content">
        <div className="postContent legal-content">
          <h3>Introduction</h3>
          <p>
            Welcome to {site.url} (the &ldquo;Website&rdquo;). We are committed
            to protecting your privacy and ensuring that your personal
            information is handled in a safe and responsible manner. This Privacy
            Policy outlines how we collect, use, disclose, and protect your
            information.
          </p>

          <h3>Information We Collect</h3>
          <p>We may collect the following types of information:</p>
          <ol>
            <li>
              Personal Information: When you register on our Website, subscribe
              to our newsletter, or make a purchase, we may collect personal
              information such as your name, email address, phone number,
              shipping address, and payment information.
            </li>
            <li>
              Non-Personal Information: We may collect non-personal information
              about your visit to the Website, including your IP address, browser
              type, operating system, referring URLs, and browsing behavior.
            </li>
          </ol>

          <h3>How We Use Your Information</h3>
          <p>We use the information we collect for the following purposes:</p>
          <ol>
            <li>
              To Provide Services: To process transactions, deliver products and
              services, and manage your account.
            </li>
            <li>
              To Improve Our Website: To understand how our Website is used and
              to improve its functionality and user experience.
            </li>
            <li>
              To Communicate: To send you updates, newsletters, marketing
              materials, and other information that may be of interest to you.
            </li>
            <li>
              To Comply with Legal Obligations: To comply with applicable laws,
              regulations, and legal processes.
            </li>
          </ol>

          <h3>Sharing Your Information</h3>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties except as described in this policy.
          </p>

          <h3>Security</h3>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information. However, please note that no method of
            transmission over the internet or method of electronic storage is
            100% secure.
          </p>

          <h3>Cookies</h3>
          <p>
            Our Website uses cookies to enhance your browsing experience. You
            can choose to disable cookies through your browser settings.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
            <br />
            Email: {site.contactEmail}
            <br />
            Address: {site.contactAddress}
          </p>

          <p>
            Please click <Link href="/faq">here</Link> to view our FAQ and{" "}
            <Link href="/cookies">Cookie policy</Link>.
          </p>
        </div>
      </div>
    </SiteShell>
  );
}
