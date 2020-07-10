import React, { createContext } from 'react';

import useFetchJobs from '../hooks/useFetchJobs';

export const JobsContext = createContext();

const JobsContextProvider = ({ children }) => {
	const initialState = {
		jobs: [],
		isError: false,
		isLoading: false,
	};

	const { jobs, dispatchFetchJobs, isLoading, isError } = useFetchJobs(initialState);

	const handleSearch = search => {
		console.log(search);
	};

	const contextObject = React.useMemo(() => {
		return {
			jobs,
			dispatchFetchJobs,
			isLoading,
			isError,
			handleSearch,
		};
	}, [jobs, dispatchFetchJobs, isLoading, isError]);

	console.log('JobsContext');

	return <JobsContext.Provider value={{ ...contextObject }}>{children}</JobsContext.Provider>;
};

export default React.memo(JobsContextProvider);
