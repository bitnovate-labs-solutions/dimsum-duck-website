"use client";

import { useEffect } from "react";
import { bookingLocations, careersLocations } from "@/content";
import { useModal } from "./ModalProvider";

export function Modals() {
  const { activeModal, closeModal } = useModal();

  useEffect(() => {
    document.body.classList.toggle("modal-open", activeModal !== null);
    return () => document.body.classList.remove("modal-open");
  }, [activeModal]);

  return (
    <>
      <div
        className={`custom-modal ${activeModal === "book" ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={activeModal !== "book"}
        id="booking-modal"
      >
        <div className="custom-modal-overlay">
          <button
            type="button"
            className="custom-modal-close"
            aria-label="Close Modal"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="modal-content">
            <nav className="mobile-main" aria-label="Book">
              <ul className="modal-menu">
                {bookingLocations.map((location) => (
                  <li key={location.name}>
                    <a
                      href={location.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {location.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="modal-logo" aria-hidden="true" />
        </div>
      </div>

      <div
        className={`custom-modal ${activeModal === "careers" ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={activeModal !== "careers"}
        id="careers-modal"
      >
        <div className="custom-modal-overlay">
          <button
            type="button"
            className="custom-modal-close"
            aria-label="Close Modal"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="modal-content">
            <nav className="mobile-main" aria-label="Careers">
              <ul className="modal-menu">
                {careersLocations.map((location) => (
                  <li
                    key={location.name}
                    className={location.isHeader ? "opportunities" : ""}
                  >
                    {location.isHeader ? (
                      <span>{location.name}</span>
                    ) : (
                      <a
                        href={location.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {location.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="modal-logo" aria-hidden="true" />
        </div>
      </div>
    </>
  );
}
