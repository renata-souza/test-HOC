import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <ul className={styles.sidebar}>
      <li><Link to="/">Signatures</Link></li>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/groups">Groups</Link></li>
    </ul>
  );
};

export default Sidebar;
