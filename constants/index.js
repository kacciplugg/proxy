import { twitter, instagram, facebook, linkedin } from "@public/assets";

import { FaRegBuilding } from "react-icons/fa";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { RiBuilding2Line } from "react-icons/ri";
import { BsBuildings } from "react-icons/bs";
import { GrResources } from "react-icons/gr";
import { RiStore2Line } from "react-icons/ri";
import { FaBitcoin } from "react-icons/fa";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    route: "/",
  },
  {
    id: "properties",
    title: "Properties",
    route: "/properties",
    links: [
      {
        name: "Residential",
        route: "/properties/residential",
      },
      {
        name: "Commercial",
        route: "properties/commercial",
      },
    ],
  },
  {
    id: "agents",
    title: "Agents",
    route: "/agents",
  },
  {
    id: "about",
    title: "About Us",
    route: "/about",
    links: [
      {
        name: "About Us",
        route: "/about",
      },
      {
        name: "Contact Us",
        route: "/contact",
      },
      {
        name: "Services",
        route: "/services",
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      {
        name: "About Us",
        route: "/about",
      },
      {
        name: "Contact Us",
        route: "/contact",
      },
      {
        name: "Services",
        route: "/services",
      },
    ],
  },
];

export const SearchBtns = [
  {
    id: "retail",
    name: "Retail",
    Icon: RiStore2Line,
    link: "properties/retail",
  },
  {
    id: "office",
    name: "Office",
    Icon: FaRegBuilding,
    link: "properties/office",
  },
  {
    id: "investment",
    name: "Investment Sales",
    Icon: HiOutlineBuildingLibrary,
    link: "properties/investmentsales",
  },
  {
    id: "apartment",
    name: "Apartment",
    Icon: BsBuildings,
    link: "properties/apartment",
  },
  {
    id: "resources",
    name: "Resources",
    Icon: GrResources,
    link: "properties/resources",
  },
  {
    id: "crypto",
    name: "Crypto/Blockchain",
    Icon: FaBitcoin,
    link: "properties/crypto",
  },
];

export const socialMedia = [
  {
    id: "twitter",
    Icon: twitter,
    link: "",
  },
  {
    id: "instagram",
    Icon: instagram,
    link: "",
  },
  {
    id: "facebook",
    Icon: facebook,
    link: "",
  },
  {
    id: "linkedin",
    Icon: linkedin,
    link: "",
  },
];

export const footerLinks = [
  {
    id: "about",
    name: "About Us",
    route: "/about",
  },
  {
    id: "properties",
    name: "Properties",
    route: "/properties",
  },
  {
    id: "agents",
    name: "Agents",
    route: "/agents",
  },
  {
    id: "contact",
    name: "Contact Us",
    route: "/contact",
  },
  {
    id: "privacy",
    name: "Privacy Policy",
    route: "/privacy",
  },
  {
    id: "terms",
    name: "Terms of Usage",
    route: "/terms",
  },
];
