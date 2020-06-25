import React, { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const contextObject = {
		light: true,
		lightBackgroundImageSrc: '/assets/images/laptop-stickers-640x427.jpg',
		darkBackgroundImageSrc: '/assets/images/street-desktop-640x427.jpg',
	};

	return <ThemeContext.Provider value={{ ...contextObject }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
