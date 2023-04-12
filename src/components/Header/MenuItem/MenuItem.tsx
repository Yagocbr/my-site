import React from "react";
import styles from "./style.module.css";

type MenuItemProps = { name: string; isActive: boolean; onClick: () => void };

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  const { name, isActive, onClick } = props;
  return (
    <div className={`${styles.container} ${isActive ? styles.isActive : ""}`} onClick={onClick}>
      {name}
    </div>
  );
};

export default MenuItem;
