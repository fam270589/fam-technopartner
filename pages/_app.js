import LoginCtxProvider from "../store/login-ctx";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<LoginCtxProvider>
			<Component {...pageProps} />
		</LoginCtxProvider>
	);
}
