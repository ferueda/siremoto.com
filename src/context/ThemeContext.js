import React, { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const contextObject = React.useMemo(() => {
		return {
			light: true,
			lightBackgroundImageSrc: '/assets/images/laptop-stickers-640x427.jpg',
			darkBackgroundImageSrc: '/assets/images/street-desktop-640x427.jpg',
		};
	}, []);

	console.log('ThemeContext');

	return <ThemeContext.Provider value={{ ...contextObject }}>{children}</ThemeContext.Provider>;
};

export default React.memo(ThemeContextProvider);
