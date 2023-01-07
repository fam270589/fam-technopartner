import Image from "next/image";
import React from "react";
import styles from './Front.module.css';

//todo:-----Front component-----://
const Front = (props) => {
	return (
		<>
			<div className={styles.logoWrapper}>
				<Image
					className={styles.logo}
					src={"/assets/logo.png"}
					width={440}
					height={215}
					alt="logo"
				/>
			</div>
		</>
	);
};

export default Front;
