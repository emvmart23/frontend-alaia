import { Outlet } from "react-router";
import styles from "./AuthLayout.module.css";
import authImage from "../../../assets/images/common/auth.jpg"

export default function AuthLayout() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.imageSection}>
        <img
          src={authImage}
          alt="Fresh plants"
          className={styles.image}
        />
      </div>

      <div className={styles.formSection}>
        <Outlet />
      </div>
    </div>
  );
}