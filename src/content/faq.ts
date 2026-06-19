import type { FaqSection } from "./types";
import { pageHeroImage } from "./heroImages";
import { site } from "./site";

export const faqIntro = {
  heroTitle: "FAQ",
  heroTitleZh: "常见问题",
  heroImage: pageHeroImage("faq"),
  title: "Frequently Asked Questions",
  titleZh: "常见问题",
};

export const faqSections: FaqSection[] = [
  {
    title: "Bookings",
    items: [
      {
        question: "How do I make a booking?",
        answer: "At both restaurants we are currently walk-in only.",
      },
      {
        question: "Are you able to seat large parties?",
        answer:
          "At DSD Pentonville Road, we can accommodate walk-ins for larger parties. At DSD King's Cross Road, our maximum seating is 4 people (5 at a squeeze).",
      },
    ],
  },
  {
    title: "Walk-Ins",
    items: [
      {
        question: "What are your non peak hours for walk-in?",
        answer: "Monday – Friday: 11:30 AM – 5 PM and after 8:00 PM.",
      },
    ],
  },
  {
    title: "Allergies & Dietary Requirements",
    alwaysVisible: true,
    notice: `Please be aware that nuts (including peanuts and sesame) are used extensively throughout our kitchen, and many of our dishes contain or may come into contact with gluten. Some dishes are also prepared using pork fat.

Due to the risk of cross-contamination, we may not be able to cater safely for guests with severe nut, sesame, or gluten allergies. If you have any allergies, intolerances, or dietary requirements, please speak to a member of our team before ordering. We recommend that guests with severe allergies carefully consider whether our restaurant is suitable for their needs.`,
    items: [
      {
        question: "Is your food kosher or halal?",
        answer:
          "Unfortunately, our food is not kosher or halal, as we use different types of meat in our kitchen. We thank you for your understanding.",
      },
    ],
  },
  {
    title: "Ahead of Your Visit",
    items: [
      {
        question: "Is your restaurant wheelchair accessible?",
        answer:
          "At DSD Pentonville Road, there are steps at the entrance. At DSD King's Cross Road, there is outside seating but limited space between tables, which may make access difficult for wheelchair users. If you require assistance or accessible seating, please let us know in advance and we will do our best to accommodate you. We apologise for any inconvenience and thank you for your understanding.",
      },
      {
        question: "Do you serve alcohol?",
        answer:
          "Yes! Please refer to our drinks menu for the full selection.",
      },
      {
        question: "Are you BYOB?",
        answer:
          "Unfortunately, we do not allow outside food or drinks in our restaurant. We offer a wide range of drinks—please refer to our drinks menu and wine list.",
      },
      {
        question: "Do you have a kids' menu?",
        answer:
          "We do not currently have a kids' menu, but many of our dishes are suitable for children.",
      },
      {
        question: "Are you pet friendly?",
        answer:
          "At DSD Pentonville Road, we do not allow dogs due to indoor seating. At DSD King's Cross Road, we may accommodate small dogs in our outdoor canopy seating, depending on availability and on the space available.",
      },
      {
        question: "Do you offer delivery or takeaway?",
        answer:
          "At present, we do not offer delivery services. We look forward to welcoming you to dine with us in the restaurant.",
      },
    ],
  },
  {
    title: "Other Questions",
    items: [
      {
        question: "I've lost or left an item at the restaurant. What should I do?",
        answer:
          "Our team will do their best to help locate your item. If found, we will store it safely until you can collect it. Please contact us via WhatsApp or Instagram for assistance.",
      },
      {
        question: "How do I contact you for further assistance?",
        answer: `Please send us a message on WhatsApp ${site.social.whatsappDisplay} or Instagram, and we will respond as soon as possible.`,
      },
    ],
  },
  {
    title: "Payments",
    items: [
      {
        question: "Which credit cards do you accept?",
        answer:
          "We accept most major credit cards, but we do not currently accept American Express or international cards.",
      },
      {
        question: "How do I pay?",
        answer:
          "We accept both card and cash payments. If possible, we appreciate cash payments, as this helps reduce card processing fees for our small business. Thank you for your support.",
      },
    ],
  },
  {
    title: "Location",
    items: [
      {
        question: "What is the nearest station?",
        answer: "Our nearest underground station is King's Cross St Pancras Station.",
      },
    ],
  },
];
