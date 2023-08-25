import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinMapFill,
  BsLinkedin,
} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export const about = [
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export const legal = [
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
];

export const socials = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/",
    icon: <BsFacebook />,
  },
  {
    title: "Linked In",
    link: "https://linkedin.com/",
    icon: <BsLinkedin />,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/",
    icon: <BsInstagram />,
  },
];

export const brand = [
  {
    title: "info@findebme.com",
    icon: <IoMdMail />,
  },
  {
    title: "(+971) 50 891 5830",
    icon: <FaPhoneAlt />,
  },
  {
    title: "P.O Box 112037 2706 Prime Tower Business Bay, Dubai, UAE",
    icon: <BsPinMapFill />,
  },
];
