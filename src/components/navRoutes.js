import { BiHomeAlt2 } from "react-icons/bi";
import SearchIcon from '@mui/icons-material/Search';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';

export const routes = [
  {
    title: "Explore",
    href: "/explore",
    Icon: SearchIcon,
    color: "#e40303"
  },
  {
    title: "Pricing",
    href: "/pricing",
    Icon: AttachMoneyIcon,
    color: "#ff8C00"
  },
  {
    title: "About",
    href: "/about",
    Icon: InfoIcon,
    color: "#ffed00"
  },
  {
    title: "Login",
    href: "/login",
    Icon: LoginIcon,
    color: "#008026"
  },
  {
    title: "Signup",
    href: "/signup",
    Icon: LoginIcon,
    color: "#004cff",
  },
];