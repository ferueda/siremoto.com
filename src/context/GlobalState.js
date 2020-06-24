import React, { createContext } from 'react';

import useFetchJobs from '../hooks/useFetchJobs';

export const JobsContext = createContext();

const GlobalState = ({ children }) => {
	const initialState = {
		jobs: [],
		isError: false,
		isLoading: false,
	};

	const { jobs, dispatchFetchJobs, isLoading, isError } = useFetchJobs(initialState);

	const handleSearch = search => {
		console.log(search);
	};

	const contextObject = {
		jobs,
		dispatchFetchJobs,
		isLoading,
		isError,
		handleSearch,
	};

	return <JobsContext.Provider value={contextObject}>{children}</JobsContext.Provider>;
};

export default GlobalState;
