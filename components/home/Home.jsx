import Image from "next/image";
import React, { useState } from "react";
import Front from "./front/Front";
import Menu from "./menu/Menu";
import styles from "./Home.module.css";

//todo:-----Home component-----://
const Home = (props) => {
	const [isHome, setIsHome] = useState(true);

	const home1 = "/assets/home1.png";
	const home2 = "/assets/home2.png";
	const menu1 = "/assets/menu1.png";
	const menu2 = "/assets/menu2.png";

	const handleChooseHome = () => {
		setIsHome(true);
	};

	const handleChooseMenu = () => {
		setIsHome(false);
	};

	return (
		<div className={styles.container}>
			{isHome ? <Front /> : <Menu />}

			<div className={styles.bottom}>
				<div className={styles.bottomItem} onClick={handleChooseHome}>
					<Image
						className={styles.bottomImage}
						src={isHome ? home1 : home2}
						alt="home"
						width={75}
						height={75}
					/>
					<p>Home</p>
				</div>
				<div className={styles.bottomItem} onClick={handleChooseMenu}>
					<Image
						className={styles.bottomImage}
						src={isHome ? menu2 : menu1}
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
