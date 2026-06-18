"use client";

import { createContext, useCallback, useContext, useState } from "react";

type ModalType = "book" | "careers" | null;

type ModalContextValue = {
  activeModal: ModalType;
  openBook: () => void;
  openCareers: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openBook = useCallback(() => setActiveModal("book"), []);
  const openCareers = useCallback(() => setActiveModal("careers"), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  return (
    <ModalContext.Provider
      value={{ activeModal, openBook, openCareers, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
}
