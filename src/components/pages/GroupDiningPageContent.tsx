"use client";

import Image from "next/image";
import { ItalicLink } from "@/components/SectionBar";
import { groupDiningPage } from "@/content/pages";
import { useModal } from "@/components/ModalProvider";

export function GroupDiningPageContent() {
  const { openBook } = useModal();

  return (
    <div className="content">
      <div className="postContent">
        <h1>
          {groupDiningPage.title}
          <span className="thai"> {groupDiningPage.titleThai}</span>
        </h1>
        <p>{groupDiningPage.emailIntro}</p>

        <h3>{groupDiningPage.heading}</h3>
        <h3>{groupDiningPage.subheading}</h3>
        <ItalicLink onClick={openBook}>{groupDiningPage.cta}</ItalicLink>

        <div className="group-dining-grid">
          {groupDiningPage.images.map((image) => (
            <a key={image.alt} href={image.href}>
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
              />
            </a>
          ))}
          <div style={{ display: "flex", alignItems: "center" }}>
            <ItalicLink href={groupDiningPage.enquiryHref}>
              {groupDiningPage.enquiryCta}
            </ItalicLink>
          </div>
        </div>

        {groupDiningPage.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
