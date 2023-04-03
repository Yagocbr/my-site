import React from "react";
import styles from "@/styles/Header.module.css";
import MenuItem from "./MenuItem/MenuItem";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigator}>
        <div className={styles.title}>
          <div>Yago</div>
          <div>Cabral</div>
        </div>
        <div className={styles.menu}>
          <MenuItem name="Home" />
          <MenuItem name="About" />
          <MenuItem name="Services" />
          <MenuItem name="Portfolio" />
          <MenuItem name="Store" />
          <MenuItem name="Blog" />
          <MenuItem name="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Header;
