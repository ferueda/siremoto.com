import React from 'react';

import JobsContextProvider from './JobsContext';
import ThemeContextProvider from './ThemeContext';

const GlobalState = ({ children }) => {
	return (
		<JobsContextProvider>
			<ThemeContextProvider>{children}</ThemeContextProvider>
		</JobsContextProvider>
	);
};

export default GlobalState;
