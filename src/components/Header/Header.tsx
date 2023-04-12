import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import { PAGES } from "@/lib/utils";
import styles from "@/styles/Header.module.css";
import { useRouter } from "next/router";

type HeaderProps = { selectedMenu: number };

const Header: React.FC<HeaderProps> = ({ selectedMenu }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.navigator}>
        <div className={styles.title}>
          <div>Yago</div>
          <div>Cabral</div>
        </div>
        <div className={styles.menu}>
          {Object.values(PAGES).map((page) => {
            return (
              <MenuItem
                name={page.NAME}
                isActive={page.ID === selectedMenu}
                onClick={() => router.push(`/${page.URL}`)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
