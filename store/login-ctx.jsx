import React, { useState } from "react";

export const LoginContext = React.createContext({
	isLoggedIn: false,
	toggleLogin: () => {},
});

//todo:-----LoginCtxProvider component-----://
const LoginCtxProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const toggleLogin = () => {
		setIsLoggedIn((prevState) => !prevState);
	};

	const contextValue = {
		isLoggedIn,
		toggleLogin,
	};

	return (
		<LoginContext.Provider value={contextValue}>
			{props.children}
		</LoginContext.Provider>
	);
};

export default LoginCtxProvider;
