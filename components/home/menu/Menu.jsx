import Image from "next/image";
import React from "react";
import styles from "./Menu.module.css";

//todo:-----Menu component-----://
const Menu = (props) => {
	return (
		<>
			<div className={styles.title}>
        <h2>MENU</h2>
			</div>
      <div className={styles.filter}>
        <p className={styles.item}>Seasonal Product</p>
        <p className={styles.item}>Best Seller</p>
        <p className={styles.item}>Coffee</p>
      </div>
		</>
	);
};

export default Menu;
