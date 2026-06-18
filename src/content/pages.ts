export const homePage = {
  hero: {
    video: "/images/uploads/hero-video.mp4",
    poster: "/images/uploads/DSC01994.jpg",
    logo: "/images/uploads/PLAZA-LOGO-WHITE.png",
    title1: "A Southern Thai Raan Khao Gaeng",
    title2: "Covent Garden, Borough Yards & Tottenham Court Road",
    ctaLocations: { label: "LOCATIONS", href: "/locations" },
    ctaReservations: { label: "RESERVATIONS", action: "book" as const },
  },
  about: {
    label: "About us",
    heading:
      "Plaza Khao Gaeng is a celebration of Southern Thailand's coast-to-jungle cuisine",
    paragraphs: [
      "'Khao gaeng' broadly means 'curry over rice', an informal style of restaurant that proliferates across Thailand popping up on street corners and roadsides alike. These restaurants fill the space around them as their popularity grows.",
      "Plaza Khao Gaeng mirrors one such venue that took over an old movie theatre in Bangkok, a faded façade giving way to curries set out in gleaming trays – any time comfort food providing pause from the bustle of the street outside.",
    ],
    imageLeft: "/images/uploads/DSC00275.jpg",
    imageRight: "/images/uploads/Khao-Gaeng-3.jpg",
    imageRightAlt: "RAAN KHAO GAENG",
    imageCenter: "/images/uploads/DSC01832.jpg",
    imageCenterAlt: "CHEF TEAM IN PHATTALUNG",
  },
  bookings: {
    label: "Bookings",
    text: "Reservations are available for Plaza Khao Gaeng Covent Garden, Borough Yards, and Tottenham Court Road, with online booking available for groups of up to 22 guests.",
    cta: "Reserve now",
    backgroundImage: "/images/uploads/home-2.jpg",
  },
  menu: {
    label: "MENU",
    description:
      "Curries thick with fresh coconut milk and aromatic pastes, the familiar tang of fermented fish, and searingly hot stir-fries placated by bright handful of cooling herbs.",
    cta: "Explore menus",
    ctaHref: "/menus",
    imageLeft: "/images/uploads/home-5.jpg",
    imageLeftAlt: "FISH DISH",
    imageRight: "/images/uploads/home-8.jpg",
    imageRightAlt: "PHATTALUNG STREET",
  },
  locations: {
    region: "United Kingdom",
  },
};

export const aboutPage = {
  title: "About",
  heading: "Behind Plaza Khao Gaeng",
  sections: [
    {
      title: "LUKE",
      text: "Having called Thailand home for nearly 20 years, Luke's return to London came in 2022 with the opening of Plaza Khao Gaeng Tottenham Court Road, followed by our sister restaurant Speedboat Bar in Chinatown just months later. His passion is evident in the restaurants he creates, each bringing a new dimension of Thai cuisine and culture to the city, serving as a home away from home for Luke – and so many others – in the heart of London.",
      image: "/images/uploads/about-5.jpg",
    },
    {
      title: "RYEWATER NURSERY",
      text: "Both Speedboat Bar and Plaza Khao Gaeng serve as loving recreations of Luke's favourite restaurants from home. Much of the secret to their success lies in Luke's impressive green fingers, put to use at Ryewater Nursery in Dorset. Here Luke has created his own jungle microclimate, where he dutifully grows regional varieties of herbs, specialist ingredients such as green papaya and Thai limes, and the diverse chillies that bring Thai cuisine to life.",
      image: "/images/uploads/about-7.jpg",
    },
    {
      title: "CHAIYO",
      text: "Chaiyo Restaurants encompasses Plaza Khao Gaeng – Tottenham Court Road and Borough Yards – as well as Speedboat Bar, with locations in Soho and Notting Hill. Committed to sharing true Thai cuisine, our restaurants lovingly recreate the recipes and atmosphere of Thailand, uncompromisingly so. To do any less, we feel, would be a disservice.",
      image: "/images/uploads/DSC00400.jpg",
    },
  ],
};

export const menuPage = {
  title: "Menu",
  titleThai: "เมนู",
  heading: "Explore our menus",
  region: "United Kingdom",
};

export const locationsPage = {
  title: "Our Locations",
  titleThai: "สาขา",
  heading: "Choose a raan khao gaeng to explore.",
  region: "United Kingdom",
  heroImage: "/images/uploads/locations-1-2.jpg",
};

export const groupDiningPage = {
  title: "Group Dining",
  titleThai: "ห้องจัดเลี้ยง",
  emailIntro: "Get in touch with any queries to: events@plazakhaogaeng.com",
  heading: "Group Dining",
  subheading:
    "Join us at Plaza Covent Garden, Borough Yards or Tottenham Court Road for large group dining and private events.",
  cta: "Book now",
  images: [
  {
    src: "/images/uploads/DSC08632.jpg",
    alt: "Borough Yards Events Pack",
    href: "#",
  },
  {
    src: "/images/uploads/SC-38.jpg",
    alt: "Covent Garden Events Pack",
    href: "#",
  },
  ],
  enquiryCta: "Make an enquiry",
  enquiryHref: "mailto:events@plazakhaogaeng.com",
  paragraphs: [
    "From group dining for up to 24 guests in Covent Garden, 20 guests on the mezzanine of Borough Yards or full takeovers of Tottenham Court Road, we have options to suit a range of events at Plaza Khao Gaeng. Lending itself naturally to communal dining, a raan khao gaeng is the perfect place to host larger gatherings: vibrant, convivial, and energetic.",
    "Our dedicated team would be delighted to work with you to create bespoke menus and drink packages to bring your event to life, be it with together colleagues, friends, or family. You can view our spaces above or email: events@plazakhaogaeng.com",
  ],
};
