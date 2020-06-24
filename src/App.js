import React from 'react';
import GlobalStyle from './styles/GlobalStyle';

import GlobalState from './context/GlobalState';

import Header from './components/Header';
import JobList from './components/JobList';

const App = () => {
	return (
		<GlobalState>
			<GlobalStyle />
			<Header />
			<JobList />
		</GlobalState>
	);
};

export default App;
