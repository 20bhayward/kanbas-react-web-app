import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css"; 
function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
    const { pathname } = useLocation();
    const { courseId } = useParams();
  
    return (
      <ul className="wd-navigation">
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
            <Link to={`/Kanbas/Courses/${courseId}/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    );
  }
export default CourseNavigation;

