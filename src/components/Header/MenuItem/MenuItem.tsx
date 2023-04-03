import React from "react";
import styles from "./style.module.css";

type MenuItemProps = { name: string };

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  const { name } = props;
  return <div className={styles.container}>{name}</div>;
};

export default MenuItem;
