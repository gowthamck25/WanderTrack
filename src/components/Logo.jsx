import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
      {/* <h2
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "2.4em",
        }}
      >
        WanderTrack
      </h2> */}
    </Link>
  );
}

export default Logo;
