import { useEffect, useReducer } from 'react';

import { actions, jobsReducer } from '../context/reducers';

const API_URL = 'http://localhost:3001/jobs/all';

const useFetchJobs = initialState => {
	const [{ jobs, isLoading, isError }, dispatchFetchJobs] = useReducer(jobsReducer, initialState);

	useEffect(() => {
		let didCancel = false;

		dispatchFetchJobs({ type: actions.FETCH_INIT });

		fetch(API_URL, { method: 'GET' })
			.then(res => res.json())
			.then(data => {
				if (!didCancel) {
					dispatchFetchJobs({ type: actions.FETCH_SUCCESS, payload: data });
				}
			})
			.catch(() => dispatchFetchJobs({ type: actions.FETCH_ERROR }));

		return () => {
			didCancel = true;
		};
	}, []);

	return { jobs, dispatchFetchJobs, isLoading, isError };
};

export default useFetchJobs;
