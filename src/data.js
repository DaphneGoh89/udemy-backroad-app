import tourImg1 from "./images/tour-1.jpeg";
import tourImg2 from "./images/tour-2.jpeg";
import tourImg3 from "./images/tour-3.jpeg";
import tourImg4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, link: "#home", text: "Home" },
  { id: 2, link: "#about", text: "About" },
  { id: 3, link: "#services", text: "Services" },
  { id: 4, link: "#tours", text: "Tours" },
];

export const socialLinks = [
  { id: 1, link: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, link: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, link: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

export const tours = [
  {
    id: 1,
    image: tourImg1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ae tempore voluptatum maxime reprehenderit eum quode rcitationem fugit, qui corporis.",
    location: "china",
    price: 2100,
    duration: 6,
  },
  {
    id: 2,
    image: tourImg2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ae tempore voluptatum maxime reprehenderit eum quode rcitationem fugit, qui corporis.",
    location: "indonesia",
    price: 1400,
    duration: 11,
  },
  {
    id: 3,
    image: tourImg3,
    date: "september 15th, 2020",
    title: "Explore Hong Kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ae tempore voluptatum maxime reprehenderit eum quode rcitationem fugit, qui corporis.",
    location: "hong kong",
    price: 5000,
    duration: 8,
  },
  {
    id: 4,
    image: tourImg4,
    date: "december 5th, 2019",
    title: "Kenya Highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ae tempore voluptatum maxime reprehenderit eum quode rcitationem fugit, qui corporis.",
    location: "kenya",
    price: 3300,
    duration: 6,
  },
];
