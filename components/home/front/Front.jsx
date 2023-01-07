import Image from "next/image";
import React from "react";
import styles from "./Front.module.css";

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
			<div className={styles.motifWrapper}>
				<Image
					className={styles.motif}
					src={"/assets/motif.png"}
					width={1292}
					height={570}
					alt="logo"
				/>
				<div className={styles.card}>
					<h5>Good Afternoon,</h5>
					<h4>Guntur Saputro</h4>
					<div className={styles.info}>
						<div className={styles.barcodeWrapper}>
							<Image
								className={styles.barcode}
								src={"/assets/barcode.png"}
								width={312}
								height={312}
								alt="logo"
							/>
						</div>
            <div className={styles.values}>
              <div className={styles.value}>
                <p>Saldo</p>
                <p>Rp. 279.000</p>
              </div>
              <div className={styles.value}>
                <p>Points</p>
                <p>2.500</p>
              </div>
            </div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Front;
