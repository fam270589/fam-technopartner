import Image from "next/image";
import { useContext } from "react";
import { LoginContext } from "../../store/login-ctx";
import styles from "./Login.module.css";

//todo:-----Login component-----://
const Login = (props) => {
  const loginCtx = useContext(LoginContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    loginCtx.toggleLogin();
  }

	return (
		<div className={styles.container}>
			<div className={styles.imageWrapper}>
				<Image
					className={styles.image}
					src={"/assets/logo.png"}
					width={440}
					height={215}
					alt="logo"
				/>
			</div>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.inputField}>
					<label className={styles.label} htmlFor="email">
						Email
					</label>
					<input className={styles.input} type="text" />
				</div>
				<div className={styles.inputField}>
					<label className={styles.label} htmlFor="password">
						Password
					</label>
					<input className={styles.input} type="text" />
				</div>
				<button className={styles.button}>Login</button>
			</form>
		</div>
	);
};

export default Login;
