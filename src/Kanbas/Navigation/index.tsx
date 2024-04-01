import { Link, useLocation } from "react-router-dom";
import "../../index.css";
import {
  FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,
  FaInbox, FaHistory, FaTv, FaArrowRight, FaInfoCircle
} from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="icon" />, path: "/Kanbas/Account" },
    { label: "Dashboard", icon: <FaTachometerAlt className="icon" />, path: "/Kanbas/Dashboard" },
    { label: "Courses", icon: <FaBook className="icon" />, path: "/Kanbas/Courses" },
    { label: "Calendar", icon: <FaRegCalendarAlt className="icon" />, path: "/Kanbas/Calendar" },
    { label: "Inbox", icon: <FaInbox className="icon" />, path: "#" },
    { label: "History", icon: <FaHistory className="icon" />, path: "#" },
    { label: "Studio", icon: <FaTv className="icon" />, path: "#" },
    { label: "Commons", icon: <FaArrowRight className="icon" />, path: "#" },
    { label: "Help", icon: <FaInfoCircle className="icon" />, path: "#" },
  ];

  const { pathname } = useLocation();

  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.path) ? "wd-active" : ""}>
          <Link to={link.path}>
            {link.icon}
            <br/>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default KanbasNavigation;
