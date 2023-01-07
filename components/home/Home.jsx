import Image from "next/image";
import React from "react";
import Front from "./front/Front";
import styles from "./Home.module.css";

//todo:-----Home component-----://
const Home = (props) => {
	const home1 = "/assets/home1.png";
	const home2 = "/assets/home2.png";
	const menu1 = "/assets/menu1.png";
	const menu2 = "/assets/menu2.png";

	return (
		<div className={styles.container}>
      <Front />

			<div className={styles.bottom}>
				<div className={styles.bottomItem}>
					<Image
						className={styles.bottomImage}
						src={home1}
						alt="home"
						width={75}
						height={75}
					/>
					<p>Home</p>
				</div>
				<div className={styles.bottomItem}>
					<Image
						className={styles.bottomImage}
						src={menu1}
						alt="home"
						width={75}
						height={75}
					/>
					<p>Menu</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
