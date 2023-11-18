import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";

export const PageLoader = () => {
  const loadingScreen = useRef(null);
  const loadingBar = useRef(null);
  useEffect(() => {}, []);

  return (
    <div ref={loadingScreen} className={styles.loading_section}>
      <div className={styles.loading_wrapper}>
        <div className={styles.bar} ref={loadingBar}>
          loading...
        </div>
      </div>
    </div>
  );
};
