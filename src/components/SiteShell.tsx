import { Footer } from "./Footer";
import { Header } from "./Header";
import { ModalProvider } from "./ModalProvider";
import { Modals } from "./Modals";

type SiteShellProps = {
  children: React.ReactNode;
  headerVariant?: "overlay" | "cream";
  showFixedLogo?: boolean;
};

export function SiteShell({
  children,
  headerVariant = "cream",
  showFixedLogo = false,
}: SiteShellProps) {
  return (
    <ModalProvider>
      <div className="inwrap">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header variant={headerVariant} />
        <main id="main-content">
          <div className="contentwrap">{children}</div>
        </main>
        <Footer />
        <Modals />
        {showFixedLogo && <div className="logo" aria-hidden="true" />}
      </div>
    </ModalProvider>
  );
}
