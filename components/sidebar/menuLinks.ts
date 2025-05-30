import { BiMovie } from "react-icons/bi";
import { LuTicketSlash, LuTv } from "react-icons/lu";
import { GiFallingStar } from "react-icons/gi";
import { GrHome } from "react-icons/gr";

export const menuList = [
  {
    name: "Home",
    href: "/cinema",
    icon: GrHome,
    parentPath: ""
  },
  {
    name: "Movies",
    href: "/movies",
    icon: BiMovie,
    parentPath: "cinema"
  },
  {
    name: "Upcoming movies",
    href: "/upcoming-movies",
    icon: LuTicketSlash,
    parentPath: "cinema"
  },
  {
    name: "Top rated movies",
    href: "/top-rated-movies",
    icon: GiFallingStar,
    parentPath: "cinema"
  },
  {
    name: "Tv Shows",
    href: "/tv-shows",
    icon: LuTv,
    parentPath: "cinema"
  },
];
