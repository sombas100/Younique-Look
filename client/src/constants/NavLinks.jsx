export const navLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About Us",
    to: "/about-us",
  },
  {
    name: "Services",
    to: "/services",
    submenu: [
      { name: Face, to: "/services/face" },
      { name: Eyes, to: "/services/eyes" },
      { name: Lips, to: "/services/Lips" },
      { name: Nails, to: "/services/nails" },
      { name: Brows, to: "/services/brows" },
    ],
  },
  {
    name: "Blog",
    to: "/blog",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];
